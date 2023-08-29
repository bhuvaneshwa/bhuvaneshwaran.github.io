import React from 'react'

import Link from 'next/link'

const Navbar = () => {
  return (

<div>
	<header className="p-4 ">
	<div className="container flex items-center justify-between h-6 p-2 mx-auto">
		<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex gap-3">
			
			
	
<Link href="/" className="text-4xl waving-glow text-shadow">BN</Link>

			
		</a>
		<ul className="items-stretch hidden space-x-3 md:flex">


            <Link href="/"><li className="flex items-center px-4 -mb-1 text-green-500 rounded-xl dark:border-transparent hover:text-white hover:bg-green-400">
				<div>Home</div>
			</li></Link>
            <Link href="/about/About"><li className="flex items-center px-4 -mb-1 text-green-500 rounded-xl dark:border-transparent hover:text-white hover:bg-green-400">
				<div>About</div>
			</li></Link>
            <Link href="/skills/skills"><li className="flex items-center px-4 -mb-1 text-green-500 rounded-xl dark:border-transparent hover:text-white hover:bg-green-400">
				<div>Skills</div>
			</li></Link>
 

			<Link href="/services/services"><li className="flex items-center px-4 -mb-1 text-green-500 rounded-xl dark:border-transparent hover:text-white hover:bg-green-400">
				<div>Services</div>
			</li></Link>
			<Link href="/project/project"><li className="flex items-center px-4 -mb-1 text-green-500 rounded-xl dark:border-transparent hover:text-white hover:bg-green-400">
				<div>Project</div>
			</li></Link>
			<Link href="/blog/blog"><li className="flex items-center px-4 -mb-1 text-green-500 rounded-xl dark:border-transparent hover:text-white hover:bg-green-400">
				<div>Blog</div>
			</li></Link>
			<Link href="/contact/Contactform"><li className="flex items-center px-4 -mb-1 text-green-500 rounded-xl dark:border-transparent hover:text-white hover:bg-green-400">
				<div>Contact</div>
			</li></Link>
			
            {/* <Link href="/portfolio/portfolio"><li className="flex items-center px-4 -mb-1 text-black dark:border-transparent hover:text-green-500">
				<div>Portfolio</div>
			</li></Link> */}
           
         
           
			
		</ul>
		<button className="flex justify-end p-4 md:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
     </div>
   
  
  )
}

export default Navbar
