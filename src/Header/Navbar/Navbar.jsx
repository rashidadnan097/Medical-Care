import { NavLink } from "react-router-dom";
import Logo from "./Logo";


const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between items-center  py-6 px-5">

              <Logo></Logo>
                 
                <ul className="flex gap-5 text-xl">
                    <li>
                    <NavLink
                         to="/"
                         className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? "text-green-600 " : ""
                        }  >
                      Home
                      </NavLink>
                    </li>

                    <li>
                    <NavLink
                         to="/findDoctor"
                         className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? "text-green-600 " : ""
                        }  >
                      Find Doctor
                      </NavLink>
                    </li>

                    <li>
                    <NavLink
                         to="/departments"
                         className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? "text-green-600 " : ""
                        }  >
                      Departments
                      </NavLink>
                    </li>

                </ul>

            </nav>
        </div>
       
    );
};

export default Navbar;