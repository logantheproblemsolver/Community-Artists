import React from 'react';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import LandingPage from './LandingPage/LandingPage';
import {Route, Switch} from 'react-router-dom';
import UploadArtwork from './UploadArtwork/uploadArtwork';
import ShowArtwork from './ShowArtwork/showArtwork'
import NotFound from './NotFoundPage/notFoundPage'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="mainApp">
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/UploadArtwork" component={UploadArtwork} />
          <Route exact path="/ShowArtwork" component={ShowArtwork} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
