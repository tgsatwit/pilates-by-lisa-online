import Link from 'next/link'
import Image from 'next/image'
import LogoImg from '@/public/images/logo-light-lrg.png'

export default function Logo() {
  return (
    <Link className="inline-flex" href="/" aria-label="Cruip">
      <Image className="max-w-none" src={LogoImg} width={260} height={65} priority alt="Stellar" />
    </Link>
  )
}