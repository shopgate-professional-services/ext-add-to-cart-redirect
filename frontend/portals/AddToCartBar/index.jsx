import React from 'react';
import PropTypes from 'prop-types';
import connect from '../../connector';
import PDPReplaceAddToCartButton from '../../components/PDPReplaceAddToCartButton';

// eslint-disable-next-line require-jsdoc
const AddToCartBar = ({ children, redirect }) => {
  if (!redirect) {
    return children;
  }

  return (
    <div>
      {
        redirect ?
          <PDPReplaceAddToCartButton redirect={redirect} />
          :
          children
      }
    </div>
  );
};

AddToCartBar.propTypes = {
  children: PropTypes.shape(),
  redirect: PropTypes.shape(),
};

AddToCartBar.defaultProps = {
  children: null,
  redirect: null,
};

export default connect(AddToCartBar);
