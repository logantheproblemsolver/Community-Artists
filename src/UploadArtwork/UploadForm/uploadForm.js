import React, {Component} from 'react';


class UploadForm extends Component {
    render() {
        return (
            <form className="form">
                <button>Upload Image</button>  
                <label>
                    Artwork Title:
                    <input type="text" placeholder="Title" />
                </label>            
                <label>
                    Artist Name: 
                    <input type="text" placeholder="Billy Bob" /> 
                </label>
                <label>
                    Artwork Price: 
                    <input type="number" placeholder="$100" />
                </label>
                <label>
                    Artwork Description: 
                    <input id="description" type="text" placeholder="description" />
                </label>
                <button type="submit" className="submit">Upload Artwork</button>
            </form>
        )
    }
}


export default UploadForm;