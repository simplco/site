import React from 'react';
import './Signup.css';

function Signup() {
    return( 
     <div class="row">
       <div class="column">
          <div class="column1">
              <a>Lets chat</a>
              <p>420BlazeIt@simpl.co</p>
          </div>
       </div>
       <div class="column">
          <div class="column2">
              <div class="column2a">
                  <a>name: </a>
                  <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
              </div>
              <div class="column2b">
                  <a>email: </a>
                  <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
              </div>
            </div>
        </div> 
     </div>


    )
}

export default Signup;