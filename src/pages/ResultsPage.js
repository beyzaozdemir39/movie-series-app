import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/ResultsPage.css';
import movies from '../data/movies';
import series from '../data/series';

function ResultsPage() {
  const { type } = useParams();
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('newest');

  useEffect(() => {
    const data = type === 'movies' ? movies : series;
    setItems(data);
    setFilteredItems(data.slice(0, 18)); 
  }, [type]);

  useEffect(() => {
    handleSearch();
  }, [items, searchTerm, sortType]);

  const handleSearch = () => {
    let updatedItems = [...items];

    if (searchTerm.length >= 3) {
      updatedItems = updatedItems.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortType === 'rating') {
      updatedItems.sort((a, b) => b.rating - a.rating);
    } else if (sortType === 'newest') {
      updatedItems.sort((a, b) => b.releaseYear - a.releaseYear);
    } else if (sortType === 'oldest') {
      updatedItems.sort((a, b) => a.releaseYear - b.releaseYear);
    } else if (sortType === 'random') {
      updatedItems.sort(() => Math.random() - 0.5);
    }

    setFilteredItems(updatedItems.slice(0, 18)); 
  };

  return (
    <div className="results-page">
      <Header />
      <main>
        <h2>{type === 'movies' ? 'Filmler' : 'Diziler'}</h2>
        <div className="search-sort">
          <input
            type="text"
            placeholder="Film / Dizi / Oyuncu Ara"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="">Sırala</option>
            <option value="newest">Yeniye Göre Sırala</option>
            <option value="oldest">Eskiye Göre Sırala</option>
            <option value="rating">Puana Göre Sırala</option>
            <option value="random">Rastgele Sırala</option>
          </select>
        </div>
        <div className="results-list">
          {filteredItems.map((item, index) => (
            <Link to={`/details/${item.type}/${item.title}`} key={index} className="result-item">
              <img src={item.poster} alt={item.title} />
              <div className="item-info">
                <h3>{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ResultsPage;
