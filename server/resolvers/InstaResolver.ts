import {Resolver, Query, Mutation, Arg } from "type-graphql"
import User from "../entities/UserModel"
import { Video } from "../entities/VideoModel"
import { Image } from "../entities/ImageModel"
import { CreateUserInput, UpdateUserInput, AddUserImage, AddUserVideo } from "../inputs/InstaInput"


@Resolver()
export class InstaResolver {
    @Query(() => [User])
    getUsers() {
        return User.find()
    }

    @Query(() => User)
    async getUser(@Arg("username") username: String) {
        const user = await User.findOne({ where: { username } })
        return user
    }

    @Query(() => User)
    getMostPopular() {
        return User.findOne({ where: { popularity: 1 } })
    }


    @Query(() => Image)
    getUserImages(username: String) {
        return Image.find({ where: { username }})
    }


    @Query(() => Video)
    getVideos(username: String) {
        return Video.find({ where: { username }})
    }

    @Query(() => User)
    getLocation(@Arg("username") username: String) {
        return User.findOne({ where: { username } })
    }
    
    @Mutation(() => User) 
    async createUser(@Arg("data") data: CreateUserInput) {
        const searchResults = await User.findOne({where: {username: data.username}})
        if (searchResults !== undefined) {
            const user = await User.findOne({ where: { username: data.username } })
            return user
        }
        const user = User.create(data)
        await user.save();
        return user
    }

    @Mutation(() => Image) 
    async addImage(@Arg("data") data: AddUserImage) {
        const searchResults = await Image.findOne({ where: {id: data.username } })
        if (searchResults !== undefined) {
            return searchResults
        }
        const user = await User.findOne({ where: { username: data.username }})
        const image = Image.create({ link: data.link, owner: user })
        await image.save();
        return image
    }

    @Mutation(() => Video)
    async addVideo(@Arg("data") data: AddUserVideo) {
        const searchResults = await Video.findOne({ where: { id:data.username } })
        if (searchResults !== undefined) {
            return searchResults
        }
        const user = await User.findOne({ where: { username: data.username }})
        const video = Video.create({ link: data.link, owner: user })
        await video.save()
        return video
    }

    @Mutation(() => User)
    async updateUser(@Arg("username") username: string, @Arg("data") data: UpdateUserInput) {
        const user = await User.findOne({where: { username }})
        if (!user) {
            const user = await User.findOne({where: { username: "popcorn"}})
            return user
        }
    }

    @Mutation(() => User)
    async updatePopularity() {
        let users = await User.find()
        let counter = 1
        let highestFollowers = {id: "0", followers:0, index: 0}

        while (users.length) {
            for(let i=0;i<users.length;i++) {
                if(users[i].followers > highestFollowers.followers) {
                    highestFollowers.id = users[i].id
                    highestFollowers.followers = users[i].followers
                    highestFollowers.index = i
                }
            }
            
            let mostPopular = await User.findOne({ where: { id: highestFollowers.id } })
            mostPopular.popularity = counter
            mostPopular.save()
            counter++
            users.splice(highestFollowers.index, 1)
            highestFollowers = {id: "0", followers:0, index: 0}
        }

        let firstUser = await User.findOne({ where: { popularity: 1 } })

        return firstUser
    }
}

export default InstaResolver