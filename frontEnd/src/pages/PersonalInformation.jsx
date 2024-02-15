import React from 'react'

export default function PersonalInformation({formData,setFormData,errors}) {
  return (
       
            <div className="form-card">
                <h2 className="fs-title">Informations personnelles</h2>
                <input type="text" name="nom" placeholder="nom"
                 value={formData.nom} 
                 onChange={(event)=>setFormData({...formData,nom:event.target.value})}/>
                 {errors.nom && <span>{errors.nom}</span>}
                <input type="text" name="prenom" placeholder="prenom"
                  value={formData.prenom} 
                  onChange={(event)=>setFormData({...formData,prenom:event.target.value})}/>
               {errors.prenom && <span>{errors.prenom}</span>}
                <input type="email" name="email" placeholder="email"
                    value={formData.email} 
                    onChange={(event)=>setFormData({...formData,email:event.target.value})}
                />
                {errors.email && <span>{errors.email}</span>}
                <input type="text" name="numTel" placeholder="numéro de téléphone"
                  value={formData.numTel} 
                  onChange={(event)=>setFormData({...formData,numTel:event.target.value})}/>
                 {errors.numTel && <span>{errors.numTel}</span>}
            </div>
        
  )
}
