import React from "react";
import { Typography, Layout } from "antd";

const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer style={footerStyle}>
      <Typography.Text style={textStyle}>
        © 2024 Copyright <b> Rohan Construction Pvt Ltd</b>. All Rights Reserved
      </Typography.Text>
      <style jsx>{`
        @media (max-width: 768px) {
          footer {
            height: 100px; /* Adjust height for smaller screens */
                padding-right: 82px;
          }
          .ant-typography {
            font-size: 0.9rem; /* Reduce font size for smaller screens */
          }
        }
        @media (max-width: 500px) {
          footer {
            height: 80px; /* Further adjust height for very small screens */
                padding-right: 82px;
          }
          .ant-typography {
            font-size: 0.8rem; /* Further reduce font size for very small screens */
          }
        }
      `}</style>
    </Footer>
  );
};

const footerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "sticky",
  bottom: "0",
  height: "10vh", // Use viewport height for better scaling
  width: "100%",
  color: "#fff",
  backgroundColor: "gray",
  textAlign: "center", // Center text horizontally
};

const textStyle = {
  color: "white",
  fontSize: "1rem", // Base font size
  margin: "0", // Remove default margin
};

export default FooterComponent;
