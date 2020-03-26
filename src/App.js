import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import LandingPage from './LandingPage/LandingPage';
import UploadArtwork from './UploadArtwork/uploadArtwork';
import ShowArtwork from './ShowArtwork/showArtwork';
import NotFound from './NotFoundPage/notFoundPage';
import './App.css';

// This App component is where I'm using the Router app in order to have everything on one page so later down the road it'll be a lot more scaleable 
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
