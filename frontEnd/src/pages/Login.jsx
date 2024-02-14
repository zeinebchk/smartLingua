import React from 'react'

export default function Login() {
  return (
    <div>
       <div id="grad1" >
                  <form id="msform">
                 <fieldset style={{marginTop:"7%"}}>
                 <div className="form-card">
                 <h2 style={{paddingBottom:"30px"}}>Connectez-vous à votre compte </h2>
                        <input type="email" name="email" placeholder="Email"/>
                        <input type="password" name="Password" placeholder="mot de passe"/>
                        <input type="button" style={{margin:"7px"}} name="next" className="next action-button" value="se connecter"
                   onClick={()=>{
                   }
                    }/>
                      </div>
                     
                  </fieldset>
                 
                    
                  </form>
                </div>
    </div>
  )
}
