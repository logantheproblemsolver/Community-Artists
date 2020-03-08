import React from 'react';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import LandingPage from './LandingPage/LandingPage';
import {Route} from 'react-router-dom';
import UploadArtwork from './UploadArtwork/uploadArtwork';
import ShowArtwork from './ShowArtwork/showArtwork'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route exact path="/UploadArtwork" component={UploadArtwork} />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/ShowArtwork" component={ShowArtwork} />
        <Footer />
      </div>
    )
  }
}

export default App;
