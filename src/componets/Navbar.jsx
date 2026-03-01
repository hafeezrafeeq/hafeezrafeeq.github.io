
import React from "react"
import { HiArrowRight } from "react-icons/hi2";
import { motion } from "motion/react"

const Navbar = () => {


  return (
    <>
      <nav className="flex justify-between items-center font-[f-regular] py-4 px-14 border-gray-300 border-b-[0.2px] ">
        <div className="logo ">logo</div>

        <motion.div


          className="flex gap-12">
          {[{ name: "Home", Link: "#" },
          { name: "About", Link: "#about" },
          { name: "Service", Link: "#home" },
          { name: "Contect", Link: "#home" }
          ].map((item, index) => (
            <motion.a
              initial="rest"
              whileHover="hovered"
              animate="rest"
              key={index}
              href={item.Link}
              className="relative text-gray-600 hover:text-gray-950"
            >
              {item.name}
              <motion.span
                variants={{
                  rest: { width: 0 },
                  hovered: { width: "100%" },
                }}
                className="absolute left-0 bottom-0  h-[2px] bg-[#c9ee7d]"
              />
            </motion.a>
          ))}

        </motion.div>



        <button className="btn-contect flex justify-between items-center">
          Contect Now
          < HiArrowRight className="btn-arrow text-[#131313] p-[2px] text-3xl rounded-full bg-[#c9ee7d]" />
        </button>

      </nav>


    </>
  )
}

export default Navbar
