import {Resolver, Query, Mutation, Arg } from "type-graphql"
import User from "../entities/UserModel"
import { Video } from "../entities/VideoModel"
import { Image } from "../entities/ImageModel"
import { CreateUserInput } from "../inputs/CreateUserInput"


@Resolver()
export class InstaResolver {
    @Query(() => [User])
    getUsers() {
        return User.find()
    }

    @Query(() => String)
    getPopularity(user: String) {
        return "getPopularity"
    }


    @Query(() => String)
    getImages(user: String) {
        return "getImages"
    }


    @Query(() => String)
    getVideos(user: String) {
        return "getVideos"
    }

    @Query(() => String)
    getLocation(user: String) {
        return "getLocation"
    }
    
    @Mutation(() => User) 
    async createUser(@Arg("data") data: CreateUserInput) {
    const user = User.create(data)
    await user.save();
    return user
}

}

export default InstaResolver