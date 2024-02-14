import React from 'react'

export default function PersonalInformation() {
  return (
       
            <div className="form-card">
                <h2 className="fs-title">Informations personnelles</h2>
                <input type="text" name="nom" placeholder="nom"/>
                <input type="text" name="prenom" placeholder="prenom"/>
                <input type="email" name="email" placeholder="email"/>
                <input type="text" name="numTel" placeholder="numéro de téléphone"/>
            </div>
        
  )
}
