import { ApolloServer } from "apollo-server"
// import bodyParser from "body-parser"
// import typeDefs from "./schema.js"
import "reflect-metadata"
import { createConnection, Connection } from "typeorm"
import { buildSchema } from "type-graphql"
import { InstaResolver } from "./resolvers/InstaResolver"


class App {
    public server: ApolloServer;
    public connection: Connection;
    public readonly port: Number;

    protected startHook: () => void;

    constructor() {
        this.connection;
        this.server;
        this.port = 8080;
        this.startHook = () => {
            console.log(`Server running at localhost:${this.port}`)
        }
    }

    async start() {
        this.connection = await createConnection()
        const schema = await buildSchema({
            resolvers: [InstaResolver]
        })

        this.server = new ApolloServer({ schema })
        await this.server.listen(this.port, this.startHook)
        console.log("Server has started")


    }
}


export function runApp() {
    return new App()
}

export default App

