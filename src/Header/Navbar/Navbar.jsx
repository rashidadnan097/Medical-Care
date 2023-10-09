import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useContext } from "react";
import { AuthContext } from "../../Hook/AuthProvider";


const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);

  console.log(user);

  const handleLogOut = () => {
    logOut()
    .then()
  }

    return (
        <div>
            <nav className="flex justify-between items-center   ">

              <Logo></Logo>
                 
                <ul className="flex gap-8 text-2xl">
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
                   {user &&  <button onClick={handleLogOut} className="btn btn-active btn-ghost text-xl text-semibold">Logout</button>}

                </ul>

            </nav>
        </div>
       
    );
};

export default Navbar;