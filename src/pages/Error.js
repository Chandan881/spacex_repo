import React from "react"
import {Link} from "react-router-dom"


export default function Error() {
    return (
        <React.Fragment>
           <section className="section_error">
              <h1>Error | The requested resource could not be found</h1>
              <Link to="/" className="section_btn">&larr; Back to Homepage</Link>
           </section>
        </React.Fragment>
    )
}