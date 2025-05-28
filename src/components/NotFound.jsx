import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="notfound">
      <h1>404</h1>
      <h2>Oops! Sayfa bulunamadı.</h2>
      <p>Aradığınız sayfa mevcut değil ya da taşınmış olabilir.</p>
      <Link to="/" className="home-link">Anasayfaya Dön</Link>
    </div>
  );
};

export default NotFound;
