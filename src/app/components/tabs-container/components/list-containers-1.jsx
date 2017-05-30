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
                    text='buuuttttooon'
                    onClick={() => this.setState({ status: 'active' })}
                />
                <Button
                    className={style['custom']}
                    text='buuuttttooon'
                    onClick={() => this.setState({ status: 'inactive' })}
                />
                <Button
                    className={style['custom']}
                    status={this.state.status}
                    text='buuuttttooon'
                    onClick={() => this.setState({ status: 'waiting' })}
                />
            </div>
        )
    }
}
