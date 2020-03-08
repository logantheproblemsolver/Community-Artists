import React, {Component} from 'react';
import UploadForm from './UploadForm/uploadForm';
import './uploadArtwork.css'


class UploadArtwork extends Component {
    render() {
        return (
            <div className="uploadArtwork">
                <UploadForm />
            </div>
        )
    }
}

export default UploadArtwork;