import BannerChido from '../assets/ImagenChida.png'

export default function Banner ({ Theme }) {
  return (
    <div className=''>
      {
        Theme === 'dark'
          ? <img className='w-full opacity-100 pointer-events-none' src={BannerChido} alt='Imagen del Banner' />
          : <img className='w-full opacity-100 pointer-events-none' src={BannerChido} alt='Imagen del Banner' />
      }
    </div>
  )
}
