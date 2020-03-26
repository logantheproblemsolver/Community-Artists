import React, { Component } from 'react';
import './notFound.css';

// this page is a not found page in case a user tries to go to a page that doesn't exist. Later down the road I would like to add a funny image to it to make it more lively
class NotFound extends Component {
    render() {
        return (
            <div className="notFound">
                <h1 className="header">The Page You Were Looking For Canot Be Found</h1>
                <p>
                    I'm sorry, I regret to inform you that the page you are looking for is not here. <br />
                    Please try our links in the navigation bar!
                </p>
            </div>
        )
    };
}; 

export default NotFound;
