import React from 'react'
import './scss/main.scss'
import './scss/main.scss'
import TabsContainer from './components/tabs-container/container'
import Navigation from 'components/navigation/'
import Background from 'components/background/'
import Top from './components/header-components/top/container'
import Loader from './components/loader/'
import Loader2 from './components/loader2/'

const Root = () => (
    <div>
        {/*<Top />*/}

        <Background />
        <Navigation />
        <TabsContainer />

    </div>
);

export default Root
