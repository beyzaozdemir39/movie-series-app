import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>
        <Link to="/">Anasayfa</Link> | 
        <Link to="/kullanici-sozlesmesi">Kullanıcı Sözleşmesi</Link> | 
        <Link to="/gizlilik-sozlesmesi">Gizlilik Sözleşmesi</Link>
      </p>
      <div className="social-icons">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-twitter"></i>
      </div>
    </footer>
  );
}

export default Footer;
