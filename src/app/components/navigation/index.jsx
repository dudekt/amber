// @flow

import React from 'react'
import NavDropdown from 'components/navigation/elements/nav-dropdown/'
import classnames from 'classnames'
import style from './index.style.scss'

type Props = {

}

export default ({ text, status = 'normal', type = 'default', size = 'default', className, onClick, ...otherProps }: Props) => {

    return (
        <div className={style['body']}>
            <NavDropdown />
        </div>
    )
}
