import React from 'react';
import PropTypes from 'prop-types';
import { withCurrentProduct } from '@shopgate/engage/core';
import connect from '../../connector';
import AndroidReplaceAddToCartButton from '../../components/AndroidReplaceAddToCartButton';

/**
 * PORTAL AndroidAddToCartButton
 * @returns {JSX}
 */
const AndroidAddToCartButton = ({ children, redirect }) => {
  if (!redirect) {
    return children;
  }

  return (
    <div>
      {redirect ? (
        <AndroidReplaceAddToCartButton redirect={redirect} />
      ) : children}
    </div>
  );
};

AndroidAddToCartButton.propTypes = {
  children: PropTypes.node.isRequired,
  redirect: PropTypes.shape(),
};

AndroidAddToCartButton.defaultProps = {
  redirect: null,
};

export default withCurrentProduct(connect(AndroidAddToCartButton));
