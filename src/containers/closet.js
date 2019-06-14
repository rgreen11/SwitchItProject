import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ItemsList from "../components/closetitems";
import axios from "axios";
import { Link } from "react-router-dom";
import Filter from "../components/closetfilter.js";
import "../components/closetdisplay.css";
import AuthContext from "../contexts/auth";

class Closet extends React.Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = {
      id: [],
      img_url: [],
      user: null,
      uid: null,
      name: ""
    };
  }

<<<<<<< HEAD
  componentDidMount() {
    // this.unsubscribe = firebase.auth().onAuthStateChanged(user=>{

    // console.log(user.n)
    //  axios.get('http://localhost:8080/user/read',{
    //     params:{
    //     email: "lukas@pursuit.org"
    //     }
    //   })
    //  .then((response)=>{
    //    const rootObj = response.data
    //    console.log("Log",response)
    //    if(rootObj){
    //      // this.setState({uid: uid})
    //    }
    //  })
    //  .catch((error)=>{
    //      console.log(error)
    //  })
    //  })
    let name = localStorage.getItem("name");
    axios
      .get(`https://switchit1234.herokuapp.com/clothes`)
      .then(response => response.data)
      .then(pics => {
        this.setState({ img_url: pics, name: name });
      });
  }
=======
     componentDidMount() {
    
    let name = localStorage.getItem('name')
        axios.get(`https://switchit1234.herokuapp.com/clothes`)
          .then(response => response.data)
          .then(pics => {
            this.setState({img_url:pics, name: name})
          })
    }
>>>>>>> master

  getClothingItems = filteredItems => {
    console.log("its working", filteredItems);
    this.setState({ img_url: filteredItems });
  };

  handleClick = () => {
    this.props.history.push("/Additem");
  };

  render() {
    console.log("trying filter", this.props.filterItem);
    console.log(this.context);
    const { img_url } = this.state;
    if (img_url.length) {
      return (
        <>
          <h1>Welcome {this.context.user.email}</h1>

          <div className="container">
            <div className="row">
              {/* <div className="col-4"> */}
                <Filter getClothingItems={this.getClothingItems} />
              {/* </div> */}
              <div className="col-10" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                {img_url.map((e, i) => {
                  return <ItemsList img={e.img_url} />;
                })}
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="positionButton">
            <button
              onClick={this.handleClick}
              type="button"
              className="btn btn-primary handleButton"
            >
              UPLOAD IMAGES
            </button>
          </div>
        </>
      );
    }
    //  <Route path="/additem" exact strict component={AddItem} />
  }
}
export default Closet;

// <div class='col col-4 pink'></div>
//       <div class='col col-8 black'></div>
