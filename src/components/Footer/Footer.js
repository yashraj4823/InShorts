import React from 'react'

const Footer = () => {
  return (
    <div className='footer bg-[#222] flex flex-col items-center text-white'>
        <span className='name text-[20px] pt-[20px] pr-[30px] pl-[30px] pb-[15px]'>
            Inshorts clone made by -{" "}
            <a href='https://www.linkedin.com/in/yash4823/' target="__blank">
              Yash 
            </a>
        </span>
        <hr style={{width: "90%"}} />
        <div className='iconContainer w-[60%] h-[50px] pt-[20px] pb-[20px] flex items-center justify-evenly'>
            <a href='https://www.instagram.com/yash_razzput2.0_?igsh=cThodWFqdHlrd3Zt' target="__blank" className='text-white' >
              <i className="fab fa-instagram-square fa-2x"></i>
            </a>
            <a href='https://www.linkedin.com/in/yash4823/' target="__blank" className='text-white'>
               <i className="fab fa-linkedin fa-2x"></i>
            </a>
            
            <a href="https://yashraj4823.github.io/Portfolio-Website/" target="__blank" className='text-white'>
              <i className="fas fa-link fa-2x"></i>
            </a>

        </div>
    </div>
  )
}

export default Footer