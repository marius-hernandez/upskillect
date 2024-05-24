import React from 'react'
import BtnMoreInfo from './BtnMoreInfo'

interface User{
    id: number;
    name: string;
}

const TrainingCard = async() => {
    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ) 
    const users: User[] = await data.json()

  return (
    <>
      <div>Training Card</div>
      <BtnMoreInfo></BtnMoreInfo>

      <h1>Users</h1>
      <ul>
        {users.map(user=> 
            <li key={user.id}>{user.name}</li>
        )}
      </ul>
    </>
  )
}

export default TrainingCard