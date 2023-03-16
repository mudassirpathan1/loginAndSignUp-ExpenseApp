// import React from "react";
// import { Link } from "react-router-dom";

// function Home(props) {
//   return (
//     <div>
//       <div>
//         <h1>
//           <Link to="/login">Login</Link>
//         </h1>
//         <br />
//         <h1>
//           <Link to="/signup">Signup</Link>
//         </h1>
//       </div>

//       <br />
//       <br />
//       <br />

//       <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
//     </div>
//   );
// }

// export default Home;

import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.css";
function Home(props) {
  return (
    <div>
      <h1>Welcome to My App</h1><br/>
      <br/>
     <h2> <p>Please log in or sign up to continue</p></h2><br/>
      <br/>
      <br/>
    <h1>  <Link  to="/login">Log In </Link> </h1><br/><br/>
    <h1>  <Link to="/signup">Sign Up</Link></h1><br/><br/>
<h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
    </div>
  );
}

export default Home;
