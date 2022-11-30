import PropTypes from 'prop-types';
import connect from '../../connector';

// eslint-disable-next-line require-jsdoc
const FavoritesCTA = ({ children, showCartButton }) => {
  if (showCartButton) {
    return children;
  }

  return null;
};

FavoritesCTA.propTypes = {
  children: PropTypes.shape(),
  showCartButton: PropTypes.bool,
};

FavoritesCTA.defaultProps = {
  children: null,
  showCartButton: true,
};

export default connect(FavoritesCTA);
