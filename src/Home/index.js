import React from "react";
import { compose, lifecycle } from "recompose";
import connect from "Home/Connect"

const Home = ({ children }) => (
    <div className={`d-md-flex flex-column`}>
        This is Home
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
