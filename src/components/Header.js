import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">BulutMD</div>
        <div className="auth-buttons">
          <button className="login-btn">Giriş</button>
          <button className="signup-btn">Deneme Başlat</button>
        </div>
      </div>
      <div className="header-bottom">
        <div className="subtitle">Popüler Başlıklar</div>
      </div>
    </header>
  );
}

export default Header;
