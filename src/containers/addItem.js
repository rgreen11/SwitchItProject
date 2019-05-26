import React, { Component } from 'react'
import firebase from '../firebase';
import ImageService from '../services/images';
import axios from 'axios'
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
            chosenseason: ''
        }
    }

    //----------------------
  
    // componentDidMount() {

    //     axios.get(`http://localhost:8080/uploadpics/category`)
    //         .then(res => res.data)
    //         .then(category => {
    //             console.log('category list', category)
    //             this.setState({ category: category })
    //         })

    

    //     axios.get(`http://localhost:8080/uploadpics/color`)
    //         .then(res => res.data)
    //         .then(color => {
    //             console.log('color list', color)
    //             this.setState({ color: color })
    //         })

    //     axios.get(`http://localhost:8080/uploadpics/season`)
    //         .then(res => res.data)
    //         .then(season => {
    //             console.log('season list', season)
    //             this.setState({ season: season })
    //         })
    // }

    //---------HANDLES SELECTIONS 
    handleCategory = (e) => {
      this.setState({
          chosencategory: e.target.value,
          styles: stylesByCategory[e.target.value]
        })
      
    // else {
    //    const categoryClick = e.target.value
    //         axios.get(`http://localhost:8080/uploadpics/style/${categoryClick}`)
    //         .then(style => {
    //             console.log(style.data)
    //             this.setState({ style: style.data },()=>{
    //                 console.log('updated style:',this.state.style)
    //             })
    //         })
    // }
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
          console.log('string stored in firebase:',e)
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
    
    if(this.state.chosencategory==='' || this.state.chosencolor==='' || this.state.chosenseason==='' || this.state.chosenstyle===''){
        return alert('You must select from all fields')
    }

else {
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
    }
    
    //-------------------------------------------
    render() {
        console.log('category list', this.state.category)
        console.log('style list', this.state.style)
        console.log('season list', this.state.seasons)
        // console.log('thispic',this.state.fileUpload.name)
        const { categories, styles } = this.state
        return (
            <div className='container'>
                <div className="input-group mb-3">
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" onChange={this.handleFileInput} />

                    </div>
                    <div className="col-sm-8">
                        <form>
                            <select id="inputState" onChange={this.handleCategory} className="form-control" defaultValue="CATEGORY">
                                <option value="CATEGORY" disabled>CATEGORY</option>

                                {
                                    categories.map((category, i) => {
                                        return <option key={i} >{category}</option>
                                    })
                                }
                            </select>


                            <select id="inputState"  className="form-control" onChange={this.handleStyle} defaultValue="STYLE">
                                <option value="STYLE" disabled>STYLE</option>
                                {
                                    styles.map((style, i) => {
                                        return <option key={i} >{style}</option>
                                    })
                                }
                            </select>




                            <select id="inputState" onChange={this.handleColor} className="form-control" defaultValue="COLOR">
                                <option value="COLOR" disabled>COLOR</option>
                                {
                                    clothingColor.colors.map((color, i) => {
                                        return <option key={i} >{color}</option>
                                    })
                                }
                            </select>


                            <select id="inputState" onChange={this.handleSeason} className="form-control" defaultValue="SEASON">
                                <option value="SEASON" disabled>SEASON</option>
                                {
                                    clothingSeason.seasons.map((season, i) => {
                                        return <option key={i} >{season}</option>
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