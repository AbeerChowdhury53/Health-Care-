import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Testdetails from '../../Testdetails/Testdetails';


const SingleTest = () => {
    const { ids } = useParams();
    const idvlaue = { ids }
    

     const [test, setTest] = useState([]);

     useEffect(() => {
        fetch('./testcp.json')
            .then(res => res.json())
            .then(data => setTest(data))
    }, []);
    // console.log(test);
    // console.log(idvlaue.ids);


    return (
        <div>
           
            {test.filter(test => test.id == idvlaue.ids ).map(filteredPerson => (
            <Testdetails
             filteredPerson={filteredPerson} ></Testdetails>      
             ))
            }
            


        </div>
    );
}


export default SingleTest;