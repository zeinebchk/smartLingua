import React from 'react'
import { useState } from 'react';
import {MapContainer,TileLayer,Marker,Popup,useMapEvents} from 'react-leaflet'

export default function projectInformation({formData,setFormData,errors}) {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const ChangeCategorie=(event)=>{
        setCategorie(event.target.value)
        setFormData({...formData,categorie:event.target.value})
      }
      const [position, setPosition] = useState(null);
      function LocationMarker() {
        const map = useMapEvents({
          click(e) {
            setPosition(e.latlng);
         setFormData({...formData,emplacement:e.latlng})

          },
        });
        return position === null ? null : (
          <Marker position={position}>
            <Popup>You are here</Popup>
          </Marker>
        );
      }
  return (
    <div>
       <input type="text"name="fname" placeholder="nom de votre projet ou entreprise"
        value={formData.nomProjet} 
        onChange={(event)=>setFormData({...formData,nomProjet:event.target.value})}
       />
        {errors.nomProjet && <span>{errors.nomProjet}</span>}<br/>
       <input type="text"name="fname" placeholder="numéro de téléphone professionnelle de votre projet ou entreprise"
        value={formData.numTelPro} 
        onChange={(event)=>setFormData({...formData,numTelPro:event.target.value})}
       />
         {errors.numTelPro && <span>{errors.numTelPro}</span>}<br/>
                        <label className="pay">Categorie</label>
                <select  className="list-dt" id="month" name="expmonth"  onChange={ChangeCategorie}>
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
                <input type="text" name="fname" placeholder="gouvernerat"
                  value={formData.gouvernerat} 
                  onChange={(event)=>setFormData({...formData,gouvernerat:event.target.value})}/>
                
                <input type="text"name="fname" placeholder="ville"
                  value={formData.ville} 
                  onChange={(event)=>setFormData({...formData,ville:event.target.value})}/>
               
                <input type="text" name="fname" placeholder="adresse exacte"
                 value={formData.adresseExacte} 
                 onChange={(event)=>setFormData({...formData,adresseExacte:event.target.value})}/>
                <label>Veuillez séléctionnez votre emplacement dans la carte</label>
                <MapContainer
    center={{lat:36.8065,lng:10.1815}}
    zoom={13}
    scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <LocationMarker/>
  </MapContainer>,
    </div>
  )
}
