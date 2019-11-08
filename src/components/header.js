import React from 'react'
import Link from 'gatsby-link';
import './header.css'

const Header = ({ siteTitle }) => (
 <div className="Header">
   <div className="HeaderGroup">
   <Link to="/"><img src="https://p90.f3.n0.cdn.getcloudapp.com/items/rRunmy1v/tcmlo.png?v=63ddbfc440a54c9717b20db7a0370b3e" width="200"/></Link>
   <Link to="/home">Home</Link>
   <Link to="/about">About</Link>
   <Link to="/blog">Blog</Link>
   <Link to="/contact">Contact</Link>
 </div>
 </div>
)

export default Header
