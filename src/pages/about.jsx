import RohanConstructiondddd from '../assets/RohanConstructiondddd.png';

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <div style={styles.content}>
        {/* Image Section */}
        <div style={styles.imageContainer}>
          <img src={RohanConstructiondddd} alt='Rohan Construction' style={styles.image} />
        </div>

        {/* Text Section */}
        <div style={styles.textContainer}>
          <p>
            At <b>Rohan Construction Pvt Ltd</b>, we specialize in construction and smart capital investment
            solutions. We believe in trust, integrity, and collaboration, working closely with our customers, dealers,
            vendors, and associates.
          </p>
          <p>
            With over a decade of experience since 2014, our company has successfully delivered residential and
            commercial projects, including hospitals, interior buildings, emergency services, and interior design in
            various locations. Each project reflects our commitment to excellence.
          </p>
          <p>
            Our CEO, <b>Ghulam Muhammad</b>, has led the company with dedication since 2014. Registered with both the FBR
            and PEC, Rohan Builders adheres to the highest industry standards. With contributions from the leadership
            team, we continue to operate with sincerity and transparency, making us a trusted name in the construction
            industry.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh', // Ensures the height adapts to the screen size
    marginLeft: '5%',
    fontFamily: 'Poppins',
    padding: '20px',
    overflowY: 'auto', // Allows scrolling if the screen is shorter
  },
  heading: {
    color: '#0066b2',
    fontSize: '40px',
    fontWeight: '500',
    marginTop: '15px',
    textAlign: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'row', // Horizontal layout for larger screens
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '3%',
    marginRight: '3%',
    flexWrap: 'wrap', // Allows wrapping on smaller screens
  },
  imageContainer: {
    flex: '1 1 45%', // Flex-grow, flex-shrink, and flex-basis
    textAlign: 'center',
    marginBottom: '5px',
  },
  image: {
    width: '100%',
    height: 'auto',
    maxWidth: '400px', // Maximum width of the image
  },
  textContainer: {
    flex: '1 1 45%',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  '@media (max-width: 768px)': { // Media query for smaller screens
    content: {
      flexDirection: 'column', // Stack columns on smaller screens
      alignItems: 'center',
    },
    imageContainer: {
      marginBottom: '10px',
    },
    textContainer: {
      paddingLeft: '0',
      paddingRight: '0',
    },
  },
};

export default About;
