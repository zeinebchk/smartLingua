import React from 'react'
import { useState } from 'react';
import PersonalInformation from './PersonalInformation';
import TypeUser from './TypeUser';
import SecurityInformation from './SecurityInformation';


export default function Signup() {
    const[page,setPage]=useState(0);
    const [errors,setErrors]=useState({});
    const FormTitle=["information personnels","information du projet","securite"];
    const[formData,setFormData]=useState({
        nom:"",
        prenom:"",
        email:"",
        numTel:"",
        genre:"par",
        nomProjet:"",
        categorie:"salleFete",
        gouvernerat:"",
        ville:"",
        adresseExact:"",
        emplacement:"",
        password:"" ,
        confirmPassword:"",
        numTelPro:""
    });
    const PageDisplay=()=>{
        if(page===0){
            return <PersonalInformation formData={formData} setFormData={setFormData} errors={errors} />
        }
        else if(page===1){
            return <TypeUser formData={formData} setFormData={setFormData} errors={errors}/>
        }
        else{
            return <SecurityInformation formData={formData} setFormData={setFormData} errors={errors}/>
        }
      

    }
    
   
    const handleSubmit1=(e)=>{
        e.preventDefault();
        const validationErrors={}
        if(!formData.nom.trim()){
            validationErrors.nom="le nom est obligatoire"
        }
        if(!formData.prenom.trim()){
            validationErrors.prenom="le prenom est obligatoire"
        }
        if(!formData.email.trim()){
            validationErrors.email="l'email est obligatoire"
        }else if(!/\S+@\S+\.\S+/.test(formData.email)){
            validationErrors.email="Veuillez saisir un email valide"
        }
        if(!formData.numTel.trim()){
            validationErrors.numTel="le numero de téléphone est obligatoire"
        } else if (formData.numTel.trim().length !== 8) {
            validationErrors.numTel = "Le numéro de téléphone doit contenir 8 chiffres";
        }
        else if (!/^\d+$/.test(formData.numTel.trim())) {
            validationErrors.numTel = "Le numéro de téléphone doit contenir uniquement des chiffres";}
        setErrors(validationErrors);
        if(Object.keys(validationErrors).length===0){
            setPage(page+1);
        }
    }
    const handleSubmit2=(e)=>{
        e.preventDefault();
        const validationErrors={}
        if(formData.genre==="pro"){
            if(!formData.nomProjet.trim()){
                validationErrors.nomProjet="le nom du projet est obligatoire"
            }
            if(!formData.numTelPro.trim()){
                validationErrors.nomProjet="le numero de telephone professionnel du projet est obligatoire"
            } else if (formData.numTelPro.trim().length !== 8) {
                validationErrors.numTelPro = "Le numéro de téléphone professionnel doit contenir 8 chiffres";
            }
            else if (!/^\d+$/.test(formData.numTel.trim())) {
                validationErrors.numTelPro = "Le numéro de téléphone professionnel doit contenir uniquement des chiffres";}
            setErrors(validationErrors);
        }
        if(Object.keys(validationErrors).length===0){
            setPage(page+1);
        }
      
    }
    const handleSubmit3=(e)=>{
        e.preventDefault();
        const validationErrors={}
            if(!formData.password.trim()){
                validationErrors.motpasse="le mot de passe est obligatoire"
            }
            else if(formData.password.trim().length<8){
                validationErrors.password="Le mot de passe doit contenir au moins 8 caractères";
            }
            if(!formData.confirmPassword.trim()){
                validationErrors.confirmPassword="la confirmation du mot de passe est obligatoire"
            }
            else if(formData.confirmPassword!==formData.password){
                validationErrors.confirmPassword="La confirmation du mot de passe ne correspond pas "
            }
            setErrors(validationErrors);
        if(Object.keys(validationErrors).length===0){
           alert("submitted");
           console.log(formData);
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
                   onClick={(e)=>{
                    if(page===FormTitle.length-1 ){
                        {handleSubmit3(e)};
                    }
                        else if(page===0)
                        { {handleSubmit1(e)};
                            }
                            else if(page===1)
                            { {handleSubmit2(e)};
                                }
                    }
                    }
                    />
                </div>
                  </form>
                </div>
  </>
  );
}
