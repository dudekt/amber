// @flow

import React from 'react'
import classnames from 'classnames'
import style from './index.style.scss'

type Props = {
    className?: string,
    text: string,
    state: 'active' | 'waiting' | 'inactive' ,
}

const Button = (props: Props) => {
    return (
        <div className={style['body']}>
            <div className={classnames(
                style['button'],
                { [style['active']]: props.state === 'active' },
                { [style['waiting']]: props.state === 'waiting' },
                { [style['inactive']]: props.state === 'inactive' },
                props.className
            )}>
                {props.text}
            </div>
        </div>
    )
};

export default Button
