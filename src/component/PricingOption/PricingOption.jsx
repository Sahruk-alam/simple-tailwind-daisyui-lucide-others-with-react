import React, { use } from 'react';
import PricingCard from '../pricingCard/PricingCard';

const PricingOption = ({pricingPromise}) => {
    const pricingData=use(pricingPromise)
    console.log(pricingData)
    return (
       <div>
        <h1 className="text-5xl">Get some pricing info.</h1>
         <div className='grid grid-cols-3 gap-3'>
            
            {
                pricingData.map(pricing=> <PricingCard key={pricing.id} pricing={pricing} ></PricingCard>)
            }
        </div>
       </div>
    );
};

export default PricingOption;