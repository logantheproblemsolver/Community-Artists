import React, {Component} from 'react';
import config from '../config'
import axios from 'axios'
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
                    <label htmlFor="image"> Choose Image: 
                    <input type="file" name="image" 
                    accept="image/*"
                    onChange={e => this.onImageChange(e)} required/>
                    </label> 
                    <label htmlFor="title">
                        Artwork Title:
                        <input type="text" name="title" placeholder="Title" onChange={e => this.onTitleChange(e)} value={this.state.title} required />
                    </label>            
                    <label htmlFor="artist_name">
                        Artist Name: 
                        <input type="text" name="artist_name" placeholder="Billy Bob" onChange={e => this.onNameChange(e)} /> 
                    </label>
                    <label htmlFor="price">
                        Artwork Price: 
                        <input type="number" name="price" placeholder="$100" onChange={e => this.onPriceChange(e)} />
                    </label>
                    <label htmlFor="description" className="textAreaLabel">
                        Artwork Description: 
                        <textarea 
                        id="description" 
                        name="description"  
                        className="description"
                        placeholder="description" 
                        onChange={e => this.onDescriptionChange(e)} 
                        required
                        />
                    </label>
                    <button type="submit" className="submit">Upload Artwork</button>
                </form>
            </div>
        )
    }
}

export default UploadArtwork;