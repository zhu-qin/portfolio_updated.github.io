import { createRoot } from 'react-dom/client';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'


function Root() {
  return (
    <div>
      <App></App>
    </div>
  )
}


const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Root/>);
