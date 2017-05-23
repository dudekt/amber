// @flow

import React from 'react';
import style from './containers.style.scss'

export default class Container1 extends React.Component {

    render() {
        return (
            <div className={style['container']}>
                <div className={style['box']}>
                    1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ex id nesciunt quaerat qui. Accusantium alias commodi dolore dolores exercitationem fuga harum, itaque maxime odio placeat provident quod sapiente, suscipit?
                </div>
            </div>
        )
    }
}
