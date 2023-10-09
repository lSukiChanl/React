import Banner18Hentai from '../assets/Definitivas/Banner18Pro.png'

export default function Banner18 ({ Theme }) {
  return (
    <div className=''>
      {
        Theme === 'dark'
          ? <img className='w-full pointer-events-none' src={Banner18Hentai} alt='Imagen del Banner' />
          : <img className='w-full pointer-events-none' src={Banner18Hentai} alt='Imagen del Banner' />
      }
    </div>
  )
}
