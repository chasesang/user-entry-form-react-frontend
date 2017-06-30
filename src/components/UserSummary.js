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
        <td>
          {Math.floor((Date.now()-Date.parse(props.DOB))/86400000)}
        </td>
      </tr>
    </tbody>
  );
}

export default UserSummary;
