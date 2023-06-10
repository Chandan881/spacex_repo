import React from 'react'

export default function LoadingState() {
  return (
    <React.Fragment>
       <div className='Loading_spinner'>
        <article></article>
        <p style={{color:"white", opacity:"0.4", marginTop:"0.56rem", fontSize:"0.8rem"}}>The spiny thingy means it's loading...</p>
       </div>
    </React.Fragment>
  )
}
