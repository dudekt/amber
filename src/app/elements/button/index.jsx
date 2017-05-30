// @flow

import React from 'react'
import classnames from 'classnames'
import style from './index.style.scss'

type Props = {
    className?: string,
    text: string,
    status: 'active' | 'waiting' | 'inactive' ,
}

export default ({ text, status = 'active', className, ...otherProps }: Props) => {

    return (
        <div className={style['body']}>
            <button
                {...otherProps}
                className={classnames(
                    style['button'],
                    { [style['active']]: status === 'active' },
                    { [style['waiting']]: status === 'waiting' },
                    { [style['inactive']]: status === 'inactive' },
                    className
            )}>
                {text}
            </button>
        </div>
    )
}
