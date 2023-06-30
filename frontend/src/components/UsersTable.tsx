import React from 'react'

interface Users {
  users: any[];
  removeUser: (userId: string) => void;
}

const UsersTable = ({ users, removeUser }: Users) => {
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Company Name</th>
          <th>Action</th>
        </tr>

        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.company.name}</td>
            <td><button onClick={() => removeUser(user.id)}>x</button></td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default UsersTable