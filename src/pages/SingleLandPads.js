import React,{ useState, useEffect } from 'react';
import {Link, useParams} from "react-router-dom";
import { LoadingState } from '../components';


const SingleLandPads = () => {

    const [singleLandpad, setSingleLandpad] = useState(null)
    const { id } =useParams()


    useEffect(()=>{
        const fetchsingleLandpad = async() => {
          const res = await fetch(`https://api.spacexdata.com/v4/landpads/${id}`)
          const data = await res.json();
          setSingleLandpad(data)
        }
        fetchsingleLandpad()
    },[id])

  return (
    <React.Fragment>
    {!singleLandpad ? (<LoadingState />) : (
        <section className="singleLandpad_section">
        <div className='main_sec_singleLandpad_section'>
          <div className="left_singleLandpad_section">
             <h1 className='singleLandpad_hed'>{singleLandpad.full_name}</h1>
             <h2 className='singleLandpad_more_about'>{singleLandpad.name}</h2>

             <div className='singleLandpad_ul_sec'>
               <ul className="singleLandpad_first_left">
                  <li>{singleLandpad.launches.length} launches</li>
                  <li>{singleLandpad.landing_successes} successful landings</li>
                  {singleLandpad.status === "active" ?
                   <li className='singleDragon_solidity_active' style={{color:"green"}}>{singleLandpad.status}</li> :
                   <li className='singleDragon_solidity_not_active' style={{color:"red"}}>{singleLandpad.status}</li>}
               </ul>

               <ul className='singleLandpad_first_right'>
                  <h3 className='singleLandPad_left_hed'>Location</h3>
                  <li>Locality: {singleLandpad.locality}</li>
                  <li>Region: {singleLandpad.region}</li>
               </ul>
             </div>

             <p className='singleLandPad_summary_for'>{singleLandpad.details}</p>

             <ul className='for_btn_singleLandpad'>
               <li>
                 <a className='singleLanpad_btn' href={singleLandpad.wikipedia} target="_blank" rel="noreferrer">
                    Wikipedia
                 </a>
                </li>
                <li>
                  <Link className='back_to_Landpad' to="/landpads">&larr; Back</Link>
                </li>
             </ul>

          </div>
          <div className="right_singleLandpad_section">
           <img className='single_landpad_img' src={singleLandpad.images.large[0]} alt={singleLandpad.full_name} />
          </div>
        </div>    
      </section>
    )}     
    </React.Fragment>
  )
}

export default SingleLandPads