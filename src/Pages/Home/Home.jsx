
import { useLoaderData } from "react-router-dom";
import Healths from "../../Components/Healths/Healths";
import Banner from "../../Header/Banner/Banner";
import Faq from "../../Faq/Faq";
import Footer from "../../Footer/Footer";
import About from "../../About/About";





const Home = () => {
   
    const healths = useLoaderData()
 
    return (
        <div>
              <Banner></Banner> 
              <Healths healths={healths}></Healths>
              <About></About>
              <Faq></Faq>
              <Footer></Footer>

             
        </div>
    );
};

export default Home;