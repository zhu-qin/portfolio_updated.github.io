import React from 'react';
import Views from './Views.js';


function Links() {
    const links = Object.keys(Views).map((view, index) => {
         return (
            <a className={"links"} href={`#Portfolio/${view}`} key={index}>{view}</a>
         )
    })

    return (
        <div className="links-wrapper">
            {links}
        </div>
    )
}

export default Links