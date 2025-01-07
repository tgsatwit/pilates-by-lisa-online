import Link from 'next/link'
import Image from 'next/image'
import LogoImg from '@/public/images/logo-light-lrg.png'

export default function Logo() {
  return (
    <Link className="inline-flex" href="/" aria-label="Pilates by Lisa">
      <Image className="max-w-none" src={LogoImg} width={200} height={50} priority alt="Pilates by Lisa" />
    </Link>
  )
}