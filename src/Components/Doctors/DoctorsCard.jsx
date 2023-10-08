

const DoctorsCard = ({doctor}) => {
   const {Img, Name, Details } = doctor ;
    return (
       
        <div>
           
            <div className="card w-80 h-[350px] ml-7 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={Img} alt="Shoes" className="rounded-full w-[100px] h-[100px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-semibold">{Name}</h2>
    <p>{Details}</p>
   
  </div>
</div>
        </div>
    );
};

export default DoctorsCard;