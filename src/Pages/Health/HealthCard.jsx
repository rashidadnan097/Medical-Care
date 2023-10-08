

const HealthCard = ({health}) => {

    const {Picture, title, Hints, Price, Description} = health ;

    return (
        <div className="h-[vh] ml-20 mr-6">
         <div className="card mr-10 h-[80vh] bg-base-100 shadow-xl image-full">
  <figure><img className="w-[1200px] h-[500px]" src={Picture} alt="Shoes" /></figure>
  <div className="card-body mt-[200px]">
    <h2 className="card-title text-center justify-center text-3xl font-bold">{title}</h2>
    <p className=" text-center mt-5">{Description}</p>
    
  </div>
</div>
        </div>
    );
};

export default HealthCard;