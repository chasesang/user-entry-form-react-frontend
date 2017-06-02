import React from "react";

function UserSummary(props) {
  const handleClick = event => {
    event.preventDefault();

    if (typeof props.onClick === "function") {
      props.onClick(props.id);
    }
  };
  
  return (
    <tbody>
      <tr>
        <td>{props.id}</td>
        <td>
          <a onClick={handleClick} href>{props.first_name}</a>
        </td>
        <td>
          <a onClick={handleClick} href>{props.last_name}</a>
        </td>
        <td>{props.DOB}</td>
      </tr>
    </tbody>
  );
}

export default UserSummary;
