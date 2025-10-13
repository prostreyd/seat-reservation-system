import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Booking } from '../entities/booking.model';
import { Event } from '../entities/event.model';
import { CreateBookingDto } from './dto/create-booking.dto';
import { InferCreationAttributes } from 'sequelize'; // Добавляем импорт

@Injectable()
export class BookingsService {
  constructor(
    @InjectModel(Booking)
    private bookingModel: typeof Booking,
    @InjectModel(Event)
    private eventModel: typeof Event,
  ) {}

  async reserveSeat(createBookingDto: CreateBookingDto): Promise<Booking> {
    const { event_id, user_id } = createBookingDto;

    const event = await this.eventModel.findOne({
      where: { id: event_id },
      include: [{ model: this.bookingModel }],
    });

    if (!event) {
      throw new NotFoundException(`Event with ID ${event_id} not found.`);
    }

    if ((event.bookings?.length || 0) >= event.total_seats) {
      throw new ConflictException(
        `No seats available for event with ID ${event_id}.`,
      );
    }

    const existingBooking = await this.bookingModel.findOne({
      where: { event_id, user_id },
    });

    if (existingBooking) {
      throw new ConflictException(
        `User ${user_id} has already booked a seat for event ${event_id}.`,
      );
    }

    const newBooking = await this.bookingModel.create({
      event_id,
      user_id,
    } as Omit<InferCreationAttributes<Booking>, 'event'>);
    return newBooking;
  }
}
