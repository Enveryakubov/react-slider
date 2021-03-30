import React from 'react'
import { FaQuoteRight } from 'react-icons/fa';

const Review = ({review, position, style}) => {
    return (
        <div>
            <div className={`profile ${position}`} >
                <div style={{width:"200px", margin:"auto"}}>
                    <img style={style} src={review.image} alt="problems?"/>
                </div>
                <div>
                    <h3 style={{textTransform:"uppercase", color:" rgb(180, 104, 4)"}}>{review.name}</h3>
                    <p style={{textTransform:"capitalize", fontSize:"1.1rem", color:"black"}}>{review.title}</p>
                    <div>
                        <p>{review.quote}</p>
                    </div>
                    <FaQuoteRight  className="fa" style={style}/>
                </div>
            </div>
        </div>
    )
}

export default Review
