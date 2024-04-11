import React from 'react';
import PropTypes from 'prop-types';
import connect from '../../connector';
import TabletReplaceAddToCartButton from '../../components/TabletReplaceAddToCartButton';

/**
 * PORTAL TabletAddToCartButton
 * @returns {JSX}
 */
const TabletAddToCartButton = ({ children, redirect, isTablet }) => {
  if (!isTablet) {
    return null;
  }

  if (!redirect) {
    return children;
  }

  return (
    <div>
      {redirect ? (
        <TabletReplaceAddToCartButton redirect={redirect} />
      ) : children}
    </div>
  );
};

TabletAddToCartButton.propTypes = {
  children: PropTypes.node.isRequired,
  isTablet: PropTypes.bool,
  redirect: PropTypes.shape(),
};

TabletAddToCartButton.defaultProps = {
  isTablet: false,
  redirect: null,
};

export default connect(TabletAddToCartButton);
