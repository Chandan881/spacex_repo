import React,{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LoadingState } from '../components';


const Dragons = () => {

    const [dragons, setDragons] = useState([])

    useEffect(() => {
        const fetchDragons = async() => {
            const res = await fetch("https://api.spacexdata.com/v4/dragons")
            const data = await res.json()
            setDragons(data)
        }

        fetchDragons()
    },[])

  return (
    <React.Fragment>
      {!dragons ? (<LoadingState />) : 
      (<section className='Dragon_section'>
      <h1 className='Dragon_heading'></h1>
      <div className='Dragon_container'>
        {dragons.map(({ id, name, flickr_images, description }) => (
           <Link to={`/dragon/${id}`} key={id} className='Dragon_card'>
              <img className='dragon_img' src={flickr_images[0]} alt={name} />
              <div className="backgroung_dark_dragon_about">
                <h2 className='dragon_name_hed'>{name}</h2>
                <p className='dragon_para'>{`${description.substring(0,300)}...`}</p>
                <Link to={`/dragon/${id}`} className='Dragon_section_btn'>
                 Read More &rarr;
                </Link>
              </div>
              
           </Link>
))}
      </div>
    </section>)
    }
      
    </React.Fragment>
  )
}

export default Dragons