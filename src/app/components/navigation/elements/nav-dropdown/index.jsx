// @flow

import React from 'react'
import classnames from 'classnames'
import style from './index.style.scss'
import Select from 'react-select';
import 'react-select/dist/react-select.css'

type Props = {

}

let options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
];

function logChange(val) {
    console.log("Selected: " + val);
}

export default ({  }: Props) => {

    return (
        <Select
            className={style['select-custom']}
            clearable={false}
            name={'form-field-name'}
            value={''}
            options={options}
            onChange={logChange}
        />
    )
}
