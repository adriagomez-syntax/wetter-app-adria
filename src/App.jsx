import Header from "./components/header/Header";
import SearchSection from "./components/search/SearchSection";

export default function App() {
	return (
		<div className="flex flex-col min-h-screen font-primary text-text bg-background">
			<Header />
			<main className="bg-background-mid p-4">
				<SearchSection />
			</main>
			<footer>
				
			</footer>
		</div>
	)
}
