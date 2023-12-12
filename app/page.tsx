import Image from 'next/image'
import { getCldImageUrl } from 'next-cloudinary';
import CldImage from '@/components/CldImage';

export default function Home() {
  return (
    <main className="grid grid-cols-2">
      <CldImage
        src="examples/mario_hkgavf"
        width="1200"
        height="800"
        alt="Mario"
        priority
      />
      <Image
        src={getCldImageUrl({
          src: 'examples/mario_hkgavf',
          width: '1200',
          height: '800',
        })}
        width="1200"
        height="800"
        alt="Mario"
        priority
      />
    </main>
  )
}
