import DoctorsCard from "./DoctorsCard";


const Doctors = ({doctors}) => {
    console.log(doctors);
    return (
        <div>
            <h1 className="text-center text-3xl font-bold text-blue-800 underline">Our Special Doctors</h1>
            <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-5 mb-16">
                {
                   doctors ?. map (doctor => <DoctorsCard key={doctor.id} doctor={doctor}></DoctorsCard>)
                }
            </div>
            </div>
        </div>
    );
};

export default Doctors;