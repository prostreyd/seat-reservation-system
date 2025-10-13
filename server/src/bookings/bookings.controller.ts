import { Controller, Post, Body } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { Booking } from '../entities/booking.model';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Post('reserve')
  async reserveSeat(
    @Body() createBookingDto: CreateBookingDto,
  ): Promise<Booking> {
    return await this.bookingsService.reserveSeat(createBookingDto);
  }
}
