import React, { Suspense, lazy } from "react";
import { Router } from "@reach/router"
import { compose, lifecycle } from "recompose";

import Shell from "Shell";

const Home = lazy(() => import('containers/Home'));

const Routing = () => (
    <Shell>
        <Suspense fallback={<div>Loading...</div>}>
            <Router>    
                <Home path="/" />
            </Router>
        </Suspense>
    </Shell>
)
export default compose(
    lifecycle({
        componentWillMount() {
            // this.props.clearDestination();
        },
    })
)(Routing);
