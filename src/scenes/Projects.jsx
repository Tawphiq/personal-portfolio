import React from 'react'
import LineGradient from '../components/LineGradient'
import {motion} from 'framer-motion'

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    }
};

const projectVariant = {
    hidden: {opacity: 0, scale: 0.8},
    visible: {opacity: 1, scale: 1}
}

const Project = ({title}) => {
    const overlayStyles = "absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-gray z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue"
    const projectTitle = title.split(' ').join('-').toLowerCase();

    return (
        <motion.div variants={projectVariant} className='relative'>
            <div className={overlayStyles}>
                <p className='text-2xl font-playfair'>{title}</p>
                <p className='mt-7'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aliquam iste optio illo corporis eligendi? Molestias ratione obcaecati, architecto, harum reprehenderit, neque perspiciatis
                     adipisci quidem officia aliquam temporibus. Qui, illo.
                </p>
            </div>
            <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
        </motion.div>
    )
}

const Projects = () => {
  return (
    <section>
        <motion.div
        className = "md:2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
        }}
        >
         <div>
            <p className='font-playfair font-semibold text-4xl'>
                <span className='text-red'>PRO</span>JECTS
            </p>
            <div className='flex justify-center mt-5'>
                <LineGradient width="w-1/3" />
            </div>
         </div>
         <p className='mt-10 mb-10'>
            Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
            fames odio in at.
         </p>
        </motion.div>
        <div className='flex justify-center'>
        <motion.div
        className = "sm:grid sm:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={container}
        >
            <div className='flex justify-center text-center items-center p-10 bg-red max-w-[480px] text-2xl font-playfair font-semibold'>
             BEAUTIFUL USER INTERFACES
            </div>
            <Project title="Project 1" />
            <Project title="Project 2" />

            <Project title="Project 3" />
            <Project title="Project 4" />
            <Project title="Project 5" />

            <Project title="Project 6" />
            <Project title="Project 7" />
            <div className='flex justify-center text-center items-center p-10 bg-blue max-w-[480px] max-h-[400px] text-2xl font-playfair font-semibold'>
                SMOOTH USER EXPERIENCES
            </div>
        </motion.div>
        </div>
    </section>
  )
}

export default Projects