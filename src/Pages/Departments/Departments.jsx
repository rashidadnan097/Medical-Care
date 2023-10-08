import { useLoaderData } from "react-router-dom";
import Depart from "../../Components/Depart/Depart";


const Departments = () => {
    const departments = useLoaderData()
    return (
        <div>
            <Depart departments={departments}></Depart>
        </div>
    );
};

export default Departments;