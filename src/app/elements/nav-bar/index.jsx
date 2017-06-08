// @flow

import React from 'react'
import classnames from 'classnames'
import style from './index.style.scss'

type Props = {

}

export default ({ children, ...props }: Props) => {

    return (
        <div className={style['body']} {...props}>
            <div className={style['bar']}>
                {children}
            </div>
        </div>
    )
}
