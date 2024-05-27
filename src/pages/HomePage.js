import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/HomePage.css';
import jumanjiPoster from '../poster/jumanji.jpeg'; 
import witcherPoster from '../poster/the-witcher.jpeg'; 

function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <main>
        <div className="featured-items">
          <Link to="/results/movies" className="featured-item">
            <img src={jumanjiPoster} alt="Jumanji" />
            <p>Film</p>
          </Link>
          <Link to="/results/series" className="featured-item">
            <img src={witcherPoster} alt="The Witcher" />
            <p>Dizi</p>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
