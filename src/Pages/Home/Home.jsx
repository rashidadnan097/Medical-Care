
import { useLoaderData } from "react-router-dom";
import Healths from "../../Components/Healths/Healths";
import Banner from "../../Header/Banner/Banner";





const Home = () => {
   
    const healths = useLoaderData()
 
    return (
        <div>
              <Banner></Banner> 
              <Healths healths={healths}></Healths>
             
        </div>
    );
};

export default Home;