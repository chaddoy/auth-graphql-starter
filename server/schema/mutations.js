const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;
const AuthService = require('../services/auth');

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
      resolve(_parentValue, { email, password }, req) {
        return AuthService.signup({ email, password, req });
      }
    }
  }
});

module.exports = mutation;
