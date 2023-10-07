

const HealthCard = ({health}) => {

    const {Picture, title, Hints, Price, Description} = health ;

    return (
        <div className="h-[130vh] ml-28">
          <div>
            <img className="h-[500px] w-[1000px]" src={Picture} alt="" />
          </div>
          <div>
             <h2 className="text-2xl font-bold mt-4 mb-3 underline">{title}</h2>
             <p className="mr-20">{Description}</p>
          </div>
        </div>
    );
};

export default HealthCard;