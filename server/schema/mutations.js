const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    // Here we define the mutation that will be used to create a new user
    signup: {
      type: require('./types/user_type'),
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { email, password }, req) {
        // We're going to create a new user, and then return that user
        // We're not going to worry about hashing the password for now
        // We'll come back to that later
        return null;
      }
    }
  }
});

module.exports = mutation;
