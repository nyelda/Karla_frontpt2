import React from 'react';

const Exercise = ({ name, details, onClick }) => {
    return (
      <div className="exercise" onClick={onClick}>
        <h3>{name}</h3>
        <p>{details}</p>
      </div>
    );
  };

export default Exercise;