import IMGE404 from '../Assets/NoDatos.png'
import '../Styles/E404.css'

export default function E404 ({ BotonLuces }) {
  return (
    <div className='container mx-auto'>
      <h2 className={`${BotonLuces ? 'TituloClaro' : 'TituloOscuro'}`}>❤ ERROR 404 ❤</h2>
      <img className='IMGBuscando' src={IMGE404} />
      <h2 className={`${BotonLuces ? 'TituloClaro' : 'TituloOscuro'}`}>❤ PAGINA NO ENCONTRADA ❤</h2>
    </div>
  )
}
