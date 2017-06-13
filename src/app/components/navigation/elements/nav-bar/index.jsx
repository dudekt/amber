// @flow

import React from 'react'
import classnames from 'classnames'
import style from './index.style.scss'

type Props = {
    fixWidth?: bool,
}

export default ({ children, fixWidth,...otherProps }: Props) => {

    return (
        <div className={style['bar']} {...otherProps}>
            <ul
                className={classnames(
                    style['nav'],
                    {'fix-width': fixWidth === true }
                )}
            >
                {children}
            </ul>
        </div>
    )
}
