import {BiLogoInstagram, BiLogoFacebook, BiLogoTwitter, BiLogoLinkedin} from 'react-icons/bi'

function Footer() {
    const year =  new Date().getFullYear;
    return (
        <>
            <footer className="relative left-0 bottom-0 py-5 h-[10vh] justify-between items-center text-white flex flex-col sm:flex-row bg-gray-800 sm:px-20">
                <section className='flex items-center text-2xl text-white '>
                    Copyright {year} | All Rights Reserved
                </section>
                <section className='flex flex-row text-2xl gap-4'>
                    <a className='hover:text-yellow-500 hover:cursor-pointer'>
                        <BiLogoFacebook />
                    </a>
                    <a className='hover:text-yellow-500 hover:cursor-pointer'>
                        <BiLogoInstagram />
                    </a>
                    <a className='hover:text-yellow-500 hover:cursor-pointer'>
                        <BiLogoTwitter />
                    </a>
                    <a className='hover:text-yellow-500 hover:cursor-pointer'>
                        <BiLogoLinkedin />
                    </a>
                </section>
                
            </footer>
        </>
    )
}

export default Footer;