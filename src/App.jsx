import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Home from './pages/Home.jsx'
import Loader from './components/Loader.jsx'

export default function App() {
	const [loading, setLoading] = useState(true)
	useEffect(() => { AOS.init({ duration: 1100, easing: 'ease-out-cubic', once: true, offset: 120, delay: 50 }) }, [])
	return <><AnimatePresence>{loading && <Loader onComplete={() => setLoading(false)} />}</AnimatePresence><Home /></>
}
