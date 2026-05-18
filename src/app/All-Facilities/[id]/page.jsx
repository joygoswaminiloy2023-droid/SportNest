import FacilityDetailsCard from '@/app/Components/FacilityDetailsCard/FacilityDetailsCard';
import React from 'react';

const Details = async({params}) => {
    const {id}=await params;

    const res=await fetch(`http://localhost:5000/facility/${id}`)
    const data=await res.json()
    console.log(data)
    return (
        <div>
            <FacilityDetailsCard key={data._id} data={data} ></FacilityDetailsCard>
        </div>
    );
};

export default Details;