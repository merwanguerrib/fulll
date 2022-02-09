import React, { useState, useEffect } from 'react'
import UserCard from '../userCardComponent/UserCard'
import "./index.css"

export default function GithubSearch() {
  const [inputValue, setInputValue] = useState(null)
  const url = `https://api.github.com/search/users?q=${inputValue}`
  const [users, setUsers] = useState({})
  const [usersLength, setUsersLength] = useState(0)


  const handleSearch = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => { setUsers(data) })
  }

  useEffect(() => {
    setUsersLength(Object.keys(users).length)
    console.log("users useEffect ==> ", users)
  }, [users])

  return (
    <>
      <input type="text" placeholder="Chercher un user Github" onChange={e => setInputValue(e.target.value)} />
      <input type="button" value="Recherche sur Github" onClick={handleSearch} />
      {
        <ul>
          <li>Nombre de résultats : {usersLength > 0 ? users.total_count : 0}</li>
        </ul>
      }
      {
        users.items?.length > 0 ?
          <div className='cards-list'>
            {
              users.items.map(({ id, avatar_url, login, html_url }) => {
                return (
                  <UserCard key={id} avatar_url={avatar_url} login={login} html_url={html_url} />
                )
              })
            }
          </div>
          : null
      }
    </>
  )
}
