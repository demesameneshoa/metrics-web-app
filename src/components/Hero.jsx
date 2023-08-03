import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

const Hero = ({ title, searchTerm, setSearchTerm }) => {
  if (title === '') {
    return (
      <div className="hero">
        <h2>
          Air Quality Metrics
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </h2>
      </div>
    );
  }
  return (
    <div className="hero">
      <h2>
        Air Quality Metrics
        <br />
        <br />
        {title}
      </h2>
    </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};

export default Hero;
