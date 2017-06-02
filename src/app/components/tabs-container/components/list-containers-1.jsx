// @flow

import React from 'react'
import Button from 'elements/button'

import Navigation from 'components/navigation/'
import style from './containers.style.scss'

export default class Container1 extends React.Component {
    state: {
        status: 'normal' | 'action',
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

                <Navigation />

                <Button
                    className={style['custom']}
                    text='Hakuna matata'
                    type='primary'
                    onClick={() => this.setState({ status: 'action' })}
                    status={this.state.status === 'normal'
                        ? 'action'
                        : (this.state.status === 'action'
                            ? 'busy'
                            : 'disable'
                        )
                    }
                />
                <Button
                    className={style['custom']}
                    text='Edit'
                    type='secondary'
                    onClick={() => this.setState({ status: 'action' })}
                    status={this.state.status === 'normal'
                        ? 'normal'
                        : 'disable'
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
                <br /><br />
                <Button
                    className={style['custom']}
                    text='Hakuna matata'
                    type='primary'
                    onClick={() => this.setState({ status: 'action' })}
                    size={'small'}
                    status={this.state.status === 'normal'
                        ? 'action'
                        : (this.state.status === 'action'
                                ? 'busy'
                                : 'disable'
                        )
                    }
                />
                <Button
                    className={style['custom']}
                    text='Edit'
                    type='secondary'
                    onClick={() => this.setState({ status: 'action' })}
                    size={'small'}
                    status={this.state.status === 'normal'
                        ? 'normal'
                        : 'disable'
                    }
                />
                <Button
                    className={style['custom']}
                    text='Cancel'
                    type='normal'
                    onClick={() => this.setState({ status: 'normal' })}
                    size={'small'}
                    status={this.state.status === 'normal'
                        ? 'normal'
                        : 'disable'
                    }
                />
            </div>
        )
    }
}
