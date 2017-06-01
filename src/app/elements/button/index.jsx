// @flow

import React from 'react'
import classnames from 'classnames'
import style from './index.style.scss'

type Props = {
    className?: string,
    text: string,
    type: string,
    status: 'action' | 'normal' | 'busy' | 'disable' ,
}

export default ({ text, status = 'normal', type, className, onClick, ...otherProps }: Props) => {

    return (
        <div className={style['body']}>
            <button
                {...otherProps}
                onClick={(e) => {
                    if (status === 'action') {
                        onClick(e)
                    }
                }}
                className={classnames(
                    style['button'],
                    style[type],
                    { [style['busy']]: status === 'busy' },
                    { [style['disable']]: status === 'disable' },
                    className
            )}>
                {text}
            </button>
        </div>
    )
}
