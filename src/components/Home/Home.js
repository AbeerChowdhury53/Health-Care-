import React, { useEffect, useState } from 'react';
import Carosal from '../Carosal/Carosal';
import Footer from '../Footer/Footer';
import Hader from '../Hader/Hader';
import Test from '../ServiceCard/Test';
import('./Home.css')



const Home = () => {

    const [services, setServices] = useState([])

    console.log(services);
    useEffect(() => {
        fetch('./test.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>

            <Carosal></Carosal>
            <h2> Services</h2>
            <div className='main-div'>

                <div>
                    <img className='main-div-img' src="https://images.unsplash.com/photo-1486825586573-7131f7991bdd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" alt="" />
                    <div className='text-div'>
                        <h2>Global Standard for Quality and Performance</h2>
                        <p>
                            At the College of American Pathologists (CAP), we give you the confidence of knowing your laboratory is operating consistently at the highest standards of quality and patient care. With 65+ years of exclusive focus on laboratory medicine and pathology serving more than 20,000 participating laboratories in over 100 countries, we bring a global perspective that gives your laboratory team the courage to meet any challenge.

                            CAP programs, services, and tools are designed to deliver diagnostic and operational excellence to your laboratory and include:

                            A full range of the most current programs—from routine to specialty—to support your laboratory’s continuous quality improvement efforts.
                            An unparalleled level of expertise and guidance to help your laboratory keep pace with the latest advances and needs.
                            A singular dedication to laboratory medicine and pathology, providing globally relevant solutions that can help your laboratory succeed.</p>
                    </div>
                </div>
                <div>
                    <div>
                        {/* <h2>Services</h2> */}
                    </div>
                    <div className='test-card'>
                        {
                            services.map(service => <Test
                                key={service.id}
                                service={service}
                            ></Test>)
                        }

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;