import React from "react";
import { compose, lifecycle } from "recompose";
// import { library } from '@fortawesome/fontawesome-svg-core';
// import 'react-dates/initialize';

// import withShell from "HOC/WithShell";
// import 'react-dates/lib/css/_datepicker.css';
// import 'react-credit-cards/es/styles-compiled.css';
// import 'react-circular-progressbar/dist/styles.css';
// import 'rc-slider/assets/index.css';
import "Shell/shell.css";
// import "containers/Shell/theme.css";

const Shell = ({ children }) => (
    <div className={`d-md-flex flex-column`}>
        <div id="shell" className={`d-md-flex flex-column`}>
            I am Batman
            {children}

        </div>
    </div>
)

export default compose(
    lifecycle({
        componentWillMount() {

        },
    }),
    //   withShell
)(Shell);
