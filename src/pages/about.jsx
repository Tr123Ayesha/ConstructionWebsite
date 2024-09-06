import RohanConstructiondddd from '../assets/RohanConstructiondddd.png';

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <div style={styles.content}>
        {/* Image Section */}
        <div style={styles.imageContainer}>
          <img src={RohanConstructiondddd} alt='RohanConstruction' style={styles.image} />
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
    flexDirection: 'column',
    marginLeft: '3%',
    marginRight: '3%',
  },
  imageContainer: {
    width: '100%',
    textAlign: 'center',
    marginBottom: '20px',
  },
  image: {
    width: '50%',
    height: 'auto',
  },
  textContainer: {
    width: '100%',
    paddingLeft: '10%',
    paddingRight: '10%',
  },
};

export default About;
