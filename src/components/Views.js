import React from 'react';
import IntroductionView from './introduction_view/IntroductionView.js';
import ContactView from './contact_view/ContactView.js';
import InvadersView from './invaders_view/InvadersView.js';
import BlocksView from './tetris_view/BlocksView.jsx';
import SampleAppView from './sample_app/SampleAppView.js';


let Views = {
    "Introduction": IntroductionView,
    "Invaders": InvadersView,
    "Blocks": BlocksView,
    "App": SampleAppView,
    "Contact": ContactView
}

export default Views

