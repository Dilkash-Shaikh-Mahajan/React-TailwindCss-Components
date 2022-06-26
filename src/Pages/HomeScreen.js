import React from 'react';
// import Navbars from '../Components/Navbars';
import Footer from '../Components/Footer';
import Blog from '../Components/Blog';
import Skeleton from '../Components/Skeleton';
import Team from '../Components/Team';
import Cards from '../Components/Card';
import Nav from '../Components/Navbar';
const HomeScreen = () => {
	return (
		<>
			{/* <Navbars /> */}
			<Nav />
			<Blog />
			<div
				className='animate-pulse'
				style={{
					animationFillMode: 'backwards',
					animationDelay: '50ms',
				}}>
				<Skeleton type='short' />
			</div>
			<div
				className='animate-pulse'
				style={{
					animationFillMode: 'backwards',
					animationDelay: '100ms',
				}}>
				<Skeleton type='short' />
			</div>
			<div
				className='animate-pulse'
				style={{
					animationFillMode: 'backwards',
					animationDelay: '200ms',
				}}>
				<Skeleton type='long' />
			</div>
			<Team />
			<Cards />
			<Footer />
		</>
	);
};

export default HomeScreen;
