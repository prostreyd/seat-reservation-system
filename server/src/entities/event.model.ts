import {
  Table,
  Column,
  Model,
  HasMany,
  PrimaryKey,
  AutoIncrement,
  DataType,
} from 'sequelize-typescript';
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import { Booking } from './booking.model';

@Table({
  tableName: 'events',
  timestamps: false, // Отключаем автоматические created_at и updated_at
})
export class Event extends Model<
  InferAttributes<Event>,
  InferCreationAttributes<Event>
> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER) // Явно указываем тип данных
  declare id: CreationOptional<number>;

  @Column
  declare name: string;

  @Column
  declare total_seats: number;

  @HasMany(() => Booking)
  bookings: Booking[];
}
