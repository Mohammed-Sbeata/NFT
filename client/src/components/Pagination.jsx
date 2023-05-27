import { useState } from 'react'
import './Pagination.css'

const Pagination = ({allPagesNumber, changePageNumber}) => {
  const [active, setActive] = useState(0)
  
  return (
    <div className="pagination">
      {[...Array(allPagesNumber).keys()].map((number) => <span key={number} className={active === number && 'active'} onClick={() => {
        setActive(number)
        changePageNumber(number);
      }}>{number + 1}</span>)}
    </div>
  )

}

export default Pagination