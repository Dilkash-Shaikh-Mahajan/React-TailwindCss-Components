/* eslint-disable jsx-a11y/anchor-is-valid */
import Navbar from './Components/Navbar';
import Analytics from './Components/Analytics';
import Cards from './Components/Card';
import Team from './Components/Team';
import Blog from './Components/Blog';
import Footer from './Components/Footer';
import Navbars from './Components/Navbars';
export default function App() {
	return (
		<>
			{/* <Navbar /> */}
			<Navbars />
			{/* <Analytics /> */}
			<Blog />
			<Team />
			<Cards />
			<Footer />
		</>
	);
}

