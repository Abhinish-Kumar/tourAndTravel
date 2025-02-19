import './Services.css'; // Link to the CSS file

function Services() {
  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <p className="services-description">
        We offer a wide range of services to make your travel experience seamless and unforgettable. From custom itineraries to flight booking, we’ve got it all covered!
      </p>

      <div className="services-grid">
        <div className="service-card">
          <img src="https://3.imimg.com/data3/SD/DR/MY-19590549/customized-tour-250x250.jpeg" alt="Tour Packages" className="service-img"/>
          <h3 className="service-title">Customized Tour Packages</h3>
          <p className="service-text">
            Tailored specifically to your interests, whether you're seeking relaxation, adventure, or cultural immersion.
          </p>
        </div>

        <div className="service-card">
          <img src="https://cdn.zeebiz.com/sites/default/files/2023/03/08/230833-flight-hotel-booking-1576514136123.jpg" alt="Flight Booking" className="service-img"/>
          <h3 className="service-title">Flight & Accommodation Booking</h3>
          <p className="service-text">
            We help you book flights and accommodations that suit your preferences and budget, ensuring a stress-free experience.
          </p>
        </div>

        <div className="service-card">
          <img src="https://th.bing.com/th/id/OIP.9qjFOV7kp4ZZqI_MvDqNHQHaDa?rs=1&pid=ImgDetMain" alt="Visa Assistance" className="service-img"/>
          <h3 className="service-title">Visa Assistance</h3>
          <p className="service-text">
            We assist you with visa applications and the necessary paperwork to ensure smooth entry into your destination country.
          </p>
        </div>

        <div className="service-card">
          <img src="https://th.bing.com/th/id/OIP.uAWuvGZB5pfjAiRCrZdvfgHaFj?rs=1&pid=ImgDetMain" alt="Travel Insurance" className="service-img"/>
          <h3 className="service-title">Travel Insurance</h3>
          <p className="service-text">
            Offering comprehensive insurance plans that cover emergencies, cancellations, and more for peace of mind during your travels.
          </p>
        </div>

        <div className="service-card">
          <img src="https://th.bing.com/th/id/R.afbd55c17cadad3bc59ee33d5f05cc41?rik=fJ0Gdgs19pvcng&riu=http%3a%2f%2ffreemontrealtours.com%2fwp-content%2fuploads%2f2020%2f06%2ffreemontrealtours-1024x681.jpg&ehk=cuIcHESzjwIAtQaGqo4FP%2bE%2bIixL%2bQ5QbKLsw1jEjgA%3d&risl=&pid=ImgRaw&r=0" alt="Group Tours" className="service-img"/>
          <h3 className="service-title">Group & Private Tours</h3>
          <p className="service-text">
            Whether you’re traveling solo, with family, or with a group, we offer guided tours for all types of travelers.
          </p>
        </div>

        <div className="service-card">
          <img src="https://ayruu.com/wp-content/uploads/2022/06/Sans-titre-6.jpg" alt="Corporate Travel" className="service-img"/>
          <h3 className="service-title">Corporate Travel</h3>
          <p className="service-text">
            Customized travel solutions for corporate groups, meetings, conferences, and special events.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
