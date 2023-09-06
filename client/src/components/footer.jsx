import { FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer'>
            <div className='w-full flex sm:flex-row flex-col justify-between items-center my-4'>
                <div className= "flex flex-[0.5] justify-center items-center iconfooter">
                    BLKCHAIN
                </div>
                <div className='flex felx-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full'>
                    <p className='text-white text-base text-center mx-2 cursor-pointer'>PianoPlayer</p>
                    <p className='text-white text-base text-center mx-2 cursor-pointer'>BouncingBall</p>
                    <p className='text-white text-base text-center mx-2 cursor-pointer'>RandomColors</p>
                    <p className='text-white text-base text-center mx-2 cursor-pointer'>NumberGuesser</p>
                </div>
            </div>
            <div className='flex justify-center items-center flex-col mt-5'>
                <p className='text-white text-sm text-center'> Come join us</p>
                <p className='text-white text-sm text-center'>tofaratifolayan@gmail.com</p>
                <p className='text-white text-sm text-center'>I'm only doing this landing page, the rest of the links above are fake, imagine they do something</p>
                <p className="icons">
                    <a href="https://www.instagram.com/tofaratifolayan/" target="_blank" rel="noreferrer noopener">
                      <button className="btn btn-outline-light btn-floating m-1 text-white">
                        <FaInstagram />
                      </button>
                    </a>
                    <a href="https://twitter.com/canyoufreeme" target="_blank" rel="noreferrer noopener">
                      <button className="btn btn-outline-light btn-floating m-1 text-white">
                        <FaTwitter />
                      </button>
                    </a>
                </p>
            </div>
            <div className='sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5'/>
            <div className='sm:w-[90%] w-full flex justify-between items-center mt-3'>
                <p className='text-white text-sm text-center'> @tofaratifolayan 2023</p>
                <p className='text-white text-sm text-center'> All rights reserved</p>
            </div>
        </div>
    
    );
}

export default Footer;