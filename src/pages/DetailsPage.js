import React from 'react';
import { useParams } from 'react-router-dom';
import movies from '../data/movies';
import series from '../data/series';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/DetailsPage.css';

function DetailsPage() {
  const { type, title } = useParams();
  const allData = [...movies, ...series];
  const item = allData.find(item => item.title === title && item.type === type);

  if (!item) {
    return (
      <div className="details-page">
        <Header />
        <main>
          <h2>Item not found</h2>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="details-page">
      <Header />
      <main>
        <h2>{item.title}</h2>
        <img src={item.poster} alt={item.title} />
        <p>Rating: {item.rating}</p>
        <p>Release Year: {item.releaseYear}</p>
      </main>
      <Footer />
    </div>
  );
}

export default DetailsPage;
