import { Routes, Route } from 'react-router-dom';
import Overlay from './components/Overlay/Overlay';
import HomePage from './pages/HomePage/HomePage';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Modals from './pages/Modals/Modals';
import Counter from './pages/Counter/Counter';
import Quiz from './pages/Quiz/Quiz';
import Wallpaper from './pages/Wallpaper/Wallpaper';
import { useEffect, useState } from 'react';
import InviterApp from './pages/InviterApp/InviterApp';
import CurrencyConvector from './pages/CurrencyConvector/CurrencyConvector';
import Photos from './pages/Photos/Photos';
import Slider from './pages/Slider/Slider';

function App() {
	const [isDarkTheme, setIsDarkTheme] = useState(null);
	useEffect(() => {
		let localValue = 'false';
		localValue = localStorage.getItem('theme');
		localValue === 'true' && setIsDarkTheme('dark');
	}, []);
	const theme = isDarkTheme ? 'dark' : 'light';

	const toggleTheme = () => {
		setIsDarkTheme((prevIsDarkTheme) => {
			localStorage.setItem('theme', !prevIsDarkTheme);
			return !prevIsDarkTheme;
		});
	};
	return (
		<div className={`App ${theme}`}>
			<Routes>
				<Route
					path="/"
					element={
						<Overlay
							toggleTheme={toggleTheme}
							isChecked={theme}
						/>
					}
				>
					<Route
						path="/"
						element={<HomePage />}
					/>
					<Route
						path="/Modals"
						element={<Modals />}
					/>
					<Route
						path="/Counter"
						element={<Counter />}
					/>
					<Route
						path="/Quiz"
						element={<Quiz />}
					/>
					<Route
						path="/Wallpaper"
						element={<Wallpaper />}
					/>
					<Route
						path="/Inviter"
						element={<InviterApp />}
					/>
					<Route
						path="/Currency Convector"
						element={<CurrencyConvector />}
					/>
					<Route
						path="/Photos"
						element={<Photos />}
					/>
					<Route
						path="/Slider"
						element={<Slider />}
					/>

					<Route
						path="*"
						element={<PageNotFound />}
					/>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
