import { InputType, Field } from "type-graphql"

@InputType()
export class CreateUserInput {
    @Field()
    username: string;

    @Field()
    location: string;

    @Field( { nullable: true })
    popularity?: number;

    @Field()
    followers: number;
}

@InputType()
export class UpdateUserInput {
    @Field()
    popularity: number;
}

@InputType()
export class AddUserImage {
    @Field()
    link: string;

    @Field()
    username: string;
}

@InputType()
export class AddUserVideo {
    @Field()
    link: string;

    @Field()
    username: string;
}