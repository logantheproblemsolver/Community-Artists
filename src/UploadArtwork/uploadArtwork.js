import React, {Component} from 'react';
import config from '../config';
import axios from 'axios';
import './uploadArtwork.css'

// This component is handling the uploads of the artwork
class UploadArtwork extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: null,
            title: '', 
            name: '', 
            price: '$0', 
            description: '',
            status: null,
        }
    }

    clearForm = () => {
        document.getElementById('form').reset();

    }

    onImageChange = image => {
        let file = image.target.files
        this.setState({
            image: file[0]
        })
    }



    onTitleChange = title => {
        title.preventDefault();
        this.setState({
            title: title.target.value
        })
    }    

    onNameChange = name => {
        name.preventDefault();
        this.setState({
            name: name.target.value
        })
    }

    onPriceChange = price => {
        price.preventDefault();
        this.setState({
            price: '$' + price.target.value
        })
    }

    onDescriptionChange = desc => {
        desc.preventDefault();
        this.setState({
            description: desc.target.value
        })
    }

    onSubmit = submit => {
        submit.preventDefault();
        let myForm = document.getElementById('form')
        const formData = new FormData(myForm);

        const request = {
            headers: {
                'content-type': 'application/json'
            }
        };
        const url = config.API_ENDPOINT + '/uploadArtwork'

// I am using axios so I can efficiently send form data with an image back to the server

        axios.post(url, formData, request)
            .then(res => {
                if (res.statusText !== 'OK') {
                    return res.status
                }
                return res.data
            })
            .then(data => {
                this.setState({
                    status: 'You have successfully uploaded an image! 🎉'
                })
                document.getElementById('form').reset();
            })
            .catch(error => {
                alert(error)
        });
    }

    

// Here is the form that collects the data
    render() {
        return (
            <div className="uploadArtwork">
                <div className="status">
                    {this.state.status}
                </div>
                <form className="form" id="form" onSubmit={e => this.onSubmit(e)} >
                    <label htmlFor="image"> Choose Image  </label>
                    <input 
                        type="file" 
                        name="image" 
                        id="uploadImage"
                        accept="image/*"
                        onChange={e => this.onImageChange(e)} 
                        required
                    />
                  
                    <label htmlFor="title">
                        Artwork Title
                    </label>            
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="Title"
                        id="title" 
                        onChange={e => this.onTitleChange(e)} 
                        value={this.state.title} 
                        required 
                    />
                    <label htmlFor="artist_name">
                        Artist Name
                    </label>
                    <input 
                        type="text" 
                        name="artist_name" 
                        id="artistName"
                        placeholder="Billy Bob" 
                        onChange={e => this.onNameChange(e)} 
                    /> 
                    <label htmlFor="price">
                        Artwork Price
                    </label>
                    <input 
                        type="number" 
                        name="price" 
                        placeholder="$100" 
                        id="price"
                        onChange={e => this.onPriceChange(e)} 
                    />
                    <label htmlFor="description" className="textAreaLabel">
                        Artwork Description
                    </label>
                    <textarea 
                        id="description" 
                        name="description"  
                        placeholder="description" 
                        onChange={e => this.onDescriptionChange(e)} 
                        required
                    />
                    <div className="buttons">
                        <button 
                        type="submit" 
                        className="submit"
                        variant="contained"
                        color="primary"
                        >
                            Upload
                        </button>
                        <button 
                        className="cancel"
                        variant="contained"
                        color="secondary"
                        onClick={this.clearForm}
                        >
                            Cancel
                        </button>
                    </div>

                </form>
            </div>
        )
    }
}

export default UploadArtwork;