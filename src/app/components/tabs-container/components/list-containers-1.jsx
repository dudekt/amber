// @flow

import React from 'react';
import Button from 'elements/button'
import style from './containers.style.scss'

export default class Container1 extends React.Component {

    render() {
        return (
            <div className={style['container']}>

                <Button
                    title='buuuttttooon'
                    className={style['dupa']}
                />
            </div>
        )
    }
}
