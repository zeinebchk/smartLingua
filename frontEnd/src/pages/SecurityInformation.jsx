import React from 'react'

export default function SecurityInformation({formData,setFormData,errors}) {
  return (
   
                      <div className="form-card">
                        <h2 className="fs-title">Sécurité</h2>
                        <input type="password" name="password" placeholder="mot de passe"
                          value={formData.password} 
                          onChange={(event)=>setFormData({...formData,password:event.target.value})}
                        />
                         {errors.password && <span>{errors.password}</span>}
                        <input type="password" name="confirmPassword" placeholder="confirmer mot de passe"
                        value={formData.confirmPassword} 
                        onChange={(event)=>setFormData({...formData,confirmPassword:event.target.value})}/>
                      {errors.confirmPassword && <span>{errors.confirmPassword}</span>}

                      </div>
     
  )
}
