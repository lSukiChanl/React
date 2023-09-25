import HentaiBanner from '../assets/Banner18C.png'
import '../styles/Banner.css'

export default function Banner () {
  return (
    <div className='FondoBanner'>
      <img className='BannerIMG' src={HentaiBanner} alt='Imagen del Banner' />
    </div>
  )
}
