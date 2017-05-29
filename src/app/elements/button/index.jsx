// @flow

import React from 'react';
import classnames from 'classnames';
import style from './index.style.scss'

type Props = {
    className?: string,
    title: string,
}

const Button = (props: Props) => {

    return (
        <div className={style['body']}>
            <div className={classnames(
                style['button'],
                props.className
            )}>
                {props.title}
            </div>
        </div>
    )
};

export default Button
