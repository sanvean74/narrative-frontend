import React from 'react';
import PropTypes from 'prop-types';
import styles from './AboutDeveloperCard.css';

const AboutDeveloperCard = ({ developerName, developerImage, developerBio }) => {
  return (
    <div className={styles.AboutDeveloperCard}>
      <div>
        <h2>{developerName}</h2>
        <img src={developerImage} alt={developerName} />
      </div>

      <div>
        <p>{developerBio}</p>
      </div>
    </div>
  );
};

AboutDeveloperCard.propTypes = {
  developerName: PropTypes.string.isRequired,
  developerImage: PropTypes.string.isRequired,
  developerBio: PropTypes.string.isRequired
};

export default AboutDeveloperCard;