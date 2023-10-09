import { useContext, useState } from "react";
import { AuthContext } from "../../Hook/AuthProvider";
import { Link } from "react-router-dom";


const Login = () => {
    const {googleSignIn , signIn} = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleGoogle = () => {
        googleSignIn ()
        .then(result => {
            console.log(result.user)
        });   
    };

    const handleLogin = () =>{
        if (email,password) {
          signIn(email,password)
          .then(result => {
            console.log(result.user);
          })
          .catch(error => {
            setError(error);
          })
        }
    }
    
    return (
        <div>
           <div className="hero  ">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-[500px] shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="password" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <button onClick={handleLogin} className="btn btn-primary">Login</button>
          
        </div>
        <p className="text-center mb-2 mt-2">New auth here? Please  <Link to="/resister" ><button className="text-purple-800 underline text-lg">Resister</button></Link></p>
        <div className="text-center"><button onClick={handleGoogle} className="btn btn-active btn-ghost w-48 font-semibold">Sign in with Google</button></div>
      </form>
      <p>{error}</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;