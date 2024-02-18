import React from 'react'
import { useState } from 'react';
import {MapContainer,TileLayer,Marker,Popup,useMapEvents} from 'react-leaflet'

export default function projectInformation({formData,setFormData,errors}) {
    const [categorie, setCategorie] = useState("");
    const [gouvernerat, setGouvernerat] = useState("Monastir");
    const [cities, setCities] = useState([ "Monastir",
    "Moknine",
    "Ksar Hellal",
    "Sayada",
    "Bembla",
    "Téboulba",
    "Sahline",
    "Jemmal",
    "Ksibet el Mediouni",
    "Zéramdine",
    "Beni Hassen",
    "Ouerdanine",
    "Bennane",
    "Bekalta",
    "Amiret El Fhoul",
    "El Ghnada"]);
    const ChangeVille=(event)=>{
      setFormData({...formData,ville:event.target.value})
    } 
    const ChangeCategorie=(event)=>{
        setCategorie(event.target.value)
        setFormData({...formData,categorie:event.target.value})
      }  
      const ChangeGouvernerat=(event)=>{
        const selectedGovernorate = event.target.value;
        setGouvernerat(selectedGovernorate)
        setFormData({...formData,gouvernerat:selectedGovernorate})
    let citiesData = [];
    switch (selectedGovernorate) {
      case 'Tunis':
        citiesData = ['Tunis City', 'Ariana', 'Ben Arous'];
        break;
      case 'Sousse':
        citiesData = ['Sousse City', 'Msekn', 'sehlin'];
        break;
      case 'Monastir':
         citiesData = [
          "Monastir",
          "Moknine",
          "Ksar Hellal",
          "Sayada",
          "Bembla",
          "Téboulba",
          "Sahline",
          "Jemmal",
          "Ksibet el Mediouni",
          "Zéramdine",
          "Beni Hassen",
          "Ouerdanine",
          "Bennane",
          "Bekalta",
          "Amiret El Fhoul",
          "El Ghnada"];
      default:
        citiesData = [];
    }
    setCities(citiesData);
  };
      const [position, setPosition] = useState(null);
      function LocationMarker() {
        const map = useMapEvents({
          click(e) {
            setPosition(e.latlng);
          setFormData({...formData,latitude:e.latlng.lat,longitude:e.latlng.lng});
          // setFormData({...formData,longitude:e.latlng.lng});
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
                <br></br>
                <label className="pay">gouvernerat</label>
                <select  className="list-dt" id="month" name="expmonth" value={gouvernerat}  onChange={ChangeGouvernerat}>
                    <option value="Tunis">Tunis</option>
                    <option value="Sfax">Sfax</option>
                    <option value="Monastir">Monastir</option>
                    <option value="Sousse">Sousse</option>
                    <option value="Beja">Beja</option>
                    <option value="SidiBouzid">SidiBouzid</option>
                    <option value="Gafsa">Gafsa</option>
                    <option value="Kairaouen">Kairaouen</option>
                    <option value="Elkef">el kef</option>
                    <option value="ben arous">ben arous</option>
                    <option value="Benzart">benzart</option>
                    <option value="ainDrahem">ain drahem</option>
                    <option value="Tous">Tous</option>
                </select>  
                <br></br>
                <label className="pay">ville</label>
                <select  className="list-dt" id="month" name="expmonth"  onChange={ChangeVille}>
                    {cities.map((city, index) => (
                        <option key={index} value={city}>
                            {city}
                        </option>
                     ))}
                </select>   
               
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
