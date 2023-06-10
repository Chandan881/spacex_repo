import React, { useState, useEffect } from 'react'
import { LoadingState } from '../components'

const Capsules = () => {

   const [capsules, setCapsules] = useState([])

   const fetchCapsules = async() => {
    const res = await fetch("https://api.spacexdata.com/v4/capsules")
    const data = await res.json()
    setCapsules(data)

   }

   useEffect(()=>{
      fetchCapsules()
   },[])

  return (
    
    <React.Fragment>
       {
        !capsules ?( <LoadingState/> ): (<section className="Capsules_Section">
        <h1 className='Capsules_heading'></h1>
    
        <div className='capsules_display'>
          {capsules.map(({ id, type, status, serial, launches, last_update, land_landings,
          water_landings, reuse_count }) => (
              <article key={id} className="articles_xl">
                 <h2 className="for_lite_clr">{type}, <span className="for_lite_clr">{serial}</span></h2>
                 <ul className='margin_top_head'>
                  <li className='lis_articles'>{launches.length} launches</li>
                  <li className='lis_articles'>{land_landings} land landings</li>
                  <li className='lis_articles'>{water_landings} water landings</li>
                  <li className='lis_articles'>Reused {reuse_count} times</li>
                  {status === "active" ? <li className='solidity_active' style={{color:"green"}}>Active</li> : <li className='solidity_not_active' style={{color:"red"}}>Retired</li>}
                 </ul>
    
                 <p className='capsules_summary'>{last_update}</p>
              </article>
         ))}
        </div>
      </section>)
       }
    </React.Fragment>
    
        
  )
}

export default Capsules