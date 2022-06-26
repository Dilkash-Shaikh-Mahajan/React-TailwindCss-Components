import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from './Pages/Error404';
import HomeScreen from './Pages/HomeScreen';
import SignIn from './Pages/SignIn';
export default function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomeScreen />}></Route>
					<Route path='signin' element={<SignIn />} />
					<Route path='*' element={<ErrorPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

