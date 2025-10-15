import React, { use } from 'react';
import PricingCard from '../pricingCard/PricingCard';
import DaisyPricing from '../DaisyPrice/DaisyPricing';

const PricingOption = ({pricingPromise}) => {
    const pricingData=use(pricingPromise)
    
    return (
       <div className=''>
        <h1 className="text-xl">Get some pricing info.</h1>
         <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mt-3'>
            
            {/* {
                pricingData.map(pricing=> <PricingCard key={pricing.id} pricing={pricing} ></PricingCard>)
            } */}

            {
                pricingData.map(pricing=> <DaisyPricing pricing={pricing}> </DaisyPricing>)
            }
        </div>
       </div>
    );
};

export default PricingOption;