import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <React.Fragment>
      <header className='Header_body'>
        <div>
          <Link to="/">
           <img src={"https://www.logo.wine/a/logo/SpaceX/SpaceX-White-Dark-Background-Logo.wine.svg"} alt="logo" className='Header_logo'/>
          </Link>
        </div>

        <nav className="header_navs">
          <ul className="header_navs_ul">
            <li>
              <Link to="/capsules" className='Header_capsules' >CAPSULES</Link>
            </li>
            <li>
              <Link to="/crew" className='Header_capsules' >CREWS</Link>
            </li>
            <li>
              <Link to="/dragon" className='Header_capsules' >DRAGONS</Link>
            </li>
            <li>
              <Link to="/landpads" className='Header_capsules' >LANDPADS</Link>
            </li>
            <li>
              <Link to="/launches" className='Header_capsules' >LAUNCHES</Link>
            </li>
            <li>
              <Link to="/roadster" className='Header_capsules' >ROADSTER</Link>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  )
}

export default Header