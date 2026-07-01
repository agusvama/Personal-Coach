import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateCoachDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;
}
