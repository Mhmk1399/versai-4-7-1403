import Image from 'next/image'
import gold from '../../../public/assets/images/menu/Goldself.jpg'
 const Page = () => {
  return (
    <div>
        <Image src={gold.src} alt="vip" width={500} height={800} className='lg:w-1/2 lg:h-[150vh] object-fill mx-auto' />
    </div>
  )
}
export default Page