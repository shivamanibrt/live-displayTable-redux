import React from 'react';
import { useSelector } from 'react-redux';

export const Display = () => {
    const { displayData } = useSelector((state) => state.nameList);
    return (
        <div>
            <div className='text-center mt-5 text-light'>
                <h1 className='text-warning'>Display table</h1>
                <div className='d-flex justify-content-center shadow-lg p-4 bg-body-tertiary rounded'>
                    <ul className='list-unstyled .bg-info-subtle'>
                        {displayData.map((item, index) => (
                            <h4 className='text-danger'>
                                <li>{index + 1} :{item}</li>
                            </h4>
                        ))}
                    </ul>
                </div>

            </div>
        </div >
    );
};
