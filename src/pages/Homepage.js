
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LoadingState } from '../components';

const Homepage = () => {
  const [company, setCompany] = useState(null);

  const fetchCompany = async () => {
    const res = await fetch('https://api.spacexdata.com/v4/company');
    const data = await res.json();
    setCompany(data);
  };

  useEffect(() => {
    fetchCompany();
  }, []);

  return (
    <React.Fragment>
      {!company ? (
        <LoadingState />
      ) : (
        <section className="Homepage">
          <div className="Homepage_showcase">
            <div className="Homepage_overlay">
              <article className='All_articles'>
                <h1 className="Homepage_heading">All The SpaceX Data in one place</h1>

             <div className="Homepage_articles_flex">
             

             <article>
             <h2 className='Articles_Heading'>About</h2>
             <ul>
               <li className="ulLi">{company.name} was founded by</li>
               <li className="ulLi">{company.founder} in the year</li>
               <li className="ulLi">{company.founded}.</li>
               <li className="ulLi">{company.employees} employess, </li>
               <li className="ulLi">{company.vehicles} vehicles,</li>
               <li className="ulLi">{company.launch_sites} launch sites,</li>
               <li className="ulLi">and {company.test_sites} test sites and</li>
               <li className="ulLi">is valued at {company.valuation.toLocaleString()} B</li>
             </ul>
           </article>

             <article>
             <h2 className='Articles_Heading'>Headquarters</h2>
             <ul>
               <li className="ulLi">{company.headquarters.address}</li>
               <li className="ulLi">{company.headquarters.city}</li>
               <li className="ulLi">{company.headquarters.state}</li>
             </ul>
           </article>

           <article>
             <h2 className='Articles_Heading'>Useful Links</h2>
             <ul>
               <li className="ulLi">
                 <a className='last_style' href={company.links.website}>Website</a>
               </li>
               <li className="ulLi">
                 <a className='last_style' href={company.links.flickr}>Flickr</a>
               </li>
               <li className="ulLi">
                 <a className='last_style' href={company.links.twitter}>Twitter</a>
               </li>
               <li className="ulLi">
                 <a className='last_style' href={company.links.elon_twitter}>Elon's Website</a>
               </li>
             </ul>
            </article>
      
             </div>

               

                <p className="summary">{company.summary}</p>
              </article>
            </div>
          </div>
          {/* new section */}
         

          <div className="second_hone_sec">
             <Link to="/dragon" className="drg_btn" >Dragons</Link>
          </div>

          {/* new more section */}
          <div className="third_hone_sec">
            <Link to="/best_views" className="best_view" >Best Views</Link>
           </div>

          {/* new footer section */} 
          <div className="footer">
             <ul className='footer_ul'>
               <li><h3 className='copyright display_none'>SPACEX @2023</h3></li>
               <li><a href='https://twitter.com/spacex' target='_blank'>TWITTER</a></li>
               <li><a href='https://www.youtube.com/spacex' target='_blank'>YOUTUBE</a> </li>
               <li><a href='https://www.instagram.com/spacex/' target='_blank'>INSTAGRAM</a></li>
               <li><a href='https://www.flickr.com/photos/spacex' target='_blank'>FLICKR</a></li>
               <li><a href='https://www.linkedin.com/company/spacex/' target='_blank'>LINKEDIN</a></li>
               <li className = "display_none"><a href='https://www.spacex.com/media/privacy_policy_spacex.pdf' target='_blank'>PRIVACY & POLICY</a></li>
             </ul>
          </div>
        </section>
      )}
    </React.Fragment>
  );
};

export default Homepage;