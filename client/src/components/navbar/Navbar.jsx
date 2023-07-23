import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.scss';
import newRequest from '../../utils/newRequest';

function Navbar() {

    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);
    const {pathname} = useLocation();

    const navigate = useNavigate();

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', isActive);

        return () => {
            window.removeEventListener('scroll', isActive);
        }
    }, []);

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    const handleLogout = async () => {
        try {
            await newRequest.post('/auth/logout');
            localStorage.setItem('currentUser', null);
            navigate('/');
        } catch (err) {
            console.error(err);
        }
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
                            <img 
                                src={currentUser.img || '/img/noavatar.jpg'} 
                                alt='' />
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
                                    <Link className='link' onClick={handleLogout}><span>Logout</span></Link>
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
                    <hr />
                </>
            )}
        </div>
    )
}

export default Navbar