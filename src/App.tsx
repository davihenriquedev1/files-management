import { useLocation, useNavigate } from "react-router-dom";
import { MainRoutes } from "./routes/MainRoutes";
import { useEffect, useState } from "react";

const useHistoryTracker = () => {
    const [history, setHistory] = useState<string[]>([]);
	const [currentIndex, setCurrentIndex] = useState(0);
    const location = useLocation();

    useEffect(() => {
        setHistory(prevHistory => {
			const newHistory = [...prevHistory];
            if (newHistory[currentIndex] !== location.pathname) {
				newHistory.splice(currentIndex + 1);
				newHistory.push(location.pathname)
                setCurrentIndex(newHistory.length - 1);
            }
            return newHistory;
        });
    }, [location]);

    return {history, currentIndex, setCurrentIndex};
}

function App() {
	const navigate = useNavigate();
	const location = useLocation();
    const { history, currentIndex, setCurrentIndex } = useHistoryTracker();

	const handleBackRoute = () => { 
		if (currentIndex > 0) {
            navigate(history[currentIndex - 1]);
            setCurrentIndex(currentIndex - 1);
        }
	}
	const handleNextRoute = () => {
        if (currentIndex < history.length - 1) {
            navigate(history[currentIndex + 1]);
            setCurrentIndex(currentIndex + 1);
        }
    };
	
	const hasPrevious = currentIndex > 0;
    const hasNext = currentIndex < history.length - 1;
	
	return (
		<div className="w-full bg-gray-100 box-border">
			<header className="flex justify-between items-center h-10 bg-gradient-to-b from-slate-800/70 to-slate-800/50 p-2 gap-2">
				<div className="flex justify-center items-center gap-1">
					<div className="rounded-full justify-center items-center">
						<button type="button" title="back" onClick={handleBackRoute} disabled={!hasPrevious} className="bg-white/30 p-2 flex justify-center items-center disabled:bg-black/20">
							<img src="/assets/images/arrow.png" alt="" className="w-2"/>
						</button>
					</div>
					<div className="rounded-full justify-center items-center">
						<button type="button" title="next" onClick={handleNextRoute} disabled={!hasNext} className="bg-white/40 p-2 flex justify-center items-center disabled:bg-black/20">
							<img src="/assets/images/arrow.png" alt="" className="w-2 rotate-180"/>
						</button>
					</div>
				</div>
				<div className="bg-gradient-to-b from-slate-800/40 to-slate-800/20 flex-1 p-[2px] ">
					<div className="text-sm text-white/70 truncate">{location.pathname}</div>
				</div>
				<div className="flex flex-1 md:flex-initial bg-gradient-to-b from-slate-800/40 to-slate-800/20">
					<div className="flex px-2 justify-center items-center"></div>
					<input type="text" title="search" className="outline-0 w-full"/>
				</div>
			</header>
			<main className="flex min-h-screen w-full bg-white ">
				<MainRoutes />
			</main>
			<iframe title="ads" className="fixed left-0 bottom-0 h-12 w-full text-center py-4 shadow-inner -z-1">
			</iframe>
		</div>
	);
}

export default App;
