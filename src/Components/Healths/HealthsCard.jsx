import { Link } from "react-router-dom";


const HealthsCard = ({health}) => {
    const {id, Picture, title, Hints, Price} = health ;
    return (
        <div>
        <Link  to={`/healths/${id}`}> 
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className="w-[345px] h-[150px]" src={Picture}/></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className="text-xl font-bold">Price: ${Price}</p>
    <p>{Hints}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary w-full">View Details</button>
    </div>
  </div>
</div>
        </Link>
        </div>
    );
};

export default HealthsCard;