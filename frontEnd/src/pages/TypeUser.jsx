import React from 'react'
import { useState,useRef } from 'react'
import ProjectInformation from './ProjectInformation'
export default function TypeUser({formData,setFormData,errors}) {
const [selectedValue,setSelectedValue]=useState('par');
const handleChange=(event)=>{
  setSelectedValue(event.target.value)
  setFormData({...formData,genre:event.target.value})
}
const PageDisplay=()=>{
  if(selectedValue==="pro"){
    console.log("aaaaa");
      return <ProjectInformation formData={formData} setFormData={setFormData} errors={errors} />
  }
}
const inputRef=useRef(null);
const [imageProfile,setImageProfile]=useState("");
const handleImageClick=()=>{
  inputRef.current.click();
}
const handleImageChange=(event)=>{
  const file=event.target.files[0];
  console.log(file);
  setImageProfile(event.target.files[0]);
  const imageUrl = URL.createObjectURL(file);
  setFormData({...formData,image:imageUrl})
}
  return (
                <div className="form-card">
                        <h2 className="fs-title">Informations du projet </h2>
                        <label className="pay">je suis un </label>
                <select  className="list-dt" id="month" name="expmonth" value={selectedValue} onChange={handleChange}>
                    <option value="pro">professionnel</option>
                    <option value="par">particulier</option>
                </select>
                <div style={{paddingTop:"7px"}} onClick={handleImageClick}>
                  {imageProfile ?
                    <img src={URL.createObjectURL(imageProfile)} alt="" width="40%" style={{borderRadius:"100%"}}/>:<img src="./profil.png" alt="" width="40%"  style={{borderRadius:"100%"}}  />
                  }
                  <input type="file" name="file"onChange={handleImageChange} style={{Color:'red'}} ref={inputRef} hidden />
                  <button className="custom-button" type="button" onClick={handleImageClick} style={{position:'absolute',top:"80%",left:"30%",paddingLeft:"7px",paddingRight:"7px",paddingTop:"3px",paddingBottom:"3px",borderRadius:"100%",margin:"4px"}}>
                     <i className="fas fa-plus"></i>
                  </button>
                </div>
               
                {PageDisplay()}
                
   </div>
          
  )
  }
