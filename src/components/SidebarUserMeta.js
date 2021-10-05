import React from 'react'

const SidebarUserMeta = ({FullName, ProfileURL, Avatar}) => {
    return (
        <div className="UserMeta">
        <a href={ProfileURL}>
          <img src={Avatar} alt={FullName}/>
          {FullName }
          </a>
        </div>
    )
}

export default SidebarUserMeta
