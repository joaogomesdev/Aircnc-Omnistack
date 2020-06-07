import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api.js';

import './styles.css'

export default function Profile() {
    const [spots, setSpots] = useState([]);
    useEffect(()=>{
        async function laodSpots() {
            const user_id = localStorage.getItem('user');
           const response = await api.get('/profile', {
               headers: { user_id }
           } );
        setSpots(response.data);
        }
        laodSpots();
    },[])


    return (
        <>
            <ul className="spot-list">
                {
                    spots.map(spot => (
                          <li key={spot._id}>
                                <header style={{
                            backgroundImage: `url(${spot.thumbnail_url})`
                               }}/>
                              <strong>{spot.company}</strong>
                            <span>{spot.price ? `${spot.price}€ por dia` : 'Gratuito'}</span>
                          </li>
                   ))
                }
            </ul>

            <Link to="/new">
                <button className="btn">Registar novo spot</button>
            </Link>
        </>
    )
    
}