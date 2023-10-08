

const DepartValue = ({department}) => {
    const {Photo, More, Token} = department ;
    return (
        <div>
            <div className="border-r-2 border-b-2 text-center w-[355px] h-[320px] mb-5 mt-10">
                <img className="w-[200px] h-[120px] ml-[74px] mt-5" src={Photo} alt="" />
                <h1 className="mt-3 text-2xl font-bold text-purple-700 underline">{Token}</h1>
                <p className="mt-3 text-gray-500">{More}</p>
            </div>
        </div>
    );
};

export default DepartValue;