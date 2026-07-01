import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Personal Coach');
  });

  it('creates a coach', () => {
  return request(app.getHttpServer())
    .post('/coaches')
    .send({
      name: 'Agus',
      email: 'agus@example.com',
    })
    .expect(201)
    .expect(( { body } ) => {
      expect(body.name).toBe('Agus');
      expect(body.email).toBe('agus@example.com');
    });
  });

  afterEach(async () => {
    await app.close();
  });
});
