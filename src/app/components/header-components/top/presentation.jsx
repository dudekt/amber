// @flow

import React from 'react';
import style from './top.style.scss'

export default class TopPresentation extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={style['body']}>
                Flexboxes
            </div>
        )
    }
}
