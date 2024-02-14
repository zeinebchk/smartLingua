import React from 'react'
import { useState } from 'react';
import PersonalInformation from './PersonalInformation';
import ProjectInformation from './ProjectInformation';
import SecurityInformation from './SecurityInformation';

export default function Signup() {
    const[page,setPage]=useState(0);
    const FormTitle=["information personnels","information du projet","securite"];
    const PageDisplay=()=>{
        if(page===0){
            return <PersonalInformation />
        }
        else if(page===1){
            return <ProjectInformation />
        }
        else{
            return <SecurityInformation />
        }

    }
  return (
    <>
              <div id="grad1" >
                  <form id="msform">
                 <fieldset style={{marginTop:"7%"}}>
                 <h2 ><strong>Créer votre compte </strong></h2>
                 <div className="progressbar" style={{display:'flex'}}>
                     <div style={{width:page===0 ? "33.3%":page==1 ? "66.6%":"100%"}}></div> 
                  </div>
                  {PageDisplay()}
                  </fieldset>
                <div style={{display:"flex",justifyContent:"center"}}>
                <input type={page===0?'hidden':'button'} onClick={()=>setPage(page-1)}
                name="previous" className="previous action-button-previous" value="Previous"/>
                  <input type="button" name="next" className="next action-button" value={page===FormTitle.length-1 ? "submit":"next"}
                   onClick={()=>{
                    if(page===FormTitle.length-1 ){
                        alert("form submitted")
                        // console.log(formData)
                    }
                        else
                        { setPage(page+1)}}
                    }
                    />
                </div>
                 
                  
                  </form>
                </div>
  </>
  );
}
