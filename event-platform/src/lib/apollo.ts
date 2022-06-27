import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4wyectc0h2l01uk2vs9ed3e/master',
    cache: new InMemoryCache()
})