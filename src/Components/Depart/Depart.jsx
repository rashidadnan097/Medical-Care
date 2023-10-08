import DepartValue from "./DepartValue";



const Depart = ({departments}) => {
    console.log(departments);
    return (
        <div>
            <h1 className="text-3xl mt-2 text-center text-blue-800 font-bold underline"> Departments</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6  mb-16">
            {
                departments ?. map (department => <DepartValue key={department.id} department={department}></DepartValue>)
            }
           </div>
        </div>
    );
};

export default Depart;