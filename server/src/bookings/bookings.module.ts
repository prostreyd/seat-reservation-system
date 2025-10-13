import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BookingsService } from './bookings.service';
import { BookingsController } from './bookings.controller';
import { Booking } from '../entities/booking.model';
import { Event } from '../entities/event.model';

@Module({
  imports: [SequelizeModule.forFeature([Booking, Event])],
  providers: [BookingsService],
  controllers: [BookingsController],
})
export class BookingsModule {}
