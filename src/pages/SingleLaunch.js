import React,{ useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { LoadingState } from '../components';


const SingleLaunch = () => {

   const [singleLaunch, setSingleLaunch] = useState(null)
   
   const { id } = useParams();


   useEffect(() => {
      const fetchSingleLaunch = async() => {
        const res = await fetch(`https://api.spacexdata.com/v4/launches/${id}`)
        const data = await res.json();
        setSingleLaunch(data);
      }

      fetchSingleLaunch()
   },[id])

  return (
    <React.Fragment>
      {!singleLaunch ? ( <LoadingState />) :
      (
      <section className='singleLaunch_section'>
        <div className='section_flex'>
          <div className='singleLaunch_left'>
            <img className='singleLaunch_img' src={singleLaunch.links.patch.large} alt={singleLaunch.name} />
          </div>
          <div className='singleLaunch_right'>
            <h1 className="singleLaunch_hed">{singleLaunch.name}</h1>
            <h2 className="launch_date">Launch Date: {singleLaunch.date_local}, {singleLaunch.success
                 ? <span style={{color:"green"}}>Successful</span>
                 : <span style={{color:"red"}}>Failed</span>}
            </h2>

            <p className='para'>{singleLaunch.details}</p>

            <ul className='recover'>
              <li>Fairings: {singleLaunch.fairings.reused ? "Not Reused" : "Reused"}</li>
              <li>Recovered: {singleLaunch.fairings.recovered ? "Fairings Not Recovered" : "Fairings Recovered"}</li>
            </ul>

            <ul className='btn_two'>
               <li>
                <a href={singleLaunch.links.article} target="_blank" rel="noreferrer" className='singleLaunch_btn_article'>
                  Read Article
                </a>
               </li>
               <li>
                <a href={singleLaunch.links.webcast} target="_blank" rel="noreferrer" className='singleLaunch_btn_watch'>
                  Watch Launch on YouTube
                </a>
               </li>
            </ul>

            <Link className='back_btn' to="/launches">&larr; Back</Link>
          </div>
        </div>
      </section>
      )
    }
       
    </React.Fragment>
  )
}

export default SingleLaunch