import { Column, DataType, ForeignKey, Index, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Holiday } from 'src/holiday/holiday.entity';

@Table({ tableName: 'calendars', timestamps: false })
export class Calendar extends Model<Calendar> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @Index({ name: 'unique_user_holiday', unique: true })
    @Column({ type: DataType.INTEGER, allowNull: false })
    user_id: number;

    @Index({ name: 'unique_user_holiday', unique: true })
    @ForeignKey(() => Holiday)
    @PrimaryKey
    @Column
    holiday_id: number;
}
