import "./index.css"
import React, { useEffect } from 'react'

export default function UserCard({ avatar_url, login, url }) {
  return (
    <div className="card" >
      <img src={avatar_url} alt="Avatar" style={{ width: '100%' }} />
      <div className="container">
        <h4><b>{login}</b></h4>
        <a href={url}>Voir le profil</a>
      </div>
    </div>
  )
}
