import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import HealthCard from "./HealthCard";




const Health = () => {
    
   

    const [health, setHealth] = useState({})

    const {id} = useParams()


    const healths = useLoaderData()
   

    useEffect(() => {
        
        const findHealth = healths ?. find ((health) => health.id === id )
    
        setHealth(findHealth)
         
    }, [id, healths])

    console.log(health);
    return (
        <div>
        <HealthCard health={health}></HealthCard>
        </div>
    );
};

export default Health;