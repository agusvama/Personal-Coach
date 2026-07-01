import { Injectable } from '@nestjs/common';
import { CreateCoachDto } from './dto/create-coach.dto';

@Injectable()
export class CoachesService {
  create(body: CreateCoachDto): object {
    return body;
  }
}
