import Titulo from "./Titulo";

function App(){
	const titulo = [
		{
			tit: "Mais Lidas",
		},
	];
	return(
		<div>
			{
				titulo.map((tis) => {
					return <Titulo 
							tit={tis.tit}
						/>;
				})
			}
			</div>
	);
}
export default App;