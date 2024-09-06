import React, { useState } from 'react';
import { Card, Row, Col } from 'antd';
import emergency1 from '../assets/image/emergency1.jpg';
import emergency2 from '../assets/image/emergency2.jpg';
import emergency3 from '../assets/image/emergency3.jpg';
import emergency4 from '../assets/image/emergency4.jpg';
import tilework1 from '../assets/image/tilework1.jpg';
import tilework2 from '../assets/image/tilework2.jpg';
import tilework3 from '../assets/image/tilework3.jpg';
import interior1 from '../assets/image/interior1.jpg';
import interior2 from '../assets/image/interior2.jpg';
import interior3 from '../assets/image/interior3.jpg';
import interior4 from '../assets/image/interior4.jpg';
import interior5 from '../assets/image/interior5.jpg';
import building1 from '../assets/image/building1.jpg';
import building2 from '../assets/image/building2.jpg';
import building3 from '../assets/image/building3.jpg';
import building4 from '../assets/image/building4.jpg';
import building5 from '../assets/image/building5.jpg';
import building6 from '../assets/image/building6.jpg';
import building7 from '../assets/image/building7.jpg';
import building9 from '../assets/image/building9.jpg';
import outdoor1 from '../assets/image/outdoor1.jpg';
import outdoor2 from '../assets/image/outdoor2.jpg';
import outdoor3 from '../assets/image/outdoor3.jpg';

const { Meta } = Card;

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const defaultCategories = [
    { category: 'Interior', image: interior1 },
    { category: 'Interior', image: interior2 },
    { category: 'Interior', image: interior3 },
    { category: 'Interior', image: interior4 },
    { category: 'Interior', image: interior5 },
    { category: 'Emergency Services', image: emergency1 },
    { category: 'Emergency Services', image: emergency2 },
    { category: 'Emergency Services', image: emergency3 },
    { category: 'Emergency Services', image: emergency4 },
    { category: 'Tile Work', image: tilework1 },
    { category: 'Tile Work', image: tilework2 },
    { category: 'Tile Work', image: tilework3 },
    { category: 'Building Construction', image: building1 },
    { category: 'Building Construction', image: building2 },
    { category: 'Building Construction', image: building3 },
    { category: 'Building Construction', image: building4 },
    { category: 'Building Construction', image: building5 },
    { category: 'Building Construction', image: building6 },
    { category: 'Building Construction', image: building7 },
    { category: 'Building Construction', image: building9 },
    { category: 'Outdoor', image: outdoor2 },
    { category: 'Outdoor', image: outdoor1 },
    { category: 'Outdoor', image: outdoor3 },
  ];

  const categories = ['All', 'Interior', 'Emergency Services', 'Tile Work', 'Building Construction', 'Outdoor'];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All'
    ? defaultCategories
    : defaultCategories.filter((project) => project.category === selectedCategory);

  return (
    <div style={{ marginTop: '20px' }}>
      <h1 style={{ color: '#0066b2', fontSize: '40px', fontWeight: '500', marginBottom: '15px', textAlign: 'center' }}>
        Our Projects
      </h1>
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        {categories.map((category, index) => (
          <span
            key={index}
            onClick={() => setSelectedCategory(category)}
            style={{
              marginRight: '10px',
              padding: '5px 10px',
              cursor: 'pointer',
              marginBottom: '15px',
              borderBottom: selectedCategory === category ? '3px solid #0066b2' : 'none',
              color: selectedCategory === category ? '#0066b2' : 'black',
              fontWeight: selectedCategory === category ? 'bold' : 'normal',
            }}
          >
            {category}
          </span>
        ))}
      </div>

      <div style={{ margin: '0 auto', padding: '0 15px', maxWidth: '1200px' }}>
        <Row gutter={[16, 16]}>
          {filteredProjects.map((project, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6} xl={6}>
              <Card
                hoverable
                style={{ width: '100%', height: '100%' }}
                cover={<img alt={project.name} src={project.image} style={{ height: '150px', objectFit: 'cover', width: '100%' }} />}
              >
                <Meta title={project.name} description={project.category} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Project;
