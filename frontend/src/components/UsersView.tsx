import React, { useState } from 'react'
import UsersTable from './UsersTable'

const UsersView = () => {
  const [users, setUsers] = useState<any[]>()
  const [user, setUser] = useState<string>()

  const fetchUserHandler = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users ")
      if (!response.ok) {
        throw new Error("Bad request")
      }

      const jsonData = await response.json()
      setUsers(jsonData)
    } catch (error) {
      console.log("Error: ", error)
    }
  }

  const removeUser = (userId: string) => {
    const user = users?.find((user) => user.id = userId)
    setUser(user.name);

    const filterUsers = users?.filter((user) => user.id !== userId);
    setUsers(filterUsers);
  }

  setTimeout(() => {
    setUser("")
  }, 2000);

  return (
    <div>
      {user && (
        <div>
          <h3>Notification</h3>
          <p>User with name {user} was deleted</p>
        </div>
      )}

      <button onClick={fetchUserHandler}>Fetch users</button>
      {users && <UsersTable users={users} removeUser={removeUser} />}
    </div>
  )
}

export default UsersView