import { buildSchema } from "type-graphql";
import "reflect-metadata"
import { RecipeResolver } from "./recipe-resolver";
import * as path from "path"
import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from '@apollo/server/standalone';

async function bootstrap() {

    const schema = await buildSchema({
        resolvers: [RecipeResolver],
        // automatically create `schema.gql` file with schema definition in current folder
        emitSchemaFile: path.resolve(__dirname, "schema.gql"),
    });

    const server = new ApolloServer({
        schema,
    })

    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    });

    console.log("server is running at", url);

}

bootstrap();

