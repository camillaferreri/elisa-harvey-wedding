import { useEffect, useState } from "react"

import { Header } from "./components/Header"
import { Intro } from "./components/Intro"
import { Main } from "./components/Main"

import './App.scss';
import './styles/globals.scss'


function App() {
	let [ showIntro, setShowIntro ] = useState(null)

	useEffect(() => {
		let shownIntro = sessionStorage.getItem('shownIntro');

		if (!shownIntro) {
			sessionStorage.setItem('shownIntro', true);
			setShowIntro(true)
		}
	}, [])

	return (
		<div className="App">
			<Header />

			{showIntro ?
				<Intro 
					isVisible={showIntro}
					toggleVisibility={() => setShowIntro(false)}
				/>
				:
				<Main
					isVisible={!showIntro}
				/>
			}
		</div>
	);
}

export default App;
