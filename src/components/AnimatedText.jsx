import { motion } from 'framer-motion'

export default function AnimatedText({ children, className = '', delay = 0 }) {
  return <span className={`block overflow-hidden ${className}`}><motion.span className="block" initial={{ y: '105%' }} whileInView={{ y: 0 }} viewport={{ once: true, margin: '-10% 0px' }} transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}>{children}</motion.span></span>
}