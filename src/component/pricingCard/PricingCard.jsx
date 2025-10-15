import { CircleCheck } from 'lucide-react';
import React from 'react';

const PricingCard = ({pricing}) => {
    const {name,price,description,features}=pricing;
    return (
        
        <div className='border-1 rounded-xl flex flex-col bg-amber-400 text-black p-2'>
           
                <h3 className='text-4xl'>{name}</h3>
                <h4 className='text-2xl'>{price}</h4>
                <div className='bg-amber-100 p-2 rounded-xl flex-1'>
                    <h3>{description}</h3>
                    {
                    features.map((featur,index)=> 
                    <p key={index} className='font-bold flex gap-2 mt-3'>
                     <CircleCheck></CircleCheck>  {featur}
                     </p>
                        )
                       
                    }
                    
                </div>
                <button class="btn w-full mt-3">Subscribe</button>
    
        </div>
    );
};

export default PricingCard;