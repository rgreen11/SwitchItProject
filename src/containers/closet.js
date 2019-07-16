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
      name: [],
    };
  }

     componentDidMount() {
    
    let name = localStorage.getItem('name')
        axios.get(`https://switchit1234.herokuapp.com/clothes`)
          .then(response => response)
          .then(pics => {
            this.setState({img_url:pics.data, name: name})
          })
    }

  getClothingItems = filteredItems => {
    console.log("its working", filteredItems);
    this.setState({ img_url: filteredItems });
  };

  handleClick = () => {
    this.props.history.push("/Additem");
  };

  render() {

    let { img_url, name } = this.state;
    let date = new Date();
    console.log('img:', img_url)
    if (img_url.data) {
      return (
        <>
        <div className="positionButton">
          <button
            onClick={this.handleClick}
            type="button"
            className="btn btn-info sunny-morning-gradient"
          >
            UPLOAD IMAGES
          </button>
        </div>
      </>
      );
    } else {
      return (
        <>
        <div className='topB'>
          {/* <h2> {date}</h2> */}
        <h1>Rich's Closet</h1>
        </div>
        <div className="container">
          <div className="row">
            {/* <div className="col-4"> */}
              <Filter getClothingItems={this.getClothingItems} />
            {/* </div> */}
            <div className="col-10" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                 <ItemsList img_url={img_url} />
            </div>
          </div>
        </div>
      </>
       
      );
    }
    //  <Route path="/additem" exact strict component={AddItem} />
  }
}
export default Closet;
