import BannerDark from '../assets/Definitivas/BannerPro.png'

export default function Banner ({ Theme }) {
  return (
    <div className=''>
      {
        Theme === 'dark'
          ? <img className='w-full pointer-events-none' src={BannerDark} alt='Imagen del Banner' />
          : <img className='w-full pointer-events-none' src={BannerDark} alt='Imagen del Banner' />
      }
    </div>
  )
}
