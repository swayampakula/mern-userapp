import React from "react";

const UserDetails = props => {
  return (
    <div>
      {props.name.length > 0 &&
        props.name.map((index, key) => {
          return <p key={key}>{index.name}</p>;
        })}
    </div>
  );
};

export default UserDetails;
