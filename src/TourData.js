import React, { useState} from 'react';

const TourData = (props) => {
    const sliceData = props.tourInfo.slice(0,200);
    const [data, setData] = useState(sliceData);
    const [showMore, setShowMore] = useState('Show More')

    const handleChange = () => {
        data === sliceData ? setData(props.tourInfo) : setData(sliceData)
        showMore === 'Show More'? setShowMore('Show Less'): setShowMore('Show More');
    }

    
    return ( 
        
        <div>
            <span>{data} ... </span>
            <button onClick={handleChange}>{showMore}</button>
            
        </div>
     );
}
 
export default TourData;