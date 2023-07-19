import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './style';
import Popup from '../Popup';

/**
 * IosReplaceAddToCartBar component.
 * @param {Object} redirect the config for the popup
 * @return {JSX}
 */
const IosReplaceAddToCartBar = ({ redirect }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className={styles.buttonWrapper}>
      <button type="button" onClick={() => setShowPopup(!showPopup)} className={styles.button}>
        {redirect.buttonText}
      </button>
      <Popup
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        redirect={redirect}
      />
    </div>
  );
};

IosReplaceAddToCartBar.propTypes = {
  redirect: PropTypes.shape(),
};

IosReplaceAddToCartBar.defaultProps = {
  redirect: null,
};

export default IosReplaceAddToCartBar;
