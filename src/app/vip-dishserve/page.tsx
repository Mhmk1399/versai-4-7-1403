import Image from 'next/image'
import vDish from '../../../public/assets/images/menu/vipdicpors.jpg'
 const Page = () => {
  return (
    <div>
        <Image src={vDish.src} alt="vip" width={500} height={800} className='lg:w-1/2 lg:h-[150vh] object-fill mx-auto' />
    </div>
  )
}
export default Page