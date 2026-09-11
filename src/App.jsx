import { useState } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import ErrorContext from "./context/ErrorContext"

export default function App() {
	
	const [error, setError] = useState(null)
	
	return (
		<div className="flex flex-col min-h-screen font-primary text-text bg-background">
			<ErrorContext value={{ error, setError }}>
				<Header />
				<Main />
				<Footer />
			</ErrorContext>
		</div>
	)
}
