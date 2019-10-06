import React, { Suspense, lazy } from "react";
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { compose, lifecycle } from "recompose";

import Shell from "Shell";
// import NotFound from "components/PageNotFound";

import { history } from "Store";

const Home = lazy(() => import('Home'));

const Routing = () => (

    <ConnectedRouter history={history}>
        <Shell history={history}>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={Home} />

                    {/* <Route component={NotFound} /> */}
                </Switch>
            </Suspense>

        </Shell>
    </ConnectedRouter>
)
export default compose(
    lifecycle({
        componentWillMount() {
            // this.props.clearDestination();
        },
    })
)(Routing);
