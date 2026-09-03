import { useEffect } from 'react'
import logoImg from '../assets/images/logo.jpg'

export default function Loader({ onComplete }) {
  useEffect(() => {
    const timer = window.setTimeout(onComplete, 1500)
    return () => window.clearTimeout(timer)
  }, [onComplete])

  return <div className="luxury-loader fixed inset-0 z-[100] flex items-center justify-center bg-[#0A0A0A] text-white"><div className="text-center"><img src={logoImg} alt="Watch Keeping" className="mx-auto h-20 w-20 rounded-full border border-[#D4AF37] object-cover"/><p className="mt-5 text-[10px] tracking-[0.45em] text-[#D4AF37]">WATCH KEEPING</p></div></div>
}