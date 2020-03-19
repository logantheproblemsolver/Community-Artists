import React, {Component} from 'react';
import './notFound.css';


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
    }
} 

export default NotFound