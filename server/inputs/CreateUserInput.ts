import { InputType, Field } from "type-graphql"

@InputType()
export class CreateUserInput {
    @Field()
    username: string;

    @Field()
    location: string;

    @Field()
    popularity: number;
}