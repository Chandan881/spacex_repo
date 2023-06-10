import React,{ useState, useEffect } from 'react'
import { LoadingState } from '../components'
import { Link } from 'react-router-dom'


const Crew = () => {

    const [crew, setCrew] = useState([])

    useEffect(() => {
       const fetchCrew = async() => {
        const res = await fetch("https://api.spacexdata.com/v4/crew")
        const data = await res.json()
        setCrew(data)
       }  

       fetchCrew()
    }, [])

  return (
    <React.Fragment>
    { !crew ? ( <LoadingState /> ) : (
      <section className='crew_section' >
         <h1 className='crew_heading'></h1>

         <div className='crew_card_container'>
            {
                crew.map(({ id, name, image }) => (
                    <Link className='crew_card' key={id} to={`/crew/${id}`}>
                     
                      <img className='crew_img' src={image} alt={name} />
                      <h2 className='crew_name'>{name}</h2>
                    
                    </Link>
                ))
            }
         </div>
      </section> )
}
    </React.Fragment>
  )
}

export default Crew