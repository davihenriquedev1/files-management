import { Link } from "react-router-dom";

export const Home = () => {
    return (
		<div className="flex flex-col w-full">
			<ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-10">
				<li className="flex flex-col transition-all">
					<Link to={`/images`} className="w-fit p-2 hover:shadow-lg hover:rounded-md">
						<img src="/images/folder.png" alt="" className="w-20"/>
					</Link>
					<span className="px-2 text-sm font-medium">Images</span>
				</li>
			</ul>
		</div>	
    );
};