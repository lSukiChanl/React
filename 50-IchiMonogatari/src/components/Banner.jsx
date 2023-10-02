import NormalBanner from '../assets/BannerC.png'
import '../styles/Banner.css'

export default function Banner () {
  return (
    <div className='FondoBanner'>
      <img className='BannerIMG' src={NormalBanner} alt='Imagen del Banner' />
    </div>
  )
}
