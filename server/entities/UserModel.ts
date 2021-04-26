import { Field, ObjectType, ID } from "type-graphql";
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({name: "users"}) 
@ObjectType()
export class User extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    public id: string;

    @Field(() => String)
    @Column()
    public username: string;

    @Field(() => String)
    @Column()
    public location: string;

    @Field(() => Number)
    @Column({ nullable: true })
    public popularity?: number;

    @Field(() => Number)
    @Column()
    public followers: number;
}

export default User;