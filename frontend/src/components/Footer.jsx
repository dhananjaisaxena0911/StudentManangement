import React from 'react'
import footerLogo from '../assets/vinovelogo.png'
import { GrInstagram } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
return (
<div className=' flex w-[100vw] h-[25vh] justify-center items-center gap-11 bg-black'>
<div className='w-[23%] h-[100%]'>
<img src={footerLogo} className=' h-[100%] w-[75%] bg-none ' alt="" />
</div>
<div className='w-[23%] flex flex-col gap-3' >
<div className='text-white'>
Noida
</div>
<div className=''>
<p className='text-white'>+44 2079987571</p>
<p className='text-white'>11th Floor, Max Square, Noida-Greater Noida Expy, Sector 129, Noida, Uttar-Pradesh 201304</p>
</div>
<div className=''>
<p className='text-white hover:text-blue-500'><a href='https://www.google.com/maps/dir//11th+Floor,+Max+Square,+Noida-Greater+Noida+Expy,+Sector+129,+Noida,+Uttar+Pradesh+201304/@28.5086296,77.3041743,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390d04149fa98925:0x14859771debe3ffa!2m2!1d77.3865757!2d28.5086545?entry=ttu&g_ep=EgoyMDI1MDQwOC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D'>See On Map</a></p>
</div>
</div>
<div className='w-[23%] flex flex-col gap-3'>
<div className='text-white'>
Gurugram
</div>
<div className=''>
<p className='text-white'>+54 1167997949</p>
<p className='text-white'>10th floor, Tower-B, UNITECH CYBER PARK, Durga Colony, Sector 39, Gurugram, Haryana 122001</p>
</div>
<div className=''>
<p className='text-white hover:text-blue-500' > <a href='https://www.google.com/maps/dir//10th+floor,+Tower-B,+UNITECH+CYBER+PARK,+Durga+Colony,+Sector+39,+Gurugram,+Haryana+122001/@28.4438322,76.9743148,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390d18ec8956b191:0xccefb28ce65311fc!2m2!1d77.0567162!2d28.443857?entry=ttu&g_ep=EgoyMDI1MDQwOC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D'>See On Map </a> </p>
</div>
</div>
<div className='w-[23%]'>
<div className=''>
<p className='text-white'>Follow Us On:</p>
</div>
<div className='flex gap-4'>
<div className='text-white '>
<GrInstagram/>
</div>
<div className='text-white'>
<FaFacebookSquare/>
</div>
<div className='text-white'>
<FaTwitter/>
</div>
</div>
</div>
</div>
)
}

export default Footer