import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button } from 'antd'
import CustomForm from '../components/Form'


const { Meta } = Card;

class TravelDetail extends Component {
    state = {
        travel: {}
    }
    componentDidMount(){
        const travelID = this.props.match.params.travelID;
        axios.get(`http://127.0.0.1:8000/api/${travelID}/`)
        .then(res => {
            this.setState({
                travel: res.data
            })
            console.log(res.data)
        })
    }
    handleDelete = (event) => {
        const travelID = this.props.match.params.travelID;
        axios.delete(`http://127.0.0.1:8000/api/${travelID}/`);
        this.props.history.push('/');
        this.forceUpdate();
    }

    render() { 
        return ( <div>
            <Card
    style={{ width: 800, marginLeft: 20 }}
    cover={
      <img
        alt="example"
        src={this.state.travel.image}
      />
    }
  >
    <Meta
      title={this.state.travel.title}
      description={this.state.travel.description}
     
    />
  </Card>
                <CustomForm 
                requestType="put"
                travelID={this.props.match.params.travelID}
                btnText="Update"/>
                <form onSubmit={this.handleDelete}>
                    <Button type="danger" htmlType="submit">Delete</Button>
                </form>             
        </div> );
    }
}
 
export default TravelDetail;