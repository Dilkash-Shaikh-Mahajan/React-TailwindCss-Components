/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
// import Button from './Button';
import { HiOutlineX } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Nav = () => {
	let [open, setOpen] = useState(false);
	return (
		<div className='shadow-md z-10 w-full  fixed top-0 left-0'>
			<div className='md:flex border-b  items-center justify-between bg-white  md:px-10 px-7'>
				<div className='h-auto items-center'>
					<Link
						to='/'
						aria-label='logo'
						className='flex space-x-2 items-center'>
						<img
							src='/logo.png'
							className='h-auto w-20 block lg:hidden'
							alt=''
						/>
						<img
							src='/Updated LogoDesktop.png'
							className='h-[60px] w-48 hidden lg:block'
							alt=''
						/>
					</Link>
				</div>

				<div
					onClick={() => setOpen(!open)}
					className='text-3xl absolute right-8 items-center mt-4 top-4 cursor-pointer md:hidden'>
					{open ? (
						<HiOutlineX
							style={{
								height: '20px',
								width: '25px',
							}}
							className='m-auto h-4 w-6 rounded text-sky-900 transition duration-300'
						/>
					) : (
						<>
							<div
								aria-hidden='true'
								className='m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300'></div>
							<div
								aria-hidden='true'
								className='m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300'></div>
						</>
					)}
				</div>

				<ul
					className={`md:flex md:items-center  md:pb-0 pb-12 absolute md:static  md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
						open ? ' ' : 'top-[-490px]'
					}`}>
					<div className='text-gray-600 lg:pr-4 '>
						<ul className='space-y-6 tracking-wide  font-medium text-lg lg:text-sm lg:flex lg:space-y-0'>
							<li className='text-md text-base'>
								<Link
									to='signin'
									className='block md:px-4 transition hover:text-sky-700'>
									<span>Home</span>
								</Link>
							</li>
							<li className='text-base'>
								<a
									href='#'
									className='block md:px-4 transition hover:text-sky-700'>
									<span>Portfolio</span>
								</a>
							</li>
							<li className='text-md text-base'>
								<a
									href='#'
									className='block md:px-4 transition hover:text-sky-700'>
									<span>Services</span>
								</a>
							</li>
						</ul>
					</div>

					<div className='w-full space-y-2 border-sky-200 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l'>
						<button
							type='button'
							title='Start buying'
							className='w-full py-2.5 text-xl px-5 text-center rounded-full transition active:bg-sky-200 focus:bg-sky-100 sm:w-max'>
							<span className='block text-xl text-sky-800 font-semibold lg:text-sm'>
								Sign up
							</span>
						</button>
						<button
							type='button'
							title='Start buying'
							className='w-full py-2.5  px-5 text-center rounded-full transition bg-gradient-to-b from-sky-400 to-cyan-300 sm:w-max'>
							<span className='block text-xl text-sky-900 font-semibold lg:text-sm'>
								Login
							</span>
						</button>
					</div>

					{/* <Button>Get Started</Button> */}
				</ul>
			</div>
		</div>
	);
};

export default Nav;
