import React from 'react'
import { useState } from 'react'
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

const position = [36.8065, 10.1815]
  return (
                <div className="form-card">
                        <h2 className="fs-title">Informations du projet </h2>
                        <label className="pay">je suis un </label>
                <select  className="list-dt" id="month" name="expmonth" value={selectedValue} onChange={handleChange}>
                    <option value="pro">professionnel</option>
                    <option value="par">particulier</option>
                </select>
                {PageDisplay()}
                
   </div>
          
  )
  }
