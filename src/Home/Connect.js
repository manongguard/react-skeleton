import { connect } from "react-redux"

import sagaCall from "Home/Action"

const mapStateToProps = ({ firstName, lastName }) => ({
    firstName,
    lastName
})

const mapDispatchToProps = dispatch => ({
    onClickButton: (payload) => dispatch(sagaCall.onClickButton(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)