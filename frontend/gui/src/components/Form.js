import React from 'react';
import axios from 'axios'
import { Form, Input, Button } from 'antd';

const { TextArea } = Input

class CustomForm extends React.Component {
    handleFormSubmit = (event, requestType, travelID) => {
        // event.preventDefault();
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;
        
        switch ( requestType) {
            case 'post':
                return axios.post('http://127.0.0.1:8000/api/', {
                title: title,
                content: content
            })
            .then(res => console.log(res)) 
            .catch(error => console.err(error));           
           
            case 'put':
                return axios.put(`http://127.0.0.1:8000/api/${travelID}/`, {
                title: title,
                content: content
            })
            .then(res => console.log(res)) 
            .catch(error => console.err(error));     
        }

    }
  render() {
    return (
      <div>
        <Form onSubmit={(event) => this.handleFormSubmit(
            event,
            this.props.requestType,
            this.props.travelID )}>
          <Form.Item label="Title">
            <Input name="title" placeholder="Put a title Here" />
          </Form.Item>
          <Form.Item label="Content">
          <TextArea rows={6} name="content" placeholder="Enter a text" />
          </Form.Item>
          <Form.Item >
        <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default CustomForm;