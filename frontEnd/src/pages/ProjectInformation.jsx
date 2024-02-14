import React from 'react'
import { useState } from 'react'

export default function ProjectInformation() {
const [selectedValue,setSelectedValue]=useState('pro');
const [categorie,setCategorie]=useState('');
const handleChange=(event)=>{
  setSelectedValue(event.target.value)
}
const ChangeCategorie=(event)=>{
  setCategorie(event.target.value)
}
  return (
    
                      <div className="form-card">
                        <h2 className="fs-title">Informations du projet </h2>
                        <label className="pay">je suis un </label>
                <select  className="list-dt" id="month" name="expmonth" value={selectedValue} onChange={handleChange}>
                    <option value="pro">professionnel</option>
                    <option value="par">particulier</option>
                </select>
                        <input type={selectedValue==="pro"?"text":"hidden"} name="fname" placeholder="nom de votre projet ou entreprise"/>
                        <label className="pay">Categorie</label>
                <select  className="list-dt" id="month" name="expmonth" value={selectedValue} onChange={ChangeCategorie}>
                    <option value="salleFete">Salles des fètes</option>
                    <option value="traiteur">Traiteur</option>
                    <option value="coiffure">Coiffure et esthetique</option>
                    <option value="serveurs">Serveurs</option>
                    <option value="troupe">Troupe</option>
                    <option value="decors">Décors</option>
                    <option value="spa">SPA</option>
                    <option value="saveurs">Saveurs et délices</option>
                    <option value="robeSoiré">Robes de soirées</option>
                    <option value="boissons">Boissons</option>
                </select>  
                <input type={selectedValue==="pro"?"text":"hidden"} name="fname" placeholder="Combien d'emplacements possède votre projet ?"/>

                      </div>
          
  )
}
