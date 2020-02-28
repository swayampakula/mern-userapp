import React, { Component } from "react";
// import SampleHigher from "../containers/hoc/SampleHigher";
import UserDetails from "./UserDetails";
const data = require("../data/data.json");

class UserList extends Component {
  state = {
    name: "",
    person: []
  };

  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.person.length === 0 &&
            data.map((index, key) => {
              console.log(key);
              return (
                <p
                  onClick={() =>
                    this.setState(
                      {
                        person: data.filter(
                          person => person.name === index.name
                        )
                      },
                      () => {
                        console.log(
                          data.filter(person => person.name === index.name)
                        );
                      }
                    )
                  }
                  key={key}
                >
                  {index.name}
                </p>
              );
            })}
        </div>
        <UserDetails name={this.state.person.length > 0 && this.state.person} />
      </React.Fragment>
    );
  }
}

export default UserList;
