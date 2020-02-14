import React from 'react';

import './homepage-content.scss';

function HomepageContent(){ 
    return(
        <div className="homepage-content-wrapper">
            <p className="fade-up">
                A new instant messenger!
            </p>
            <p className="fade-up">
                Sign Up to start chatting now!
            </p>
        </div>
    );
}

export default HomepageContent;