import { useLoaderData } from "react-router-dom";
import Doctors from "../../Components/Doctors/Doctors";

const FindDoctor = () => {
    const doctors = useLoaderData()
    return (
        <div>
            <Doctors doctors={doctors}></Doctors>
        </div>
    );
};

export default FindDoctor;