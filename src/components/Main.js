import React, { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineCaretDown } from 'react-icons/ai'
import { BiGridAlt } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'

const Main = (props) => {

    const { filters, setFilter } = props
    const [stateData, useStateData] = useState([])
    const [order, setOrder] = useState('list')

    const FetchApi = async (endpoints, method) => {
        const response = await fetch(`${endpoints}`, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: null // body data type must match "Content-Type" header
        });
        const json = await response.json();
        useStateData(json.data)
        console.log(stateData.data);
        return json
    }

    useEffect(() => {
        FetchApi('https://api.homedrop.in/products?limit=20', 'GET')
    }, [])

    // display_price: "₹18 - ₹85"
    // ​
    // id: 2957
    // ​
    // name: "Methi"
    // ​
    // out_of_stock: false
    // ​
    // product_type: "VARIABLE"
    // ​
    // slug: "methi"
    // ​
    // thumbnail: "https://media.homedrop.in/public/media/products/methi-2.jpg"
    // ​
    // vendor: "e0e941bc-49dc-4c32-a2e1-1a30e71aaa6c"

    const dropdown = (e) => {
        if (e.target.className.split(' ').includes('dropdown-show')) {
            e.target.className = e.target.className.split(' ').filter(dropdown=>dropdown!=='dropdown-show').join(' ')
            }
        else {
            e.target.className = e.target.className + ' dropdown-show'
        }
    }

    return (
        <div className='main_enclosure px-5'>
            <link rel="stylesheet" href="/styles/main.css" />
            <div className="title py-3 d-flex"><h3 className="me-auto">Products</h3><button className="btn btn-primary">Add Product</button></div>

            <div className=" main container">
                <div className="filters d-flex">
                    <ul className="nav d-flex me-auto">
                        <li className={filters['active'] === 'all' ? `filter-active` : ''} onClick={() => { setFilter({ ...filters,['active']: 'all' }) }} >All</li>
                        <li className={filters['active'] === 'active' ? `filter-active` : ''} onClick={() => { setFilter({ ...filters, ['active']: 'active' }) }} >Active</li>
                        <li className={filters['active'] === 'inactive' ? `filter-active` : ''} onClick={() => { setFilter({ ...filters, ['active']: 'inactive' }) }} >Inactive</li>
                        <li className={filters['active'] === 'draft' ? `filter-active` : ''} onClick={() => { setFilter({ ...filters, ['active']: 'draft' }) }} >Draft</li>
                    </ul>

                    <div className="other align-items-center d-flex ">
                        Sort:
                        <button class="dropdown mx-2" style={{padding:'6px 6px',border:'1px solid gray'}} onClick={dropdown} >
                            Date Created <AiOutlineCaretDown/>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </button>

                        <div className="order">
                            <button className={`list ${order==='list'?'order-sel':''}`} onClick={()=>{setOrder('list')}} ><AiOutlineMenu /></button>
                            <button className={`grid ${order==='grid'?'order-sel':''}`} onClick={()=>{setOrder('grid')}} ><BiGridAlt /></button>
                        </div>
                    </div>

                </div>

                <div className="sort_enclosure">
                <div className="sort d-flex my-3">
                    <form class="d-flex mx-4" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <button class="nav-item dropdown" onClick={dropdown} >
                        Type <AiOutlineCaretDown/>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </button>
                    <button class="nav-item dropdown" onClick={dropdown} >
                        Category <AiOutlineCaretDown/>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </button>
                    <button class="nav-item dropdown" onClick={dropdown} >
                        Brand <AiOutlineCaretDown/>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </button>
                    <button class="nav-item dropdown" onClick={dropdown} >
                        Stock Type <AiOutlineCaretDown/>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </button>
                    <button class="nav-item dropdown" onClick={dropdown} >
                        Supplier <AiOutlineCaretDown/>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </button>
                    <button class="nav-item dropdown" onClick={dropdown} >
                        Tags <AiOutlineCaretDown/>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </button>
                    <button class="nav-item dropdown" onClick={dropdown} >
                        Availability <AiOutlineCaretDown/>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </button>

                </div>
                </div>

                <div className="items d-flex flex-wrap">

                    {stateData.map((element) => {
                        return (
                            <div className="item d-flex">
                                <img src={element.thumbnail} alt="thumbnail" className='item-img' />
                                <div className="info">
                                    <h5 className="brand">{element.product_type}</h5>
                                    <h5 className="item-title">{element.name}</h5>
                                    <h5 className="price">{element.display_price}</h5>
                                    <h7 className={`stock ${element.out_of_stock === false ? 'text-success' : 'text-danger'}`}>{element.out_of_stock === false ? 'In Stock: 56' : `Out of Stock`}</h7>
                                </div>
                                <button className='options dropdown' onClick={dropdown}><BsThreeDotsVertical/>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Edit</a></li>
                                        <li><a class="dropdown-item" href="#">Delete</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item" href="#">Print Barcode</a></li>
                                    </ul>
                                </button>
                            </div>
                        )
                    })}

                </div>

            </div>

        </div>
    )
}

export default Main
