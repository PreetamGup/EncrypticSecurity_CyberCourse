import React from 'react'

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{height:"300px"}}>
        <div className="spinner-border" style={{width:"70px", height:"70px"}} role="status">
            <span className="sr-only"> </span>
        </div>
    </div>
  )
}

export default Loader