import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const NavBar = () => {
    return (
        <div>
            <nav className='flex flex-row justify-between p-5'>
                <ul className='flex gap-4'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/destinations">Destinations</Link></li>
                    <li><Link href="/myBookings">My Bookings</Link></li>
                    <li><Link href="/admin">Admin</Link></li>
                </ul>

                <Image src="/assets/WanderLast.png" alt="Logo" width={200} height={50} />

                <ul className='flex gap-4'>
                    <li><Link href="/Profile">Profile</Link></li>
                    <li><Link href="/login">Login</Link></li>
                    <li><Link href="/Signup">SignUp</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;