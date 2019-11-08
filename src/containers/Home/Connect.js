import { connect } from "react-redux";

import sagaCall, { increment, decrement, incrementAsync, callPingAPI } from "containers/Home/Action";

const mapStateToProps = ({ firstName, lastName }) => ({
    firstName,
    lastName
})

const mapDispatchToProps = dispatch => ({
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onIncrementAsync: () => dispatch(incrementAsync()),
    onCallPingAPI: () => dispatch(sagaCall.onCallPingAPI())
})

export default connect(mapStateToProps, mapDispatchToProps) 