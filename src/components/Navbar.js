import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import { IoMdNotificationsOutline } from 'react-icons/io'
import {BiHelpCircle,BiRadioCircleMarked} from 'react-icons/bi'


const Navbar = () => {

  const dropdown = (e) => {
    if (e.target.className.split(' ').includes('dropdown-show')) {
        e.target.className = e.target.className.split(' ').filter(dropdown=>dropdown!=='dropdown-show').join(' ')
        }
    else {
        e.target.className = e.target.className + ' dropdown-show'
    }
}

  return (
    <div >
        <link rel="stylesheet" href="styles/navbar.css" />
      <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
  <button class="mx-3 offcanvas-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><AiOutlineMenu/></button>
    <a class="navbar-brand" href="#">Swastik Marketing</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item nav-right">
          <button className='connected'><BiRadioCircleMarked/> connected</button>
        </li>
        <li class="nav-item nav-right">
          <BiHelpCircle/>
        </li>
        <li class="nav-item nav-right">
          <IoMdNotificationsOutline/>
        </li>
        <button class="nav-item dropdown profile me-3" onClick={(e)=>{dropdown(e)}} ><CgProfile/>
          <ul class="dropdown-menu" style={{right:4}}>
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </button>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
