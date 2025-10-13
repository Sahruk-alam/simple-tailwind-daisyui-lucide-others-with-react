import React from 'react';

const PricingCard = ({pricing}) => {
    const {name,price,description,features}=pricing;
    return (
        
        <div className='border-1 rounded-xl bg-amber-400 text-black p-2'>
            <div>
                <h3 className='text-3xl'>{name}</h3>
                <h4 className='text-2xl'>{price}</h4>
                <div className='bg-amber-100 p-2 rounded-xl'>
                    <h3>{description}</h3>
                    {
                        features.map((featur,index)=>
                            <p key={index} className='font-bold'>
                                {featur}
                            </p>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default PricingCard;