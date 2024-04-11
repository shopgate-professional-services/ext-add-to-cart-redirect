import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './style';
import Popup from '../Popup';

/**
 * TabletReplaceAddToCartButton component.
 * @param {Object} redirect the config for the popup
 * @return {JSX}
 */
const TabletReplaceAddToCartButton = ({ redirect }) => {
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

TabletReplaceAddToCartButton.propTypes = {
  redirect: PropTypes.shape(),
};

TabletReplaceAddToCartButton.defaultProps = {
  redirect: null,
};

export default TabletReplaceAddToCartButton;
