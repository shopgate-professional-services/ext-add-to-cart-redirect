import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { FloatingActionButton } from '@shopgate/pwa-ui-material';
import { themeConfig } from '@shopgate/pwa-common/helpers/config';
import Popup from '../Popup';
import styles from './style';
import Icon from './components/Icon';

const { colors } = themeConfig;

/**
 * AndroidReplaceAddToCartButton
 * @param {Object} redirect .
 * @returns {JSX}
 */
const AndroidReplaceAddToCartButton = ({ redirect }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <Fragment>
      <FloatingActionButton
        background={colors.cta}
        className={`${styles.button} theme__product__header__cta-buttons__cart-button`}
        onClick={() => setShowPopup(!showPopup)}
      >
        <Icon success={showPopup} onSuccess={() => null} />
      </FloatingActionButton>
      <Popup
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        redirect={redirect}
      />
    </Fragment>
  );
};

AndroidReplaceAddToCartButton.propTypes = {
  redirect: PropTypes.shape(),
};

AndroidReplaceAddToCartButton.defaultProps = {
  redirect: null,
};

export default AndroidReplaceAddToCartButton;
