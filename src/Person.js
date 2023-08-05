import React from 'react';
import PropTypes from 'prop-types';

const Person = (props) => {
  const { data, handleName } = props;
  const { fullName, bio, imgSrc, profession } = data;

  return (
    <div className="Person">
      <img src={imgSrc} alt={fullName} />
      <div className="Person-details">
        <strong>Name:</strong> {fullName}
        <br />
        <strong>Bio:</strong> {bio}
        <br />
        <strong>Profession:</strong> {profession}
        <br />
        <button onClick={() => handleName(fullName)}>Click here</button>
      </div>
    </div>
  );
};

Person.propTypes = {
  data: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
  }).isRequired,
  handleName: PropTypes.func.isRequired,
};

export default Person;
