import React, { Component } from 'react'
import firebase from '../firebase';
import ImageService from '../services/images';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css';
import '../styles/AddItem.css';
import {clothingCategory,stylesByCategory,clothingColor,clothingSeason} from '../containers/api'



export default class AddItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fileUploadURL: '',//firebase uploadnamapic
            categories: clothingCategory,
            chosencategory: '',
            styles: [],
            chosenstyle: '',
            colors: clothingColor,
            chosencolor: '',
            seasons: clothingSeason,
            chosenseason: '',
            isOpen: false,
        }
    }

    //---------HANDLES SELECTIONS 
    handleCategory = (e) => {
      this.setState({
          chosencategory: e.target.value,
          styles: stylesByCategory[e.target.value]
        })
      
   
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
        const firstFile = e.target.files[0];
        const root = firebase.storage().ref()
        const newImage = root.child(firstFile.name);
        try {
            const snapshot = await newImage.put(firstFile);
            const url = await snapshot.ref.getDownloadURL();
            this.saveImage(url);
            this.setState({fileUploadURL:url})
          }
          catch(err) {
            console.log(err);
          }
          
        }
    
//function to post
postPosted=(e)=>{
    
    if(this.state.chosencategory==='' || this.state.chosencolor==='' || this.state.chosenseason==='' || this.state.chosenstyle===''){
        return alert('You must select from all fields')
    }

else {
    console.log('thisisstate',this.state.url)
e.preventDefault();
    axios({
     method: 'POST',
     url: `http://localhost:8080/`,
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

     }).then(() => alert('Picture was added successfully'))

     .catch(function (error) {
         console.log('err', error)
     })}
    }

    //--------------- toggle isOpen

handleSlider=(isOpen)=>{
    console.log('inside state:',isOpen)
        if(isOpen === true){
          this.setState({isOpen: false})
        } else{
            this.setState({isOpen: true})
        }
      }
    
    //-------------------------------------------
    render() {
        console.log('state:', this.state)
        // console.log('thispic',this.state.fileUpload.name)
        let { categories, styles, isOpen } = this.state
        console.log('isOpen', isOpen)
        return (
            <>
            <div className={isOpen ?  "shadow": "noshadow" }></div>

            <div className='bigbox'>
                <div className ="upload-box">
                    <label className ="upload-button">
                    <h1 className='text'>Select</h1> 
                    <h1 className='text'>Image</h1>
                        <input type="file" onChange={this.handleFileInput} className='hidden_input_file' capture="camera"/>
                    </label>
                </div>

                <div className="button_holder">
                    <button type="button" onClick={this.postPosted}  className="submit-button"><h1 className='button-text'>Submit</h1> </button>
                </div>
                <div className='containertext'>
                    <h6 className="slidertext">Click</h6>
                </div>
                <button className="rightarrow arrow-right" onClick={()=>{this.handleSlider(this.state.isOpen)}}><i></i></button> 



                <div className={`slider category-position-left ${+ isOpen ? "fade-inShow": "fade-in"}`} >
                    <div className="sliderbox">
                        <form>
                            <select id="inputState" onChange={this.handleCategory} className="form-control tab-color" defaultValue="CATEGORY">
                                <option value="CATEGORY" disabled>CATEGORY</option>

                                {
                                    categories.map((category, i) => {
                                        return <option key={i}>{category}</option>
                                    })
                                }
                            </select>

                            <select id="inputState"  className="form-control tab-color" onChange={this.handleStyle} defaultValue="STYLE">
                                <option value="STYLE" disabled>STYLE</option>
                                {
                                    styles.map((style, i) => {
                                        return <option key={i}>{style}</option>
                                    })
                                }
                            </select>

                            <select id="inputState" onChange={this.handleColor} className="form-control tab-color" defaultValue="COLOR">
                                <option value="COLOR" disabled>COLOR</option>
                                {
                                    clothingColor.colors.map((color, i) => {
                                        return <option key={i}>{color}</option>
                                    })
                                }
                            </select>

                            <select id="inputState" onChange={this.handleSeason} className="form-control tab-color" defaultValue="SEASON">
                                <option value="SEASON" disabled>SEASON</option>
                                {
                                    clothingSeason.seasons.map((season, i) => {
                                        return <option key={i}>{season}</option>
                                    })
                                }
                            </select>

                            <div className="form-group upload-button-category">
                                <button type="button " onClick={this.postPosted}  className="button">Upload</button>
                            </div>

                            <div className='containertext'>
                                <h6 className="slidertext">Return</h6>
                                <button className="rightarrow arrow-left" onClick={()=>{this.handleSlider(this.state.isOpen)}}><i></i></button> 
                            </div>
                        </form>
                    </div> 
                </div>
                
            </div>
            
            
            </>
        );
    }
}
