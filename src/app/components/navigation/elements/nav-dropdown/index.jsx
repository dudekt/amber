// @flow

import React from 'react'
import classnames from 'classnames'
import style from './index.style.scss'
import DropdownMenu from 'react-dd-menu'
import NavItem from './../nav-item/'

type Props = {
    title: string,
}

export default class NavDropdown extends React.Component {
    constructor() {
        super()
        this.state = {
            isMenuOpen: false,
        }
    }

    toggle = () => {
        this.setState({ isMenuOpen: !this.state.isMenuOpen })
    };

    close = () => {
        this.setState({ isMenuOpen: false })
    };

    click = () => {
        console.log('You clicked an item')
    };

    render() {
        let menuOptions = {
            isOpen: this.state.isMenuOpen,
            close: this.close.bind(this),
            toggle: <NavItem onClick={this.toggle.bind(this)} {...this.props} text={this.props.title} />,
        }
        return (
            <DropdownMenu className={style['menu']} {...menuOptions}>
                {this.props.children}
            </DropdownMenu>
        )
    }
}
