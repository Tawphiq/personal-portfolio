import React from 'react'

const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
        <a href="https://www.linkedin.com/in/mohammed-tawfiq-iddrisu-6469171b9/"
        className='hover:opacity-50 transition duration-500'
        target='_blank'
        rel='noreferrer'>
            <img src="../assets/linkedin.png" alt="linked-link" />
            </a>


            <a href="https://web.facebook.com/muhammadtawfeeque.idrees"
        className='hover:opacity-50 transition duration-500'
        target='_blank'
        rel='noreferrer'>
            <img src="../assets/facebook.png" alt="facebook-link" />
            </a>
    </div>
  )
}

export default SocialMediaIcons