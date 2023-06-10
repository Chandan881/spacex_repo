import React,{useState, useEffect} from 'react'
import { LoadingState } from '../components'


const Roadster = () => {

   const [roadster, setRoadster] = useState(null)
   const [value, setValue] = useState(0)

   useEffect(() => {
     const fetchRoadster = async() => {
        const res = await fetch('https://api.spacexdata.com/v4/roadster');
        const data = await res.json();
        setRoadster(data)
     }
     
     fetchRoadster()
      
   },[])

  return (
    <React.Fragment> 
     {!roadster ? (<LoadingState />) 
    : (
        <section className="roadster_section">
        <h1 className='roadster_hed'>Elon's Musk Tesla Roadster</h1>
        <div className='container'>
           <div className='roadster_img_section'>
             <div className='divs_img'>
               <ul className='img_ul'>
                {roadster.flickr_images.map((image, index) => (
                  <li key={index} onClick={()=>{setValue(index)}} className={`${value===index && 'border_for_selected'}`}>
                    <img src={image} alt="img" className='img_li'/>
                  </li>
                ))}
               </ul>
               
             </div>
             <div className='big_img'>
             <img src={roadster.flickr_images[value]} alt="Elon Musk's Tesla Roadster" />
             </div>
           </div>
           <div className='para'>
             <p>{roadster.details}</p>
           </div>
           <div className='left_right_about'>
              <div className='left_about'>
                <ul className='left_about_ul'>
                  <li>Launch Date: <span className='inner_span'>{roadster.launch_date_utc}</span></li>
                  <li>Launch Mass: <span className='inner_span'>{roadster.launch_mass_kg} kg</span></li>
                  <li>Days Since: <span className='inner_span'>{roadster.period_days} days</span></li>
                  <li>Speed: <span className='inner_span'>{roadster.speed_kph} kph</span></li>
                </ul>
              </div>
              <div className='right_about'>
                <ul className='right_about_ul'>
                  <li>Distance From The Earth: <span className='inner_span'>{roadster.earth_distance_km} km</span></li>
                  <li><a href={roadster.wikipedia} target="_blank" rel="noreferrer" className='for_lst_btn'>Wikipedia</a></li>
                  <li><a href={roadster.video} target="_blank" rel="noreferrer" className='for_lst_btn'>YouTube</a></li>
                </ul>
              </div>
           </div>
        </div>
     </section>
    ) }
    
    </React.Fragment>
  )
}

export default Roadster