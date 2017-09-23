'use strict';

var styles = require('./Home.scss');

import React from 'react';
import { render } from 'react-dom';

class Home extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="content__header">
                    <h1 className="content__title content__reveal content__reveal--left">
                        <div className="content__element">Stefan Piazza</div>
                        <div className="content__revealer content__revealer--primary"></div>
                    </h1><br></br>
                    <p className="content__subtitle content__reveal content__reveal--left content__reveal--delay-200">
                        <div className="content__element">Front End Developer</div>
                        <div className="content__revealer content__revealer--primary"></div>
                    </p>
                </div>
                <div className="content__footer">
                    <div className="content__image content__reveal content__reveal--right content__reveal--delay-600">
                        <div className="content__element"></div>
                        <div className="content__revealer content__revealer--secondary"></div>
                    </div>
                    <p className="content__bio content__reveal content__reveal--left content__reveal--delay-400">
                        <div className="content__element">Github, CodePen and LinkedIn</div>
                        <div className="content__revealer content__revealer--primary"></div>
                    </p>
                </div>
            </div>
        );
    }
}

export default Home
