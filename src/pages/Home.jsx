import { useState } from 'react'
import { products } from '../data/products.js'
import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import TrustBar from '../components/TrustBar.jsx'
import FilterBar from '../components/FilterBar.jsx'
import ProductGrid from '../components/ProductGrid.jsx'
import ProductModal from '../components/ProductModal.jsx'
import DisclaimerModal from '../components/DisclaimerModal.jsx'
import CartDrawer from '../components/CartDrawer.jsx'
import TechnicalBadge from '../components/TechnicalBadge.jsx'
import Footer from '../components/Footer.jsx'
import AboutStorySection from '../components/AboutStorySection.jsx'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All'); const [searchQuery, setSearchQuery] = useState(''); const [selectedProduct, setSelectedProduct] = useState(null); const [isModalOpen, setModalOpen] = useState(false); const [isDisclaimerOpen, setDisclaimerOpen] = useState(false); const [pending, setPending] = useState(null); const [cartItems, setCartItems] = useState([]); const [isCartOpen, setCartOpen] = useState(false)
  const filtered = products.filter((product) => { const categoryMatch = selectedCategory === 'All' || (selectedCategory === 'Leather Strap' ? product.strap === 'Leather' : selectedCategory === 'Metal Bracelet' ? product.strap === 'Metal' : selectedCategory === 'Pre-Order' ? product.isPreOrder : product.category === selectedCategory); const query = searchQuery.toLowerCase(); return categoryMatch && (!query || product.brand.toLowerCase().includes(query) || product.model.toLowerCase().includes(query)) })
  const addToCart = (product, qty) => { setCartItems((items) => { const found = items.find((item) => item.id === product.id); return found ? items.map((item) => item.id === product.id ? { ...item, qty: item.qty + qty } : item) : [...items, { ...product, qty }] }); setModalOpen(false); setCartOpen(true) }
  const quickView = (product) => { setSelectedProduct(product); setModalOpen(true) }
  const updateQty = (id, qty) => setCartItems((items) => qty < 1 ? items.filter((item) => item.id !== id) : items.map((item) => item.id === id ? { ...item, qty } : item))
  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0)
  return <><Header cartCount={cartCount} searchQuery={searchQuery} setSearchQuery={setSearchQuery} onCartOpen={() => setCartOpen(true)}/><main><Hero/><TrustBar/><FilterBar selected={selectedCategory} setSelected={setSelectedCategory}/><ProductGrid products={filtered} onQuickView={quickView}/><TechnicalBadge/></main><AboutStorySection /><Footer/><ProductModal key={selectedProduct?.id} product={selectedProduct} isOpen={isModalOpen} onClose={() => setModalOpen(false)} onAddToCart={addToCart} onRequireDisclaimer={(product, qty) => { setPending({ product, qty }); setDisclaimerOpen(true); setModalOpen(false) }}/><DisclaimerModal isOpen={isDisclaimerOpen} product={pending?.product} onCancel={() => setDisclaimerOpen(false)} onConfirm={() => { addToCart(pending.product, pending.qty); setDisclaimerOpen(false); setPending(null) }}/>

  <CartDrawer isOpen={isCartOpen} onClose={() => setCartOpen(false)} items={cartItems} onUpdateQty={updateQty} onRemove={(id) => updateQty(id, 0)} onCheckout={() => window.alert('Thank you. We will contact you to confirm your order.')}/></>
}