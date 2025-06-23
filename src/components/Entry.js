import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
import Route from './router/Route.js'
import Router from './router/Router.js'
import Views from './Views.js'

const routes = Object.keys(Views).map((view, index) => {
  return (
        <Route path={`Portfolio/${view}`}
            component={Views[view]}
            key={index}>
        </Route>
   
  )
})


function Entry() {
  return (
        <Router>
            {routes}
        </Router>
    
  )
}

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Entry/>);
