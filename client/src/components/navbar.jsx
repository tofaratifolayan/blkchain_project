import {useState} from 'react';
import {HiMenuAlt4} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';

import Button from './common/Button'

// import logo from '../../images/logo.png'

const NavBarItem = ({title, classProps}) => {
    return (
        <li className={"mx-4"}>
            {/* <Button size={'btn-lg'} width={'w-100'} page={`/${title}`}> {title} </Button> */}
            {title}
        </li>
    )
}

const Navbar = () => {
    /* */
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div className= "md:flex-[0.5] flex-initial justify-center items-center iconlogo">
                BLKCHAIN
            </div>
            <p className='text-white'>The rest of my projects will be linked soon</p>
            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                {["PianoPlayer", "BouncingBall", "RandomColors", "NumberGuesser"].map((item, index) => (
                    <NavBarItem key={item + index} title={item}/>
                ))}
            </ul>
            <div className="flex relative">
                {toggleMenu
                    ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)}/>
                    : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)}/> }
                {toggleMenu && (
                    <ul className="z-10 fixed top-0 -right-1 p-3 w-[70vw] h-screen shadow-2x1 md:hidden list-none
                        flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
                        <li className="text=xl w-full my-2">
                            <AiOutlineClose onClick={() => setToggleMenu(false)}/>
                        </li>
                        {["PianoPlayer", "BouncingBall", "RandomColors", "NumberGuesser"].map((item, index) => (
                            <NavBarItem key={item + index} title={item} classProps="my-2 text-lg"  />
                        ))}
                    </ul>
                )}
            </div>

        </nav>    
    );
}

export default Navbar;