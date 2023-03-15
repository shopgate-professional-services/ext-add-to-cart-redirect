import React, { Fragment } from 'react';
import { I18n, Link } from '@shopgate/engage/components';
import PropTypes from 'prop-types';
import styles from './style';

/**
 * Popup
 * @returns {JSX}
 */
const Popup = ({ showPopup, setShowPopup, redirect }) => (
  <Fragment>
    {showPopup ? (
      <div className={styles.popupContainer}>
        <div className={styles.popupContent}>
          <h3>{redirect.popupHeadline}</h3>
          <p>{redirect.popupText}</p>
          {redirect.noRedirect ? (
            <div className={styles.popupFooter}>
              <button type="button" onClick={() => setShowPopup(!showPopup)} className={styles.popupClose}>
                <I18n.Text string="a2cr.popupButtonText.close" />
              </button>
            </div>
          ) : (
            <div className={styles.popupFooter}>
              <button type="button" onClick={() => setShowPopup(!showPopup)} className={styles.popupBack}>
                <I18n.Text string="a2cr.popupButtonText.back" />
              </button>
              <Link href={redirect.url} state={{ target: '_blank' }} className={styles.popupButton}>
                <I18n.Text string="a2cr.popupButtonText.continue" />
              </Link>
            </div>
          )
          }
        </div>
      </div>
    ) : null}
  </Fragment>
);

Popup.propTypes = {
  redirect: PropTypes.shape().isRequired,
  setShowPopup: PropTypes.func.isRequired,
  showPopup: PropTypes.bool.isRequired,
};

export default Popup;
