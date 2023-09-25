import IMGLogo from '../Assets/Leyenda.png'
import '../Styles/Copyright.css'

export default function Copyright () {
  // <h2 className='featurette-heading TituloOscuro '>❤ Creditos ❤</h2>
  return (
    <div>
      <div className='container mx-auto'>
        <br />
        <div className='basis-6/12'>
          <img className='IMG' src={IMGLogo} />
          <br />
        </div>
      </div>
      <hr className=' bg-neutral-800' />
      <p className='pb-5 Creditos'>Copyright © 2021 IchiMonogatari. All Rights Reserved Disclaimer, The site IchiMonogatari does not store any files on its server, All contents are provided by non-affiliated third parties.</p>

    </div>
  )
}
