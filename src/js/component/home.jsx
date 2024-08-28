import React, { useState, useEffect } from 'react';

const SimpleCounter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const four = Math.floor(counter / 1000) % 10;
    const three = Math.floor(counter / 100) % 10;
    const two = Math.floor(counter / 10) % 10;
    const one = Math.floor(counter % 10);

    return (
        <div className="container d-flex justify-content-around align-items-center">
            <div className='col-md-4 d-flex justify-content-center'>
            <h6>Timer</h6>
                <i className="far fa-clock fa-2x"></i>
            </div>
            <div className='col-md-2 d-flex justify-content-center'>
                <div>{four}</div>
            </div>
            <div className='col-md-2 d-flex justify-content-center'>
                <div>{three}</div>
            </div>
            <div className='col-md-2 d-flex justify-content-center'>
                <div>{two}</div>
            </div>
            <div className='col-md-2 d-flex justify-content-center'>
                <div>{one}</div>
            </div>
        </div>


    );
}

export default SimpleCounter;
