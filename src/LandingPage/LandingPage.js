import React, {Component} from 'react';
import './LandingPage.css'


class LandingPage extends Component {
    render() {
        return (
            <div className="landingPage">
                <h1 className="h1">Welcome to the Community Artists site!</h1>
                <p className="aboutParagraph">
                    This site is here to show you all the artists in the community, whether it be big names, small names or anything in between! 
                    The goal is to have a site that helps to showcase all artists of this community, and really help anyone learn about the art community here or get connected.
                    Feel free to browse the uploaded  artwork or upload your own work!
                </p>
            </div>
        )
    }
}


export default LandingPage;