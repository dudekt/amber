// @flow

import React from 'react'
import Button from 'elements/button'
import style from './containers.style.scss'

export default class Container1 extends React.Component {
    state: {
        status: 'normal' | 'send',
    };

    constructor() {
        super();
        this.state = {
            status: 'normal',
        }
    }

    render() {
        return (
            <div className={style['container']}>
                <Button
                    className={style['custom']}
                    text='Save'
                    onClick={() => this.setState({ status: 'send' })}
                    status={this.state.status === 'normal'
                        ? 'active'
                        : (this.state.status === 'send'
                            ? 'waiting'
                            : 'inactive'
                        )
                    }
                />
                <Button
                    className={style['custom']}
                    text='Cancel'
                    onClick={() => this.setState({ status: 'normal' })}
                    status={this.state.status === 'normal'
                        ? 'active'
                        : 'inactive'
                    }
                />
            </div>
        )
    }
}
