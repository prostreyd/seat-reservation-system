import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  PrimaryKey,
  AutoIncrement,
  CreatedAt,
  DataType,
} from 'sequelize-typescript';
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import { Event } from './event.model';

@Table({
  tableName: 'bookings',
  timestamps: true,
  updatedAt: false,
  indexes: [
    {
      unique: true,
      fields: ['event_id', 'user_id'],
      name: 'event_user_unique_constraint',
    },
  ],
})
export class Booking extends Model<
  InferAttributes<Booking>,
  InferCreationAttributes<Booking>
> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: CreationOptional<number>;

  @ForeignKey(() => Event)
  @Column
  declare event_id: number;

  @Column
  declare user_id: string;

  @CreatedAt
  declare created_at: CreationOptional<Date>;

  @BelongsTo(() => Event)
  declare event?: CreationOptional<Event>;
}
