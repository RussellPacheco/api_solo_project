import { Field, ObjectType, ID } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from "typeorm";
import User from "./UserModel";

@Entity({name: "image"})
@ObjectType()
export class Image extends BaseEntity {
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

export default Image;