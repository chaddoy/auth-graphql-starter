const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    someTempThing: { type: GraphQLString },
  }),
});

module.exports = RootQueryType;
