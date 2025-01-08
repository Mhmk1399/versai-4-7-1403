import Image from 'next/image'
import sDish from '../../../public/assets/images/menu/silverdisporc.jpg'
 const Page = () => {
  return (
    <div>
        <Image src={sDish.src} alt="vip" width={500} height={800} className='lg:w-1/2 lg:h-[150vh] object-fill mx-auto' />
    </div>
  )
}
export default Page