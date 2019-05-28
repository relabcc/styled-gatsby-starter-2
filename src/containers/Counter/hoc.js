import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import injectReducer from 'utils/injectReducer';
import reducer, { increment, decrement } from './reducer';

const mapStateToProps = (state) => ({
  count: state.getIn(['counter', 'count']),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  increment,
  decrement,
}, dispatch);

export const withReducer = injectReducer({ key: 'counter', reducer });

export const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withReducer, withConnect);
