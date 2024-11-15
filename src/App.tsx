import { MainRoutes } from "./routes/MainRoutes";

function App() {
	return (
		<div className="w-full bg-gray-100">
			<header className="flex justify-between items-center h-10 bg-gradient-to-b from-slate-800/70 to-slate-800/50 p-2 gap-3">
				<div className="flex">
					<div>...</div>
					<div>...</div>
				</div>
				<div className="bg-gradient-to-b from-slate-800/40 to-slate-800/20">
					...
				</div>
				<div className="flex bg-gradient-to-b from-slate-800/40 to-slate-800/20">
					<div className="flex px-2 justify-center items-center"></div>
					<input type="text" title="search" className="outline-0"/>
				</div>
			</header>
			<main className="flex min-h-screen w-full bg-white p-4">
				<MainRoutes />
			</main>
			<iframe title="ads" className="flex fixed bottom-0 h-12 w-full text-center py-4 shadow-inner">
			</iframe>
		</div>
	);
}

export default App;
