const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;
const UserType = require('./types/user_type');
const AuthService = require('../services/auth');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    // Here we define the mutation that will be used to create a new user
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(_parentValue, { email, password }, req) {
        return AuthService.signup({ email, password, req });
      }
    },
    // Here we define the mutation that will be used to log a user out
    logout: {
      type: UserType,
      resolve(_parentValue, _args, req) {
        const { user } = req;
        req.logout();
        return user;
      }
    },
    // Here we define the mutation that will be used to log a user in
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(_parentValue, { email, password }, req) {
        return AuthService.login({ email, password, req });
      }
    }
  }
});

module.exports = mutation;
