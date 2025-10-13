import { IsString, IsNumber } from 'class-validator';

export class CreateBookingDto {
  @IsNumber()
  event_id: number;

  @IsString()
  user_id: string;
}
