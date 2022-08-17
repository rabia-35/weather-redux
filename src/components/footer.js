import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"

   
function Footer() {
  return (
    <div className='footer text-center mt-5'>
        <a href='https://github.com/rabia-35/memory-game'>
        <FontAwesomeIcon icon={faGithub} className="fa-3x " />
        </a>  
        <p className='pb-3 mb-0'> Created by Rabia ÖLKER</p>
    </div>
  )
}

export default Footer