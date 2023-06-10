import React,{ useState,useEffect } from 'react'
import { LoadingState } from '../components'
import { Link } from "react-router-dom"


const Launches = () => {

   const [launch, setLaunch] = useState(null)

   useEffect(() => {
    const fetchLaunches = async() => {
      const res = await fetch('https://api.spacexdata.com/v4/launches')
      const data = await res.json();
      setLaunch(data)
    }

    fetchLaunches()

   },[]) 

  return (
    <React.Fragment>
    {!launch ? ( <LoadingState /> )  
     : (
        <section className="launch_section">
        <h2 className="launch_section_hed"></h2>
        <div className='main_sec_justify'>
         <div className='launch_card_section'>
           {launch.map(({ id, name, links, details }) => (
            <Link to={`/launches/${id}`} key={id} className='launch_card'>
               <img src={links.patch.large} alt={name} />
               <h2 className='launches_name'>{name}</h2>
               {details && <p className='launches_about'>{`${details.substring(0,40)}...`}</p>}
            </Link>
          ))}
      </div>          
        </div>         
      </section>
     )}
    </React.Fragment>
  )
}

export default Launches