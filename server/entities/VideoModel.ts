import { Field, ObjectType, ID } from "type-graphql";
import { Entity, OneToMany, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne } from "typeorm";
import User from "./UserModel";

@Entity()
@ObjectType()
export class Video {
    @Field(() => ID)
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Field(() => String)
    @Column()
    public link: string;

    @Field(() => String)
    @ManyToOne(() => User, (user) => user.id)
    public owner: User;
}

export default Video;