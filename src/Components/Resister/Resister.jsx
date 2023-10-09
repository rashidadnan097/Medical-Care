import { useContext, useState } from "react";
import { AuthContext } from "../../Hook/AuthProvider";
import { Link } from "react-router-dom";


const Resister = () => {
    const {signUp, googleSignUp} =  useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleGoogle = () => {
        googleSignUp ()
        .then(result => {
            console.log(result.user)
        });   
    };

    const handleRegister = () => {
       if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/.test(password)) {
        setError("Minimum 6 characters, at least one capital and one special letter")
       }else{
        setError("")
        if (email) {
            signUp(email,password)
            .then(result => {
                console.log(result.user)
            })
        }
    }
    }


    return (
        <div>
              <div className="hero  ">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Resister</h1>
      
    </div>
    <div className="card flex-shrink-0 w-[500px] shadow-2xl bg-base-100">
      <form  className="card-body">
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
          <button onClick={handleRegister} className="btn btn-primary">Resister</button>
          
        </div>
        <p className="mt-2 mb-2 text-center">Already have account? Please  <Link to="/login" ><button className="text-purple-800 underline text-lg">Login</button></Link></p>
        <div className="text-center"><button onClick={handleGoogle} className="btn btn-active btn-ghost w-48 font-semibold">Sign up with Google</button></div>
      </form>
      <p>{error}</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Resister;