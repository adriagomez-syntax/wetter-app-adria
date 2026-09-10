import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ResultSection from "./components/result/ResultSection";
import SearchSection from "./components/search/SearchSection";

export default function App() {
	return (
		<div className="flex flex-col min-h-screen font-primary text-text bg-background">
			<Header />
			<main className="flex-1 flex flex-col gap-4 bg-background-mid p-4">
				<SearchSection />
				<ResultSection />
			</main>
			<Footer />
		</div>
	)
}
