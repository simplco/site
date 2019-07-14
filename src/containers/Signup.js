import React from 'react';
import './Signup.css';

function Signup() {
    return( 
            <div class="row">  
                <div class="column">
                    <div class="column1">
                     <p>Lets chat.</p>
                     <a>Hi@simplco.com</a>
                    </div>
                </div>
                <div class="column">
                    <div class="column2">
                       <div class="column2half">
                            <div class="column2a">
                                 <a>name: </a>
                                 <input type="text" id="fname" name="firstname"></input>
                            </div>
                             <div class="column2b">
                                 <a>email: </a>
                                 <input type="text" id="fname" name="firstname"></input>
                             </div>
                        </div>
                    </div> 
                    <div class="column2">

                    </div>  
                </div>
            </div> 
    


    )
}

export default Signup;