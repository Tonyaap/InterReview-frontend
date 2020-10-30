import React from "react";
import Logo from "../logo/logo.png"

export default function HomePage() {
  return (
    <div>
     <br></br>
       <br></br>
         <br></br>
           <br></br>
       
      <img src={Logo} alt="logo"/>
       <br></br>
          <br></br>
             <br></br>
                
      <div className="About
      "> InterReview is a tool to self assess your job interviews.
            This App allows a user to keep track of the companies you talked to.
            By scoring yourself each interview you will see improvement over time. </div>
  <br></br>
           <br></br>
           
           <div className="pleaselogin">
           <p> To get started please <a href="/login">Login</a> or  <a href="/signup">Sign-Up</a> </p>
           </div>
    </div>
        

  );
}
