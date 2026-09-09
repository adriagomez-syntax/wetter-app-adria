import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import SearchSection from "./components/search/SearchSection";

export default function App() {
	return (
		<div className="flex flex-col min-h-screen font-primary text-text bg-background">
			<Header />
			<main className="flex-1 bg-background-mid p-4">
				<SearchSection />
			</main>
			<Footer />
		</div>
	)
}
