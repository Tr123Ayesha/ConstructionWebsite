import React from "react";
import { HomeOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import './contact.css';  // Import the external CSS

const Contact = () => {
  return (
    <div className="container">
      <h3 className="heading">Get In Touch</h3>
      <div className="contactWrapper">
        <div className="contactItem">
          <HomeOutlined className="icon" />
          <h3>Address</h3>
          <p>House No 180, Street No 73, G9/3 Islamabad Pakistan</p>
        </div>
        <div className="contactItem">
          <PhoneOutlined className="icon" />
          <h3>Phone</h3>
          <p>0304/016/64/58</p>
        </div>
        <div className="contactItem">
          <MailOutlined className="icon" />
          <h3>Email</h3>
          <p>rohanconstruction@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
