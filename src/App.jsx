
import './App.css'
import MainContent from './Components/Home/MainContent/MainContent'
import Header from './Components/Header/Header'
import Footer from './Components/Home/Header/Footer'
function App() {


  return (
    <>
   <div>
  <Header/>
    <MainContent/>
     <Footer/>
      {/* <div className="tour-list">
        {tour.map((tour) => (
          <div key={tour.id} className="tour-card">
            <h2>{tour.name}</h2>
            <p><strong>Location:</strong> {tour.location}</p>
            <p><strong>Price:</strong> ${tour.price}</p>
            <p><strong>Rating:</strong> {tour.rating} / 5</p>
            <p><strong>Duration:</strong> {tour.duration}</p>
            <p><strong>Category:</strong> {tour.category}</p>
            <p>{tour.description}</p>
            <h3>Itinerary:</h3>
            <ul>
              {tour.itinerary.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h3>Features:</h3>
            <ul>
              {tour.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}
    </div>
    </>
  )
}

export default App
