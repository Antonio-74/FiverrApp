import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {

    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);
    const {pathname} = useLocation();

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', isActive);

        return () => {
            window.removeEventListener('scroll', isActive);
        }
    }, []);

    const currentUser = {
        id: 1,
        username: 'Aera White',
        isSeller: true
    }

    return (
        <div className={active || pathname !== '/' ? 'navbar active' : 'navbar'}>
            <div className="container">
                <div className="logo">
                    <Link to='/' className='link'>
                        <span className='text'>fiverr</span>
                    </Link>
                    <span className='dot'>.</span>
                </div>
                <div className="links">
                    <span>Fiverr Bussiness</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign in</span>
                    {!currentUser?.isSeller && <span>Become & Seller</span>}   
                    {!currentUser && <button>Join</button>}  
                    {currentUser && (
                        <div 
                            className='user' 
                            onClick={() => setOpen(!open)}
                        >
                            <img src='https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='' />
                            <span>{currentUser?.username}</span>
                            {open && 
                                <div className='options'>
                                    {currentUser?.isSeller && (
                                        <>
                                            <Link className='link' to='/mygigs'><span>Gigs</span></Link>
                                            <Link className='link' to='/add'><span>Add New Gig</span></Link>
                                        </>
                                    )}
                                    <Link className='link' to='/orders'><span>Orders</span></Link>
                                    <Link className='link' to='/messages'><span>Messages</span></Link>
                                    <Link className='link' to='/'><span>Logout</span></Link>
                                </div>
                            }
                        </div>
                    )}   
                </div>
            </div>
            {active || pathname !== '/' && (
                <>
                    <hr />
                    <div className="menu">
                        <span>Test</span>
                        <span>Test2</span>
                    </div>
                </>
            )}
        </div>
    )
}

export default Navbar