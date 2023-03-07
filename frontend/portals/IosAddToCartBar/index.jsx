import React from 'react';
import PropTypes from 'prop-types';
import connect from '../../connector';
import IosReplaceAddToCartBar from '../../components/IosReplaceAddToCartBar';

/**
 * PORTAL IosAddToCartBar
 * @returns {JSX}
 */
const IosAddToCartBar = ({ children, redirect }) => {
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
  redirect: PropTypes.shape(),
};

IosAddToCartBar.defaultProps = {
  redirect: null,
};

export default connect(IosAddToCartBar);
