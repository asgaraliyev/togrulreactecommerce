import React from 'react';
import Search from '../Layouts/Header/Search';
import '../Layouts/Header/head.css'
import Head from '../Layouts/Header/Head';
import Carousel from 'react-bootstrap/Carousel';
import IndividualIntervalsExample from '../Components/Carousel';
import './home.css'

function Home(){
    return(
        <>
            <div className="main_section">
                <Head/>
                <div className="container">
                    <div className="logo">
                        <a href="/reminant.az">Reminant</a>
                    </div>
                </div>
                <div className="container triple_header_element">
                    
                    <Search/>
                </div>
                <br />
                
            </div>
            
            <div className="container second_section">
                <h2 className='text-center'>Man & Woman Fashion</h2>
                <IndividualIntervalsExample/>
            </div>
        </>
        
    )
}

export default Home