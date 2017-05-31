// @flow

import React from 'react'
import Button from 'elements/button'
import style from './containers.style.scss'

export default class Container1 extends React.Component {
    state: {
        status: ?string,
    }

    constructor() {
        super();
        this.state = {
            status: null,
        }
    }

    render() {
        return (
            <div className={style['container']}>
                <Button
                    className={style['custom']}
                    text='Save'
                    onClick={() => this.setState({ status: 'waiting' })}
                    status={this.state.status}
                />
                <Button
                    className={style['custom']}
                    text='Cancel'
                    // onClick={() => this.setState({ status: 'inactive' })}
                />
            </div>
        )
    }
}
