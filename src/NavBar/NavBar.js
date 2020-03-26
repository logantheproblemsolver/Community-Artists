import React, {Component} from 'react';
import{Link} from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import './NavBar.css'


class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            showList: false
        }
    }


    handleClick() {
        this.setState({
            open: !this.state.open,
            showList: !this.state.showList
        });
    }

      
    render() {          
        
        const {showList} = this.state

        // This navigation is so it's easier to navigate pages, and also it can be scaleable or resuable 
        return (
            <nav className="navigation">
                <h1 className="title left"><Link to="/">Community Artists</Link></h1>
                <ul className={`${showList ? "nav-menu" : "nav-menu hidden"}`}>
                    <li className="nav-list" id="uploadArtwork"><Link to="/UploadArtwork">Upload Artwork</Link></li>
                    <li className="nav-list" id="showArtwork"><Link to="/ShowArtwork">Show Artwork</Link></li>
                </ul>
                <div className="nav-toggle">
                    <HamburgerMenu
                        isOpen={this.state.open}
                        menuClicked={this.handleClick.bind(this)}
                        width={18}
                        height={15}
                        animationDuration={.1}
                        className="hamburger"
                    />     
                </div>


            </nav>     
        )

    }
}

export default NavBar;