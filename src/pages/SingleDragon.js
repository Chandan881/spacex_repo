import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { LoadingState } from '../components';


const SingleDragon = () => {

    const [singleDragon, setSingleDragon] = useState(null)
    const [toggle, setToggle] = useState(false)
    const [value, setValue] = useState(0)
    const { id } = useParams();

    useEffect(() => {
        const fetchSingleDragon = async () => {
           const res = await fetch(`https://api.spacexdata.com/v4/dragons/${id}`)
           const data = await res.json();
           setSingleDragon(data)
        }

        fetchSingleDragon()
    },[id])

  return (
    <React.Fragment>
     {!singleDragon ? ( 
        <LoadingState /> 
        ) : (
        <div className='singleDragon_section'>
        <div className="left_singleDragon_section">
          <article>
            <h1 className='singleDragon_hed'>{singleDragon.name}</h1>
            <h2 className='singleDragon_first_flight'>First Flight Date: {singleDragon.first_flight}</h2>
          </article>
  
          <div className='singleDragon_li_flex'>
            <ul className='singleDragon_first_about'>
              <li>Type: {singleDragon.type}</li>
              <li>Crew: {singleDragon.crew_capacity}</li>
              
              {!toggle && <li>Dry Mass: {singleDragon.dry_mass_kg}Kg</li>}
              {toggle && <li>Dry Mass: {singleDragon.dry_mass_lb}lb</li>}
              {singleDragon.active ? 
                (<li className='singleDragon_solidity_active' style={{color:"green"}}>Active</li>)
                 : (<li className='singleDragon_solidity_not_active' style={{color:"green"}}>Inactive</li>)}
              <li><a className='singleDragon_btn' href={singleDragon.wikipedia} target="_blank" rel="noreferrer">Wikipedia</a></li>
            </ul>
  
            <ul className='singleDragon_li_left_sec'>
              <h3 className='singleDragon_left_hed'>Heat sheild details</h3>
              <li>Material: {singleDragon.heat_shield.material}</li>
              <li>Size: {singleDragon.heat_shield.size_meters}m</li>
              <li>Temperature: {singleDragon.heat_shield.temp_degrees}</li>
              <li>Dev Partner: {singleDragon.heat_shield.dev_partner}</li>
            </ul>
          </div>
  
          <p className='singleDragon_summary_for'>{singleDragon.description}</p>
  
          <div className='singleDragon_metric_imperial'>
            {/* Metric Units */}
            {!toggle && 
                <ul className='singleDragon_metric_ul'>
                <li>Launch Payload Mass: {singleDragon.launch_payload_mass.kg}kg</li>
                <li>Return Payload Mass: {singleDragon.return_payload_mass.kg}kg</li>
                <li>Pressurized Capsule Payload Volume: {singleDragon.pressurized_capsule.payload_volume.cubic_meters}m<sup>3</sup></li>
                <li>Height With Trunk: {singleDragon.height_w_trunk.meters}</li>
                <li>Launch Payload Volume: {singleDragon.launch_payload_vol.cubic_meters}m</li>
                <li>Return Payload Volume: {" "}{singleDragon.return_payload_vol.cubic_meters} m<sup>3</sup></li>
                <li>Trunk Volume: {singleDragon.trunk.trunk_volume.cubic_meters}m<sup>3</sup></li>
                <li>Diameter: {singleDragon.diameter.meters}</li>
              </ul>
            }
  
            {/* Imperial Units */}
            {toggle && 
                <ul className='singleDragon_imperial_ul'>
                <li>Launch Payload Mass: {singleDragon.launch_payload_mass.lb} lb</li>
                <li>Return Payload Mass: {singleDragon.return_payload_mass.lb} lb</li>
                <li>Pressurized Capsule Payload Volume: {singleDragon.pressurized_capsule.payload_volume.cubic_feet} ft<sup>3</sup></li>
                <li>Height With Trunk: {singleDragon.height_w_trunk.feet} ft</li>
                <li>Launch Payload Volume:{" "} {singleDragon.launch_payload_vol.cubic_feet} ft<sup>3</sup></li>
                <li>Return Payload Volume:{" "}{singleDragon.return_payload_vol.cubic_feet} ft<sup>3</sup></li>
                <li>Trunk Volume: {singleDragon.trunk.trunk_volume.cubic_feet} ft</li>
                <li>Diameter: {singleDragon.diameter.feet} ft</li>
              </ul>
            }
          </div>

          <ul className='for_btn_singleDragon'>
            <li><button className='units_toggle' onClick = {() => {setToggle(!toggle)}} >
            {toggle ? "Show Metric Units" : "Show Imperial Units"}
            </button></li>
            <li><Link className='back_to_dragon' to ="/dragon">&larr; Back </Link></li>
          </ul>
        </div>
        <div className="right_singleDragon_section">
           <img className="singleDragon_section_img" src={singleDragon.flickr_images[value]} alt={singleDragon.name} />

           <ul className='for_toggles_img'>
            {singleDragon.flickr_images.map((image, index) => (
                <li className={`${index === value && 'border_for_selected'}`} key={index} onClick={() => setValue(index)} >
                   <img src={image} alt={singleDragon.name} className="imgs_gather" />
                </li>
            ))}
           </ul>
        </div>
      </div>
     )}
    </React.Fragment>
   
  )
}

export default SingleDragon