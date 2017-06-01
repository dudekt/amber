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
                    text='Hakuna matata'
                    type='action'
                    onClick={() => this.setState({ status: 'send' })}
                    status={this.state.status === 'normal'
                        ? 'action'
                        : (this.state.status === 'send'
                            ? 'busy'
                            : 'disable'
                        )
                    }
                />
                <Button
                    className={style['custom']}
                    text='Cancel'
                    type='normal'
                    onClick={() => this.setState({ status: 'normal' })}
                    status={this.state.status === 'normal'
                        ? 'normal'
                        : 'disable'
                    }
                />
            </div>
        )
    }
}
