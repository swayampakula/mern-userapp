import React, { Component } from "react";
// import SampleHigher from "../containers/hoc/SampleHigher";
import UserDetails from "./UserDetails";
// const data = require("../data/data.json");

class UserList extends Component {
  state = {
    name: "",
    person: [],
    data: []
  };

  /*   componentDidMount = () => {
    fetch("http://starlord.hackerearth.com/TopRamen")
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error.message);
      });
  }; */

  componentDidMount = () => {
    fetch("http://localhost:3001/data/data.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ data: data });
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.person.length === 0 &&
            this.state.data.map((index, key) => {
              return (
                <p
                  onClick={() =>
                    this.setState(
                      {
                        person: this.state.data.filter(
                          person => person.name === index.name
                        )
                      },
                      () => {
                        console.log(
                          this.state.data.filter(
                            person => person.name === index.name
                          )
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
