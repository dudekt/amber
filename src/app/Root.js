import React from 'react'
import './scss/main.scss'
import './scss/main.scss'
import TabsContainer from './components/tabs-container/container'
import Top from './components/header-components/top/container'
import Loader2 from './components/loader2/'

const Root = () => (
    <div>
        <Top />
        {/*<Loader/>*/}
        {/*<Loader2/>*/}
        <TabsContainer />
    </div>
);

export default Root
