import { connect } from "react-redux";

import { increment, decrement, incrementAsync } from "containers/Home/Action";

const mapStateToProps = ({ firstName, lastName }) => ({
    firstName,
    lastName
})

const mapDispatchToProps = dispatch => ({
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onIncrementAsync: () => dispatch(incrementAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)