// @flow

import React from 'react'
import Button from 'elements/button'
import style from './containers.style.scss'

let setState = () => {
    console.log('klik')
}

export default class Container1 extends React.Component {
    constructor() {
        super();
        state = {
            buttonState: 'active'
        }
    }

    

    render() {
        return (
            <div className={style['container']}>
                <Button
                    state={this.state.buttonState}
                    className={style['custom']}
                    text='buuuttttooon'
                    onClick={this.setState()}
                />
            </div>
        )
    }
}
