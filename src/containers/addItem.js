import React, { Component } from 'react'
import firebase from '../firebase';
import ImageService from '../services/images';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css';
import './AddItem.css';



export default class Picturepost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fileUploadURL: '',//firebase uploadnamapic
            category: [],
            chosencategory: '',
            style: [],
            chosenstyle: '',
            color: [],
            chosencolor: '',
            season: [],
            chosenseason: ''
        }
    }

    //----------------------
  
    componentDidMount() {

        axios.get(`http://localhost:8080/uploadpics/category`)
            .then(res => res.data)
            .then(category => {
                console.log('category list', category)
                this.setState({ category: category })
            })

        axios.get(`http://localhost:8080/uploadpics/style`)
            .then(res => res.data)
            .then(style => {
                console.log('style list', style)
                this.setState({ style: style })
            })

        axios.get(`http://localhost:8080/uploadpics/color`)
            .then(res => res.data)
            .then(color => {
                console.log('color list', color)
                this.setState({ color: color })
            })

        axios.get(`http://localhost:8080/uploadpics/season`)
            .then(res => res.data)
            .then(season => {
                console.log('season list', season)
                this.setState({ season: season })
            })
    }

    //---------HANDLES SELECTIONS 
    handleCategory = (e) => {
        console.log('CATEGORY selected', e.target.value);
        this.setState({ chosencategory: e.target.value })
    }

    handleStyle = (e) => {
        console.log('STYLE selected', e.target.value);
        this.setState({ chosenstyle: e.target.value })
    }

    handleColor = (e) => {
        console.log('COLOR selected', e.target.value);
        this.setState({ chosencolor: e.target.value })
    }

    handleSeason = (e) => {
        console.log('SEASON selected', e.target.value);
        this.setState({ chosenseason: e.target.value })
    }


    saveImage = (url) => {
        const date = Date();
    
        ImageService.saveImage(url, date);
      }
    
      handleFileInput = async (e) => {
          console.log('string stored in FB:',e)
        const firstFile = e.target.files[0];
        const root = firebase.storage().ref()
        const newImage = root.child(firstFile.name);

       
        try {
            const snapshot = await newImage.put(firstFile);
            const url = await snapshot.ref.getDownloadURL();
            this.saveImage(url);
            // console.log('thisisurl',url)
            this.setState({fileUploadURL:url})
          }
          catch(err) {
            console.log(err);
          }
          
        }
    
//function to post
postPosted=(e)=>{
    console.log('thisisstate',this.state.url)
e.preventDefault();
    axios({
     
     method: 'POST',
     url: `http://localhost:8080/uploadpics/newpic`,
     data: {
         category: this.state.chosencategory,
         style: this.state.chosenstyle,
         color: this.state.chosencolor,
         season:this.state.chosenseason,
         user_id:1,
         img_url: this.state.fileUploadURL
     }
 })
     .then(function (res) {
         console.log('data', res)
         console.log("success")
         
         // this.saveImage(url);---------------and here 
     }).then(() => alert('Picture was added successfully'))

     .catch(function (error) {
         console.log('err', error)
     })}

     



    //-------------------------------------------
    render() {
        console.log('thisisstate',this.state.url)
        // console.log('thispic',this.state.fileUpload.name)
        const { category, style, color, season } = this.state
        return (
            <div className='container'>
                <div className ="upload-box">
                    <label className ="upload-button">
                    <h1 className='text'>Select</h1> 
                    <h1 className='text'>Image</h1>
                        <input type="file" onChange={this.handleFileInput} className='hidden_input_file' capture="camera"/>
                    </label>
                </div>

                <div className="button_holder">
                    <button type="button" onClick={this.postPosted}  className="submit-button">Submit</button>
                </div>

                <p className="rightarrow"><i></i></p> 

                

                    {/* <div>
                        <label className="custom-upload">
                        Take a Photo
                        <input type="file" accept="image/*" capture="camera" onChange={this.capture} className="button_control"/>
                        </label>
                    </div> */}
                

                     <div className="selections">
                        <form className = "inputs">
                            <select id="inputState" onChange={this.handleCategory} className="form-control" defaultValue="Choose...">
                                <option>CATEGORY</option>
                                {
                                    category.map((e, i) => {
                                        return <option key={i} >{e.category}</option>
                                    })
                                }
                            </select>


                            <select id="inputState" onChange={this.handleStyle} className="form-control" defaultValue="Choose...">
                                <option>STYLE</option>
                                {
                                    style.map((e, i) => {
                                        return <option key={i}>{e.style}</option>
                                    })
                                }
                            </select>




                            <select id="inputState" onChange={this.handleColor} className="form-control" defaultValue="Choose...">
                                <option >COLOR</option>
                                {
                                    color.map((e, i) => {
                                        return <option key={i} >{e.color}</option>
                                    })
                                }
                            </select>


                            <select id="inputState" onChange={this.handleSeason} className="form-control" defaultValue="Choose...">
                                <option>SEASON</option>
                                {
                                    season.map((e, i) => {
                                        return <option key={i} >{e.season}</option>
                                    })
                                }
                            </select>
                        </form>
                    </div> 
            </div>
        );
    }
}
