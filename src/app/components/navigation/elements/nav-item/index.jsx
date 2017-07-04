// @flow

import React from 'react'
import classnames from 'classnames'
import style from './index.style.scss'
import Arrow from './arrow.react'

type Props = {
    className?: string,
    text: string,
    canDropDown?: boolean,
}

export default ({ text, className, canDropDown, ...otherProps }: Props) => {

    return (
        <li
            {...otherProps}
            className={classnames(
                className,
            )}
        >
            <a
                className={classnames(
                    style['item'],
                    { [style['dropdown']]: canDropDown },
                )}
                href="#"
            >
                {canDropDown
                    ? <Arrow className={style['arrow']} />
                    : null
                }
                {text}
            </a>
        </li>
    )
}
