import React from 'react';

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
      <tr>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>
          <button className="button nuted-button">Edit</button>
          <button onClick={() => props.deleteUser(user.id)} className="button nuted-button">Delete</button>
        </td>
      </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable;