import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import('./TestDetails.css');

const Testdetails = (props) => {
    

    const {id ,pic, fee, name, description, }=props.filteredPerson
    console.log(props.filteredPerson)
    return (
        <div className='detail-div'>
            
   <h2> <span id='price-detl'> Test Name: </span> {name}</h2>
   <img className='test-img' src={pic} alt=""></img>
   <h2><span id='price-detl'> Price: </span>{fee} Tk</h2>
   <p>{description}</p>

            
        </div>
    );
};

export default Testdetails;