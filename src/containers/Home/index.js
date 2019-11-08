import React from "react";
import { compose, lifecycle } from "recompose";

import connect from "containers/Home/Connect"
import Counter from "components/Counter"

const batman = {
    "hello": "world"
}



const Home = ({ children, onIncrement, onDecrement, onIncrementAsync, onCallPingAPI }) => (
    <div className={`d-md-flex flex-column`}>
        This is Home
        <Counter
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onIncrementAsync={onIncrementAsync}
            onCallPingAPI={onCallPingAPI}
        />
    </div>
)

export default compose(
    lifecycle({
        componentWillMount() {
            console.log('component has mounted')
        },
    }),
    connect
    //   withShell
)(Home);
