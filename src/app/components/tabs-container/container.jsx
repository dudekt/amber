import React from 'react';
import Presentation from './presentation'

export default class TabsContainer extends React.Component {
    props: {
        activeTab: string,
        onClick: (active: string) => void
    };

    render() {
        return (
            <Presentation />
        )
    }
}
