import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Landing = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

  return (
    <section id = "home" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">

        {/* IMAGE HERE */}
        <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
            {isAboveMediumScreens ? (
                <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-20 before:rounded-t-[400px]
                before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]">

                    <img src="src/assets/profilepic.png" alt="profile"
                    className="filter saturate-50 hover:saturate-100 transition duration-1000 z-10 w-full
                     max-w-[400px] md:max-w-[600px]" />
                </div>
            ) : (
                <img src="src/assets/profilepic.png" alt="profile"
                    className="filter saturate-50 hover:saturate-100 transition duration-500 z-10 w-full
                     max-w-[400px] md:max-w-[600px]" />
            )}
        </div>
    </section>
  )
}

export default Landing