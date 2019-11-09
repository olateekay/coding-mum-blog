import React from 'react'
import Link from 'gatsby-link';
import './header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }
// As soon as the component is loaded, we try to listen to the built-in scroll events passed from our window.
// This will in turn trigger the handleScroll function. 
  componentDidMount(){
    window.addEventListener('scroll',this.handleScroll)
  }

  // The handleScroll function will get the Y position of the scrolling.
  //  When the scrolling hits more than 50px, it’ll set a new state for our hasScrolled boolean to true. Otherwise, it’ll set it back to false.


  handleScroll = (event) => {
    const scrollTop = window.pageYOffset
    if (scrollTop > 50) {
      this.setState({hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false})
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src="https://p90.f3.n0.cdn.getcloudapp.com/items/rRunmy1v/tcmlo.png?v=63ddbfc440a54c9717b20db7a0370b3e" width="200" /></Link>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    )
  }
}
export default Header
