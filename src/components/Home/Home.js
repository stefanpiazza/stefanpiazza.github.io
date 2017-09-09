'use strict';

var styles = require('./Home.scss');

import React from 'react';
import { render } from 'react-dom';

class Home extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="content__header">
                    <h1 className="content__title">
                        <div className="content__element">Stefan Piazza</div>
                    </h1>
                    <p className="content__subtitle">
                        <div className="content__element">Front End Developer</div>
                    </p>
                    <p className="content__bio">
                        <div className="content__element">Energetic and passionate front end developer with a BSc in Computer Science from the University of Leeds. Loves experimenting and hacking together new ideas. Always with a side project on the go and a passion for collaborating with people to make something cool.</div>
                    </p>
                </div>
                <div className="content__footer">
                    <div className="content__image">
                        <img className="content__element"></img>
                        <div className="content__revealer"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home
