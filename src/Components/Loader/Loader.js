import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

import './loader.css';
const Loader = () => {
  return (
    <div className="loader">
      <BeatLoader color={'#89c74a'} margin={3} size={30} />
    </div>
  );
};

export default Loader;
