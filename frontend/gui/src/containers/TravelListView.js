import React, { Component } from 'react';
import Travel from '../components/Travel';
import axios from 'axios';
import CustomForm from '../components/Form'
  

class TravelList extends Component {
    state = {
        travels: []
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/')
        .then(res => {
            this.setState({
                travels: res.data
            })
            console.log(res.data)
        })

   
    }
    render() { 
        return ( <div>
          <Travel data={this.state.travels}/> 
          <br />
          <h2>Create An Travel</h2>
          <CustomForm 
          requestType="post"
          travelID={null}
          btnText="create"/>
        </div>
        );
    }
}
 
export default TravelList;