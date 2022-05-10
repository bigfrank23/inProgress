import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    
  return (
    <section>
        <ul className="pagination p-3">
            {pageNumbers.map(number => (
                <li key={number} className="page-item mx-1" style={{fontSize: 'x-large'}}>
                    <Link to='#'  onClick={()=> paginate(number)} className="page-link">
                        {number}

                    </Link>
                    {/* <a onClick={()=> paginate(number)} href="#" className="page-link">
                    </a> */}
                </li>
            ))}
        </ul>
    </section>
  )
}

export default Pagination