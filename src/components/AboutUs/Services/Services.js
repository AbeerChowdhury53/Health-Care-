import React, { useEffect, useState } from 'react';
import Test from '../../ServiceCard/Test';
import ('./Services.css')

const Services = () => {

    const [services, setServices] = useState([])

    console.log(services);
    useEffect(() => {
        fetch('./test.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
        <h2>Our <span className='txt-clr'>Services </span></h2>
       
        <div className='servic-dv'>
           
            {
                services.map(service => <Test
                    key={service.id}
                    service={service}
                ></Test>)
            }
        </div>
        </div>
    );
};

export default Services;