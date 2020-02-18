import React from 'react';
import { Form, Input, Button } from 'antd';

const { TextArea } = Input

class ContactForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const fullName = event.target.elements.fullName.value;
    const email = event.target.elements.email.value
    const message = event.target.elements.message.value
    
    
    console.log(fullName, email, message)


  }
  render() {
    return (
      <div>
        <h2>Contact Us</h2>
        <Form onSubmit={this.handleSubmit}>
        <Form.Item label="Full Name">
          <Input name="fullName"
          placeholder="Please input your full name" />
        </Form.Item>
        <Form.Item label="Email">
          <Input name="email" 
          placeholder="Please input your email address" />
        </Form.Item>
        <Form.Item label="Message">
           <TextArea rows={6} name="message"/>
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        </Form>
      </div>
    );
  }
}
export default ContactForm;
