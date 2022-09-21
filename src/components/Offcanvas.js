import React, { useState } from 'react'
import {HiOutlineUserGroup} from 'react-icons/hi'
import {BiHomeAlt} from 'react-icons/bi'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {FiPackage} from 'react-icons/fi'
import {IoLogoWindows} from 'react-icons/io'
import {VscMegaphone} from 'react-icons/vsc'
import {BsFillBarChartFill} from 'react-icons/bs'

const Offcanvas = (props) => {

    const {page,setPage} = props

    return (
        <div>
            <link rel="stylesheet" href="styles/offcanvas.css" />

            <div class="offcanvas offcanvas-start text-bg-dark mt-5 show" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" style={{width:'250px'}} aria-labelledby="offcanvasScrollingLabel">
                <div class="offcanvas-body py-5">
                    <ul className="text-start pages">
                        <li className={`page ${page==='overview'?'page_sel':''}`} onClick={()=>{setPage('overview')}} ><BiHomeAlt/> Overview</li>
                        <li className={`page ${page==='sales'?'page_sel':''}`} onClick={()=>{setPage('sales')}} ><AiOutlineShoppingCart/> Sales</li>
                        <li className={`page ${page==='purchase'?'page_sel':''}`} onClick={()=>{setPage('purchase')}} ><FiPackage/> Purchase</li>
                        <li className={`page ${page==='inventory'?'page_sel':''}`} onClick={()=>{setPage('inventory')}} ><IoLogoWindows/> Inventory</li>
                        <li className={`page ${page==='marketing'?'page_sel':''}`} onClick={()=>{setPage('marketing')}} ><VscMegaphone/> Marketing</li>
                        <li className={`page ${page==='analytics'?'page_sel':''}`} onClick={()=>{setPage('analytics')}} ><BsFillBarChartFill/> Analytics</li>
                        <li className={`page ${page==='staff'?'page_sel':''}`} onClick={()=>{setPage('staff')}} ><HiOutlineUserGroup/> Staff</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Offcanvas
