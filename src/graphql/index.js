const { ApolloServer } = require('@apollo/server');
const { ApolloServerPluginLandingPageLocalDefault } = require('@apollo/server/plugin/landingPage/default');
const { expressMiddleware } = require('@apollo/server/express4');
const { loadFiles } = require('@graphql-tools/load-files');
const { buildContext } = require('graphql-passport');


const resolvers = require('./resolvers')


const useGraphql = async (app) => {
    const server = new ApolloServer({
        typeDefs: await loadFiles('./src/**/*.graphql'),
        resolvers,
        playground: true,
        plugins: [
            ApolloServerPluginLandingPageLocalDefault
        ]
    });
    await server.start();
    // Uso del middleware en Express
    app.use(
        '/graphql',
        expressMiddleware(server, {
          context: async ({ req, res }) => buildContext({ req, res }),
        })
    );
}

module.exports = useGraphql;