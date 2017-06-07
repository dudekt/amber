// @flow

import React from 'react'
import classnames from 'classnames'
import style from './index.style.scss'

type Props = {

}

export default ({}: Props) => {

    return (
        <div className={style['body']}>
            <div className={style['floppy']}>
                <div className={style['shutter-container']}>
                    <div className={style['shutter']} />
                </div>
                <div className={style['label-container']}>
                    <div className={style['label']} />
                </div>
            </div>
        </div>
    )
}
