import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'holidays', timestamps: false })
export class Holiday extends Model<Holiday> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    date: string;

    @Column({ type: DataType.STRING, allowNull: false })
    localName: string;

    @Column({ type: DataType.STRING, allowNull: false })
    name: string;

    @Column({ type: DataType.STRING, allowNull: false })
    countryCode: string;

    @Column({ type: DataType.INTEGER, allowNull: false })
    year: number;
}
