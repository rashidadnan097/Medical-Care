import { NavLink } from "react-router-dom";


const Logo = () => {
    return (
        <div className="flex gap-3">
           <div>
           <img className="w-28" src="https://marketplace.canva.com/EAFL_Fx2oQE/1/0/1600w/canva-medical-care-logo-GG10jCiW3uA.jpg"/>
           </div>

            <div className="mt-12">
                <NavLink  to="/login" className="mt-12 text-2xl font-bold">Login</NavLink>
                <NavLink  to="/login" className="mt-12 text-2xl font-bold">/Resister</NavLink>
            </div>
        </div>
    );
};

export default Logo;