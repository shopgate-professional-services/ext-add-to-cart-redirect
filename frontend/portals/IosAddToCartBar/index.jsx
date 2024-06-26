import React from 'react';
import PropTypes from 'prop-types';
import connect from '../../connector';
import IosReplaceAddToCartBar from '../../components/IosReplaceAddToCartBar';

/**
 * PORTAL IosAddToCartBar
 * @returns {JSX}
 */
const IosAddToCartBar = ({ children, redirect, isTablet }) => {
  if (isTablet) {
    return null;
  }

  if (!redirect) {
    return children;
  }

  return (
    <div>
      {redirect ? (
        <IosReplaceAddToCartBar redirect={redirect} />
      ) : children}
    </div>
  );
};

IosAddToCartBar.propTypes = {
  children: PropTypes.node.isRequired,
  isTablet: PropTypes.bool,
  redirect: PropTypes.shape(),
};

IosAddToCartBar.defaultProps = {
  isTablet: false,
  redirect: null,
};

export default connect(IosAddToCartBar);
