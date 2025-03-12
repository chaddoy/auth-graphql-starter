import React from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/CurrentUser';

class Header extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>Header</h3>
      </div>
    );
  }
}

export default graphql(query)(Header);
