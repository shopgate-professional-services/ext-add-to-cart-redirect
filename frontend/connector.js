import { connect } from 'react-redux';
import { getRedirect, getShowCartButton } from './selectors';

/**
 * Maps the contents of the state to the component props.
 * @param {Object} state The current application state.
 * @param {Object} props The component props.
 * @return {Object} The extended component props.
 */
const mapStateToProps = (state, props) => ({
  redirect: getRedirect(state, props),
  showCartButton: getShowCartButton(state, props),
});

export default connect(mapStateToProps);
