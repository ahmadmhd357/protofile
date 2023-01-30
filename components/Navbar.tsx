import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState,FunctionComponent } from "react";

const NavItem:FunctionComponent<
{activePage:string,
setActivePage:Function,
name:string,
route:string
}
> = ({activePage,setActivePage,name,route})=>{
    return(
        activePage !== name ? (
            <Link href={route}>
              <span
                onClick={() => setActivePage(name)}
                className="text-lg hover:text-green "
              >
                {name}
              </span>
            </Link>
          ):null
    )
}

function Navbar() {
  const [activePage, setActivePage] = useState<string>("");
  const {pathname} = useRouter()

  
  useEffect(()=>{
    if(pathname === '/'){setActivePage('About')}
    if(pathname === '/projects'){setActivePage('Projects')}
    if(pathname === '/resume'){setActivePage('Resume')}
  },[])
  

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold border-b-4 border-green text-green md:text-2xl">{activePage}</span>
      <div className="flex space-x-5 text-lg ">
        <NavItem activePage={activePage} setActivePage={setActivePage} name='About' route='/'/>
        <NavItem activePage={activePage} setActivePage={setActivePage} name='Projects' route='/projects'/>
        <NavItem activePage={activePage} setActivePage={setActivePage} name='Resume' route='/resume'/>
      </div>
    </div>
  );
}

export default Navbar;
