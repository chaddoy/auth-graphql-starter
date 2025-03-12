import React, { Component } from 'react';
import AuthForm from './AuthForm';
import { graphql } from 'react-apollo';
import mutation from '../mutations/Signup';
import query from '../queries/CurrentUser';

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = { errors: [] };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query }]
    }).then(() => {
      this.setState({ errors: [] });
      this.props.history.push('/dashboard');
    }).catch(res => {
      const errors = res.graphQLErrors.map(error => error.message);
      this.setState({ errors });
    })
  }

  render() {
    return (
      <div>
        <h3>Signup</h3>

        <AuthForm onSubmit={this.onSubmit} errors={this.state.errors} />
      </div>
    );
  }
}

export default graphql(mutation)(SignupForm);
