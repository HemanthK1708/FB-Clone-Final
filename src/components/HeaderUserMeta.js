import React from 'react'

const HeaderUserMeta = ({FullName, ProfileURL, Avatar}) => {
    return (
    <div className="UserMeta">
    <a href={ProfileURL}>
      <img src={Avatar} alt={FullName}/>
      {FullName}
      </a>
      <span className="nav-links">
      <a href="/">Home</a>
      <a href="/">Create</a>
      </span>
    </div>
    );
};

export default HeaderUserMeta
