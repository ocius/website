import React from 'react';
import PropTypes from 'prop-types';
import SocialIconButton from './SocialIconButton';

const styles = {
  container: {
    marginTop: '22px'
  },

  button: {
    marginLeft: '16px'
  }
};

const SocialShare = ({ networks, headingText, onClick }) => (
  <div className="SocialShare" role="complementary">
    {headingText && <h5 className="ShareHeading">{headingText}</h5>}

    {Object.keys(networks).map((network, index) => (
      <SocialIconButton
        className={networks[network].name}
        network={networks[network].name}
        href={networks[network].href}
        aria-label={networks[network].label}
        onClick={onClick}
        style={index !== 0 ? styles.button : {}}
      />
    ))}
  </div>
);

SocialShare.propTypes = {
  networks: PropTypes.objectOf(PropTypes.object).isRequired,
  headingText: PropTypes.string,
  onClick: PropTypes.func
};

SocialShare.defaultProps = {
  headingText: 'Share this post:',
  onClick: null
};

export default SocialShare;
