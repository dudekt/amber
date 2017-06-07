// @flow

import React from 'react'
import classnames from 'classnames'
import style from './index.style.scss'

type Props = {
    className?: string,
    onClick: (e: MouseEvent) => void,
    size: 'default' | 'small',
    status: 'action' | 'normal' | 'busy' | 'disable' ,
    text: string,
    disabled: boolean,
    color: 'primary' | 'secondary' | 'default',
}

export default ({ text, status = 'normal', color = 'default', size = 'default', className, onClick, ...otherProps }: Props) => {

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
                    style[color],
                    style[size],
                    { [style['busy']]: status === 'busy' },
                    { [style['disable']]: status === 'disable' },
                    className
                )}
            >
                {text}
            </button>
        </div>
    )
}
