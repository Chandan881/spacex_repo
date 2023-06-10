import React,{ useState, useEffect } from 'react'
import { LoadingState } from '../components'
import { Link } from 'react-router-dom'

const LandPads = () => {

   const [landpad, setLandpad] = useState(null)
   
   useEffect(() => {
     const fetchLandpads = async() => {
        const res = await fetch('https://api.spacexdata.com/v4/landpads/')
        const data = await res.json();
        setLandpad(data); 
     }

     fetchLandpads()
      
   },[])

  return (
    <React.Fragment>
      {!landpad ? (
        <LoadingState />
      ) : (
        <section className="landpads_section">
          <h2 className="landpads_section_hed"></h2>
          <div className='main_sec_justify'>
           <div className='landpads_card_section'>
             {landpad.map(({ id, images, full_name, type, details }) => (
              <Link to={`/landpads/${id}`} key={id} className='landpads_card'>
                 <img src={images.large[0]} alt={full_name} className="landpad_img" />

                 <div>
                   <h2>
                     <span className='span_type'>{type},</span><span className='span_type_i'>{full_name}</span>
                   </h2>
                   <p className='landpad_summary'>{`${details.substring(0,200)}...`}</p>                    
                 </div>

                 <Link to={`/landpads/${id}`} className='landpads_more_btn'>
                    Read More &rarr;
                 </Link>
              </Link>
            ))}
        </div>          
          </div>         
        </section>
      )}
    </React.Fragment>
  )
}

export default LandPads