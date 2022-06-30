import "./Frontal.css";

function Frontal({primeiro, segundo}){
	return( 
		<div className='Tudo'>
		<p className='numero'>{primeiro}</p>
		<h5 className='subtitulo'>{segundo}</h5>
		</div>
	);
}
export default Frontal;
