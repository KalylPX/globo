import Titulo from "./Titulo";
import Frontal from "./Frontal";

function App(){
	const titulo = [
		{
			tit: "Mais Lidas",
		},
	];
	const resto = [
		{
			primeiro: "1",
			segundo: "Funcionaria que denunciou procurador diz que agressor 'desprezava mulheres e teme sair na rua: 'Muito medo'",
		},
		{
			primeiro: "2",
			segundo: "Imposto de Renda 2022: Receita abre consultas ao 2° lote de restituição nessa quinta; veja se você está no grupo ",
		},
		{
			primeiro: "3",
			segundo: "Governo opera para evitar CPI do MEC, que ganhou força após prisão de Milton Ribeiro",
		},
    	{
			primeiro: "4",
			segundo: "Em Itajubá, assaltantes armados atacam agência da Caixa Econômica Federal; 7 ficam feridos",
		},
		{
			primeiro: "5",
			segundo: "Almir Sater é 'parado em blitz' e policiais tietam cantor: 'o senhor é o dono dessa chalana?'",
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
		
		<div className="cont"> 
			{
			resto.map((res, x) => {
					return <Frontal key={x}
							primeiro={res.primeiro}
							segundo={res.segundo}
						/>;
				})
			}
	        </div>
			</div>
	);
}
export default App;