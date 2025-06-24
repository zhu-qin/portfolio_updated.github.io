import React from 'react';
import IntroductionView from '../introduction_view/IntroductionView.js';

const formStyle = {
  padding: '20px',
  display: "flex",
  margin: "20px",
  textAlign: "left"
}

const textInput = {
  width: "500px",
  height: "150px",
  textAlign: "left",
  border: "1px solid",
  borderRadius: "2px",
  resize: "none"
}

const emailInput = {
  width: "500px",
  height: "40px",
  display: 'block',
  textAlign: "left",
  border: "1px solid",
  borderRadius: "2px",
}

const textSizing = {
  fontSize: "24px"
}

const submitButton = {
  marginRight: "60px",
  color: "black",
  display: "block",
  borderRadius: "3px",
  border: "1px solid black",
  height: "60px",
  marginTop: "10px",
  textAlign: "center",
  fontSize: "30px",
  lineHeight: "55px",
  cursor: "pointer"
}


const contact = (<form style={formStyle} action="https://formspree.io/f/mnnvglba" method="POST">
                  <div>
                    <input style={submitButton} type="submit" value="Send"></input>
                  </div>

                  <div>
                    <div>
                      <div style={textSizing}>Type a text message to Qin's email:</div>
                      <textarea style={textInput} name="name"></textarea>
                    </div>

                    <div>
                      <div style={textSizing}>Type in your Email Address:</div>
                      <input style={emailInput} type="email" name="_replyto"></input>
                    </div>
                  </div>
                </form>)


function ContactView(){
  
    return (
        <div>
          <IntroductionView embeddedView={contact}></IntroductionView>
        </div>
    );

}


export default ContactView
