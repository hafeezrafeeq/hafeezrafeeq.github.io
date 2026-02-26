
import React from "react"

const Navbar = () => {

  return (
    <>
      <nav className="flex justify-around ">
        <div className="logo">logo</div>

        <div className="flex gap-6">
          <a href="Home">Home</a>
          <a href="About">About</a>
          <a href="Service">Service</a>
          <a href="Contect">Contect</a>
        </div>

        <div className="btn-contect">Contect Now</div>

      </nav>


    </>
  )
}

export default Navbar
