import React, { Component } from 'react'
import firebase from '../firebase';
import ImageService from '../services/images';
import axios from 'axios';



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
                <div className="input-group mb-3">
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" onChange={this.handleFileInput} />

                    </div>
                    <div className="col-sm-8">
                        <form>
                            <select id="inputState" onChange={this.handleCategory} className="form-control" defaultValue="Choose...">
                                <option >CATEGORY</option>
                                {
                                    category.map((e, i) => {
                                        return <option key={i} >{e.category}</option>
                                    })
                                }
                            </select>


                            <select id="inputState" onChange={this.handleStyle} className="form-control" defaultValue="Choose...">
                                <option >STYLE</option>
                                {
                                    style.map((e, i) => {
                                        return <option key={i} >{e.style}</option>
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
                                <option >SEASON</option>
                                {
                                    season.map((e, i) => {
                                        return <option key={i} >{e.season}</option>
                                    })
                                }
                            </select>


                            <div className="form-group">

                                <button type="button" onClick={this.postPosted}  className="button">Upload</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
