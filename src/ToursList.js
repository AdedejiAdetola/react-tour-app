import React from 'react';
import TourData from './TourData';
const ToursList = (props) => {
    const tours = props.tours;
    
    
    //take each element in tourId and return to
    
    return (
        
        <ul>
            {tours.map((tour) => 
                (
                    <li key={tour.id}>
                        <img src={tour.image} alt="tourImage"/>
                        <div>
                            <h4>{tour.name}</h4>
                            <h4>{tour.price}</h4>
                            <TourData tourInfo={tour.info} tourId={tour.id}/>
                        </div>
                        <button onClick={() => props.onDelete(tour.id)}>Not Interested</button>
                    </li>
                    
            ))}
        </ul>
    )
}
 
export default ToursList;