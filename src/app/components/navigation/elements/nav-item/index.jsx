// @flow

import React from 'react'
import classnames from 'classnames'
import style from './index.style.scss'

type Props = {
    className?: string,
    text: string,
}

export default ({ text, className, ...otherProps }: Props) => {

    return (
        <li
            {...otherProps}
            className={classnames(
                className,
            )}
        >
            <a
                className={style['item']}
                href="#"
            >
                {text}
            </a>
        </li>
    )
}
