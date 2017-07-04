// @flow

import React from 'react'
import NavBar from 'components/navigation/elements/nav-bar/'
import NavItem from 'components/navigation/elements/nav-item/'
import NavDropdown from 'components/navigation/elements/nav-dropdown/'
import classnames from 'classnames'
import style from './index.style.scss'

type Props = {
}

export default ({  }: Props) => {

    return (
        <div className={style['body']}>
            <NavBar
                fixWidth={true}
            >
                <NavDropdown
                    title='menu'
                    canDropDown
                >
                    <NavItem className={'dropdown-item'} text={'Itemitem 1'} />
                    <NavItem className={'dropdown-item'} text={'Item 2'} />
                    <NavItem className={'dropdown-item'} text={'Item 3'} />
                    <NavItem className={'dropdown-item'} text={'Item 4'} />
                    <NavItem className={'dropdown-item'} text={'Item 5'} />
                </NavDropdown>
                <NavItem text={'Item 1'} />
                <NavItem text={'Item 2'} />
                <NavItem text={'Item 3'} />
                <NavItem text={'Item 4'} />
                <NavItem text={'Item 5'} />
            </NavBar>
        </div>
    )
}
