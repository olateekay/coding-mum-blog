import React from 'react'
import Link from 'gatsby-link';
import './Header.css'

const Header = ({ siteTitle }) => (
 <div className="Header">
   <div className="HeaderGroup"></div>
   <Link to="/"><img src="https://p90.f3.n0.cdn.getcloudapp.com/items/rRunmy1v/tcmlo.png?v=63ddbfc440a54c9717b20db7a0370b3e" width="130"/></Link>
   <Link to="">Home</Link>
   <Link to="">About</Link>
   <Link to="">Blog</Link>
   <Link to="">Contact</Link>
 </div>
)

export default Header
