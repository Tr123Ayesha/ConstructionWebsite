import React from 'react';
import { Card, Col, Row } from 'antd';
import { HomeOutlined, ToolOutlined, HighlightOutlined, AppstoreAddOutlined, SettingOutlined, PhoneOutlined } from '@ant-design/icons';

const services = [
  { title: 'Building Construction', description: 'Comprehensive construction services for commercial, residential, and industrial projects, ensuring quality and safety.', icon: <ToolOutlined style={{ fontSize: '32px', color: '#0066b2' }} /> },
  { title: 'Home Renovation', description: 'Expert home renovation services including remodeling, interior design, and custom upgrades.', icon: <HomeOutlined style={{ fontSize: '32px', color: '#0066b2' }} /> },
  { title: 'Interior Design', description: 'Transform your space with our innovative interior design services, tailored to your style.', icon: <HighlightOutlined style={{ fontSize: '32px', color: '#0066b2' }} /> },
  { title: 'Ceiling & Tile Work', description: 'Professional ceiling installation and tile work that enhances the aesthetic of your space.', icon: <AppstoreAddOutlined style={{ fontSize: '32px', color: '#0066b2' }} /> },
  { title: 'Mechanical, Electrical & Plumbing (MEP)', description: 'Reliable MEP services to ensure the efficient functioning of your building’s critical systems.', icon: <SettingOutlined style={{ fontSize: '32px', color: '#0066b2' }} /> },
  { title: '24/7 Emergency Services', description: 'Round-the-clock emergency repair services to address any urgent issues in your home or business.', icon: <PhoneOutlined style={{ fontSize: '32px', color: '#0066b2' }} /> },
];

const Service = () => {
  return (
    <>
      <h3 style={{ color: 'black', fontSize: '24px', marginBottom: "5px" }}>Our Services</h3>
      <h1 style={{ color: '#0066b2', fontSize: '50px', fontWeight: '500', marginTop: '15px' }}>What Can We Offer?</h1>
      <div style={{ marginLeft: '15%', marginRight: '15%' }}>
        <Row gutter={16}>
          {services.map((service, index) => (
            <Col 
              xs={24} sm={12} md={8} lg={8} // Responsiveness for different screen sizes
              key={index} 
              style={{ marginBottom: '16px' }}
            >
              <Card
                size="small"
                bordered={true}
                style={{
                  minHeight: '180px',
                  transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
                  borderColor: '#e8e8e8',
                }}
                hoverable
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
                  e.currentTarget.style.borderColor = '#0066b2';
                  e.currentTarget.style.backgroundColor = '#0066b2';
                  e.currentTarget.querySelector('.service-desc').style.color = 'white';
                  e.currentTarget.querySelector('.service-title').style.color = 'white';
                  e.currentTarget.querySelector('.anticon').style.color = 'white';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
                  e.currentTarget.style.borderColor = '#e8e8e8';
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.querySelector('.service-title').style.color = '#0066b2';
                  e.currentTarget.querySelector('.anticon').style.color = '#0066b2';
                  e.currentTarget.querySelector('.service-desc').style.color = 'black';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span className="service-icon" style={{ color: '#0066b2' }}>{service.icon}</span>
                  <span className="service-title" style={{ marginLeft: '10px', fontSize: '18px', color: '#0066b2' }}>
                    {service.title}
                  </span>
                </div>
                <p className="service-desc" style={{ marginTop: '10px' }}>{service.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Media queries to adjust font size for smaller screens */}
      <style jsx>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 36px;
          }
          h3 {
            font-size: 18px;
          }
          .service-title {
            font-size: 16px !important;
          }
          .service-desc {
            font-size: 14px !important;
          }
        }
      `}</style>
    </>
  );
};

export default Service;
