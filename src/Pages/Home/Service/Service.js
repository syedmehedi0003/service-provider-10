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
        <div className='service p-1 mb-3'>
            <img className='w-100' src={img} alt="" />
            <h2 className='py-2'>{name}</h2>
            <p>{amount}</p>
            <p><small className='p-1'>{description}</small> </p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-secondary btn-text'>Book Now</button>
        </div>
    );
};

export default Service;

