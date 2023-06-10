import React,{ useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const SingleCrew = () => {

    const [singleCrew, setSingleCrew] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const fetchSingleCrew = async() => {
            const res = await fetch(`https://api.spacexdata.com/v4/crew/${id}`)
            const data = await res.json()
            setSingleCrew(data)    
        }


        fetchSingleCrew()
    },[id])

  return (
    <React.Fragment>
      <section className='single_crew'>
        <div className="singleCrew_container">
          <article className="singleCrew_left">
           <img className='singleCrew_img' src={singleCrew.image} alt={singleCrew.name} />
          </article>

         <div className="singleCrew_right">
          <article>
           <h1 className='singleCrew_crew_name'>{singleCrew.name}</h1>
           <h2 className='single_crew_hed_details'>Details</h2>
          <ul>
           <li className='singleCrew_lis'>Currently at {singleCrew.agency}</li>
           {/*<li className='singleCrew_lis'>{singleCrew.launches.length} launces</li>*/} 
           {singleCrew.status === "active" 
             ? <li  className='singleCrew_solidity_active' style={{color:"green"}}> {singleCrew.status}</li>
             : <li  className='singleCrew_solidity_not_active' style={{color:"red"}}> {singleCrew.status}</li> }
           
          </ul>

          <ul className='flex_wiki_back'>
           <li className='wiki_li'><a href={singleCrew.wikipedia} target="_blank" rel='noreferrer' className="wikipedia_btn">Wikipedia</a></li>
           <li className="back_from_singleCrew">
           <Link to="/crew" className="back_from">&larr; Back</Link></li>
          </ul>
         </article>
        </div>
      
        </div>
      </section>
    </React.Fragment>
  )
}

export default SingleCrew