import React from 'react';
import IntroductionLeftPanel from './IntroductionLeftPanel.js';




function IntroductionView() {
    return (
            <div className="game-wrapper">
                <IntroductionLeftPanel/>
                <div className="game-view"></div>
            </div>
        )   
}


export default IntroductionView