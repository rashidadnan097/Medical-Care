import HealthsCard from "./HealthsCard";


const Healths = ({healths}) => {
    console.log(healths);
    return (
        <div >
            <h1 className="text-3xl font-bold text-center mt-5 underline text-blue-600">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-5 mb-16">
                {
                    healths?. map (health => <HealthsCard key={health.id} health={health}></HealthsCard>)
                }
            </div>
        </div>
    );
};

export default Healths;