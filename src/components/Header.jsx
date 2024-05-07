import React from 'react'
import "./styles/Header.scss";

export const Header = () => {
  return (
    <div className="header_container">
        <div className="logo_header">
          <img src="/images/logo.png" alt="logo" />
          <p>Tech Assist Hub</p>
        </div>
    </div>
  )
}
