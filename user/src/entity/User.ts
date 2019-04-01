import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    wallet: string;

    @Column()
    private_key: string;

}
