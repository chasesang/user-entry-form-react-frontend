import React from "react";
import UserSummary from "./UserSummary";
import {getUsers} from "../utilities/requests";

class UsersIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      search: ''
    };
  }
  updateSearch(event) {
    this.setState({search: event.target.value})
  }

  componentDidMount() {
    getUsers().then(users => {
      this.setState({users: users})
    });
  }

  renderUsers() {
    let filteredUsers = this.state.users.filter((user) => {
      const haystack = `${user.first_name} ${user.last_name}`;

      return haystack.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    })

    return filteredUsers.map(user => {
      return (<UserSummary onClick={this.props.onUserClick} key={user.id} {...user}/>);
    });
  }

  render() {
    return (
      <div className="UsersIndex">
        <h2>Users</h2>
        <input type="text" placeholder="Search" value={this.state.search} onChange={this.updateSearch.bind(this)}/>
        <table className="table table-striped">
          <thead className="thead-inverse">
            <tr>
              <th className="text-center">ID</th>
              <th className="text-center">First Name</th>
              <th className="text-center">Last Name</th>
              <th className="text-center">DOB</th>
            </tr>
          </thead>
          {this.renderUsers()}
        </table>
      </div>
    );
  }
}

export default UsersIndex;
