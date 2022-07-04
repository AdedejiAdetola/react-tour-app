
import React, { useState, useEffect} from 'react';
import ToursList from './ToursList';

const url = 'https://course-api.com/react-tours-project';

const Tours = () => {
    const [tours,setTours] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    

    const fetchTours = async () => {
        const request = await fetch (url);
        const resp = await request.json();
        setTours(resp);
        console.log(resp);
        setIsLoading(false);
        
    };

    useEffect(() =>{
        fetchTours();
    },[]);

    const handleDelete = (id) => {
        const newList = tours.filter(tour => tour.id !== id);
        return setTours(newList);
    }
    const refresh = () => {
        fetchTours();
    }
    const load1 = isLoading && <h1>Loading...</h1>;
    const load2 = tours.length === 0 ? <div><h1>There are no more tours!</h1> <button onClick={refresh}>Refresh</button></div> : console.log(tours.length);
    
    return ( 

        <div>
            {load1 === false ? load2 : load1}
            <ToursList tours={tours} onDelete={handleDelete} />
            
        </div>
     );
}
 
export default Tours;