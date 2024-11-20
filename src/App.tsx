import { useLocation, useNavigate } from "react-router-dom";
import { MainRoutes, routesArray } from "./routes/MainRoutes";

function App() {
	const navigate = useNavigate();
	const location = useLocation();
	const routes = routesArray.map((item)=> item.path)
	const currentIndex = routes.findIndex((route) => {
		if (route.includes(':')) {
			const baseRoute = route.split(':')[0];
			return location.pathname.startsWith(baseRoute);
		}
		return route === location.pathname;
	});

	const hasPrevious = currentIndex > 0;
	const hasNext = currentIndex < routes.length - 1;

	const backRoute = ()=> navigate(-1);
	const nextRoute = ()=> navigate(+1);

	return (
		<div className="w-full bg-gray-100 box-border">
			<header className="flex justify-between items-center h-10 bg-gradient-to-b from-slate-800/70 to-slate-800/50 p-2 gap-2">
				<div className="flex justify-center items-center gap-1">
					<div className="rounded-full justify-center items-center">
						<button type="button" title="back" onClick={backRoute} disabled={!hasPrevious} className="bg-white/30 p-2 flex justify-center items-center disabled:bg-black/20">
							<img src="/assets/images/arrow.png" alt="" className="w-2"/>
						</button>
					</div>
					<div className="rounded-full justify-center items-center">
						<button type="button" title="next" onClick={nextRoute} disabled={!hasNext} className="bg-white/40 p-2 flex justify-center items-center disabled:bg-black/20">
							<img src="/assets/images/arrow.png" alt="" className="w-2 rotate-180"/>
						</button>
					</div>
				</div>
				<div className="bg-gradient-to-b from-slate-800/40 to-slate-800/20 flex-1 p-[2px]">
					<div className="text-sm text-white/70">{location.pathname}</div>
				</div>
				<div className="flex bg-gradient-to-b from-slate-800/40 to-slate-800/20">
					<div className="flex px-2 justify-center items-center"></div>
					<input type="text" title="search" className="outline-0"/>
				</div>
			</header>
			<main className="flex min-h-screen w-full bg-white p-4">
				<MainRoutes />
			</main>
			<iframe title="ads" className="fixed left-0 bottom-0 h-12 w-full text-center py-4 shadow-inner -z-1">
			</iframe>
		</div>
	);
}

export default App;
