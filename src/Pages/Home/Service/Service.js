import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, amount, description } = service;

    const navigate = useNavigate();
    const navigateToServiceDetail = id => {

        navigate(`/service/ ${id}. ${name}`)


    }

    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>{amount}</p>
            <p><small>{description}</small> </p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-secondary btn-text'>Book Now</button>
        </div>
    );
};

export default Service;

