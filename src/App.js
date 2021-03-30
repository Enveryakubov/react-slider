import Review from "./components/Review"
import {useState, useEffect} from "react"
import data from "./data"
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';


function App() {
  const [reviews, setReviews] = useState([])
  const [i, setI] = useState(0)

  const [b, setB] = useState(true)
  // "rotate(0deg)": "rotate(360deg)"
  // "scale(1)": "scale(1.07)"
  let effect = b ? "rotate(0deg)": "rotateY(360deg)"
  let style = {transform:effect, transition:"2s ease-in-out"}
 
  const right = () => setI((i + 1) % reviews.length)
 
  const left = () => setI(Math.abs(reviews.length + i -1) % reviews.length)

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('This will run every second!');
      setB(prev => !prev)
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setReviews(data)
  }, [])

  if (reviews.length === 0) {
    return (<h1>Loading...</h1>)
  }
  return   (
    <div>
      <h1><span style={{color:"rgb(180, 104, 4)"}}>/</span> Reviews</h1>
      <div className="container">
          {reviews.map((review, index) => {

            let position = "next";

            if (i === index) {
              position="current";
            };
            if (index-1 === i||  (index === 0 && i === reviews.length - 1)) {
              position = "prev";
            };
          return <Review key={review.id} review={review} position={position} style={style}/>})}
      </div>
      <div className="buttons">
          <button onClick={left}><FiChevronLeft/></button>
          <button onClick={right}><FiChevronRight/></button>
      </div>
    </div>
  );
}

export default App;
