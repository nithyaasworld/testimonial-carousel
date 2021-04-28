import { useState } from 'react';
import './TestimonialCard.css';
import './testimonialData.jsx';
import testimonialData from './testimonialData.jsx';
function TestimonialCard() {
    let [currID, setCurrID] = useState(1);

    const leftClick = () => {
        if (currID < 2) {
            setCurrID(5);
        } else {
            setCurrID(currID - 1);
        }
    }
    const rightClick = () => {
        if (currID > 4) {
            setCurrID(1);
        } else {
            setCurrID(currID + 1);
        }
    }
    
    return (
        <div className="testimonial-card">
            <div className="author-info">
                <img src={testimonialData[currID-1]['picture']} alt="Avatar" />
                <h2>{testimonialData[currID-1]['name']}</h2>
                <p>{testimonialData[currID - 1]['occupation']}</p>
            </div>
            <p className="testimonial-text">{testimonialData[currID - 1]['testimonialText']}</p>
            <div className="arrows">
                <i class="fas fa-arrow-left" onClick={leftClick}></i>
                <i class="fas fa-arrow-right" onClick={rightClick}></i>
            </div>
        </div>
    )
}
export default TestimonialCard;