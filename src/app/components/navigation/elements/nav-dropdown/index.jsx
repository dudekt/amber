// @flow

import React from 'react'
import classnames from 'classnames'
import style from './index.style.scss'
import DropdownMenu from 'react-dd-menu'

export default class DropdownItem extends React.Component {
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
            toggle: <button type="button" onClick={this.toggle.bind(this)}>Click me!</button>,
            align: 'right',
        }
        return (
            <DropdownMenu {...menuOptions}>
                <li><a href="#">Example 1</a></li>
                <li><button type="button" onClick={this.click.bind(this)}>Example 2</button></li>
            </DropdownMenu>
        )
    }
}
