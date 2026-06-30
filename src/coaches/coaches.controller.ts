import { Body, Controller, Post } from '@nestjs/common';
import { CoachesService } from './coaches.service';

@Controller('coaches')
export class CoachesController {
  constructor(private readonly coachesService: CoachesService) {}

  @Post()
  create(@Body() body: any) {
    return this.coachesService.create(body);
  }
}
