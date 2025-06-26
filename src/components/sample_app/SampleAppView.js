import React from 'react';
// import LeftPanelIntro from '../intro/left_panel_intro';
import IntroductionLeftPanel from '../introduction_view/IntroductionLeftPanel.js'



const textStyle = {
  padding: '5px',
  fontSize: '18px',
  textAlign: 'left'
}

class SampleAppView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className="game-wrapper">
          <IntroductionLeftPanel/>
          <div className="gameview">
            <div className="intro-wrapper">
              <div style={textStyle}>
                This application was built with Polymer.JS and Redux.<br></br>
                Using the latest web components standards, the application is event driven, declarative, and focused on user experience.
              </div>
              <video src="src/assets/nuxeo_app.mp4" controls></video>
            </div>
          </div>
        </div>
    );
  }
}

export default SampleAppView;
