// @flow

import React from 'react';
import style from './presentation.style.scss'
import Tabs from './components/list-tabs'
import Navbar from 'elements/nav-bar/'

import Container1 from './components/list-containers-1'
import Container2 from './components/list-containers-2'
import Container3 from './components/list-containers-3'
import Container4 from './components/list-containers-4'
import Container5 from './components/list-containers-5'

export default class TabsPresentation extends React.Component {
    constructor() {
        super();

        this.state = {
            activeTab: '1',
        }
    }

    state: {
        activeTab: string,
    };

    setActiveTab = (tab) => {
        this.setState({
            activeTab: tab,
        })
    }

    render() {
        return (
            <div className={style['body']}>
                <Navbar>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam voluptate quam minima aliquid dolorum pariatur natus iure esse optio voluptatem impedit ut incidunt perspiciatis, amet ex quia tempore distinctio eaque!
                </Navbar>
                <Tabs onClick={this.setActiveTab} activeTab={this.state.activeTab} />
                {this.state.activeTab === '1'
                    ? <Container1 />
                    : null
                }
                {this.state.activeTab === '2'
                    ? <Container2 />
                    : null
                }
                {this.state.activeTab === '3'
                    ? <Container3 />
                    : null
                }
                {this.state.activeTab === '4'
                    ? <Container4 />
                    : null
                }
                {this.state.activeTab === '5'
                    ? <Container5 />
                    : null
                }
            </div>
        )
    }
}
