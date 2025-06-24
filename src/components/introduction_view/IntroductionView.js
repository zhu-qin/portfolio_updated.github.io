import React from 'react';
import IntroductionLeftPanel from './IntroductionLeftPanel.js';

const links = [
  <a key={'github'} className={'links intro-link'} href='https://github.com/zhu-qin'>Github</a>,
  <a key={'linkedin'} className={'links intro-link'} href='https://www.linkedin.com/in/zhu-qin/'>LinkedIn</a>,
]

const skillIcons = [
  "ruby.png",
  "rails.png",
  "javascript.png",
  "react.png",
  "html.png",
  "css.png",
  "jquery.png",
  "postgresql.png",
  "git.png",
  "aws.png"
].map((src) => {
  return (
    <div className={"intro-skills-list-icon"} key={src}>
      <img src={`src/assets/skills_icons/${src}`}></img>
    </div>
  )
})

 function IntroductionView (props) {
  

    return (
        <div className="game-wrapper">
          <IntroductionLeftPanel/>
          <div className="game-view">
            <div className={"intro-wrapper"}>
              <div className={"intro-title"}>Qin Zhu</div>
							<div className={"intro-paragraph"}>

Hi, I'm Qin Zhu. I'm a software engineer based in New York City, USA. The languages I work with include Javascript, HTML, CSS, Ruby, and Java. My experiences include building and deploying user interfaces for enterprise content management software.<br></br>

              </div>
              <div className="intro-skills-list">
                {skillIcons}
              </div>
              <div className={'intro-links-wrapper'}>
                { props.embeddedView ? props.embeddedView : links }
              </div>
            </div>
          </div>
        </div>
    );
  }


export default IntroductionView