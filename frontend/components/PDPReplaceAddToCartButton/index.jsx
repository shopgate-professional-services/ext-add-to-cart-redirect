import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from '@shopgate/engage/components';
import I18n from '@shopgate/pwa-common/components/I18n';
import styles from './style';

/**
 * PDPReplaceAddToCartButton component.
 */
class PDPReplaceAddToCartButton extends Component {
  static propTypes = {
    redirect: PropTypes.shape(),
  };

  static defaultProps = {
    redirect: null,
  };

  /**
   * @inheritDoc
   */
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
    };
  }

  /**
   * Toggles Popup.
   */
  togglePopup() {
    this.setState(({ showPopup }) => ({ showPopup: !showPopup }));
  }

  /**
   * Renders.
   * @returns {JSX}
   */
  render() {
    const { redirect } = this.props;

    return (
      <div className={styles.buttonWrapper}>
        <button type="button" onClick={this.togglePopup.bind(this)} className={styles.button}>
          {redirect.buttonText}
        </button>
        {this.state.showPopup ?
          <div className={styles.popupContainer}>
            <div className={styles.popupContent}>
              <h3>{redirect.popupHeadline}</h3>
              <p>{redirect.popupText}</p>
              <div className={styles.popupFooter}>
                <button type="button" onClick={this.togglePopup.bind(this)} className={styles.popupBack}>
                  <I18n.Text string="a2cr.popupButtonText.back" />
                </button>
                <Link href={redirect.url} state={{ target: '_blank' }} className={styles.popupButton}>
                  <I18n.Text string="a2cr.popupButtonText.continue" />
                </Link>
              </div>
            </div>
          </div>
          : null
        }
      </div>
    );
  }
}
export default PDPReplaceAddToCartButton;
