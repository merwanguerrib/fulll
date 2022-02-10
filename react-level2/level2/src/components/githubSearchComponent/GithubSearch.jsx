import React, { useState, useEffect } from 'react'
import UserCard from '../userCardComponent/UserCard'
import "./index.css"

export default function GithubSearch() {
  const [inputValue, setInputValue] = useState(null)
  const url = `https://api.github.com/search/users?q=${inputValue}`
  const [users, setUsers] = useState({})

  const handleSearch = () => {
    try {
      fetch(url)
        .then(response => response.json())
        .then(data => { setUsers(data) })

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    console.log("users useEffect ==> ", users)
  }, [users])

  return (
    <>
      <div className='search'>
        <input className='search-input ' type="text" placeholder="Chercher un user Github" onChange={e => setInputValue(e.target.value)} />
        <input className='search-button' type="button" value="Recherche sur Github" onClick={handleSearch} />
      </div>
      {
        users.items?.length >= 0 ? <h2>Nombre de résultats : {users.total_count} </h2> : null
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
