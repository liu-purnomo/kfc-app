import { Trash, Gear } from "react-bootstrap-icons";

function RowTableUser({ user }) {
  return (
    <>
      <tr>
        <td> {user.username} </td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.address}</td>
        <td>{user.role}</td>
      </tr>
    </>
  );
}

export default RowTableUser;
