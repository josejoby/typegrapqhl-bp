import { buildSchema } from "type-graphql";
import "reflect-metadata"
import { RecipeResolver } from "./recipe-resolver";
import * as path from "path"
const { ApolloServer, gql } = require('apollo-server');


async function bootstrap() {

    const schema = await buildSchema({
        resolvers: [RecipeResolver],
        // automatically create `schema.gql` file with schema definition in current folder
        emitSchemaFile: path.resolve(__dirname, "schema.gql"),
    });

    const server = new ApolloServer({ schema });

    // The `listen` method launches a web server.
    server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
    });

}

bootstrap();

