import { useState } from 'react'
import '../App.css'
import './Home.css'
import QuotesPage from './QuotesPage'

interface HomeProps {
  onGetQuotes?: (data: { service: string; fabric: string; category: string; qty: string }) => void
} // callback is now optional since Home handles its own state

export default function Home({ onGetQuotes }: HomeProps) {
  const [formData, setFormData] = useState({
    service: '',
    fabric: '',
    category: '',
    qty: ''
  })

  const [showSummary, setShowSummary] = useState(false)
  const [submittedData, setSubmittedData] = useState(formData)

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleGetQuotes = () => {
      // store data locally and show the quotes summary instead of navigating
    setSubmittedData(formData)
    setShowSummary(true)
    onGetQuotes?.(formData)
  }

  const handleEdit = () => {
    setShowSummary(false)
  }

  return (
    <div className="home">
      {/* Navbar */}
      <div className="nav-wrap" role="banner">
        <div className="nav" role="navigation" aria-label="Main">
          {/* Left: Brand */}
          <a href="/" className="brand" aria-label="Stitch Home">Stitch</a>

          {/* Hidden checkbox drives hamburger & drawer (pure CSS) */}
          <input
            type="checkbox"
            id="nav-toggle"
            className="nav-toggle"
            aria-label="Toggle menu"
          />

          {/* Center: Hamburger (mobile) */}
          <label htmlFor="nav-toggle" className="hamburger" aria-hidden="true">
            <span></span><span></span><span></span>
          </label>

          {/* Center: Desktop menu */}
          <div className="nav-center">
            <div className="menu">
              <div><a href="/" className="menu-link active">HOME</a></div>
              <div><a href="/about" className="menu-link">ABOUT</a></div>
              <div><a href="/service" className="menu-link">SERVICE</a></div>
              <div><a href="/facility" className="menu-link">FACILITY</a></div>
              <div><a href="/quality" className="menu-link">QUALITY</a></div>
              <div><a href="/product" className="menu-link">PRODUCT</a></div>
            </div>
          </div>

          {/* Right: Contact */}
          <div className="nav-right">
            <a href="/contact" className="contact-link">CONTACT</a>
          </div>
        </div>

        {/* Drawer (mobile) */}
        <div className="drawer" role="dialog" aria-modal="true" aria-label="Mobile menu">
          <div className="drawer-inner">
            <div><a href="/" className="drawer-link">HOME</a></div>
            <div><a href="/about" className="drawer-link">ABOUT</a></div>
            <div><a href="/service" className="drawer-link">SERVICE</a></div>
            <div><a href="/facility" className="drawer-link">FACILITY</a></div>
            <div><a href="/quality" className="drawer-link">QUALITY</a></div>
            <div><a href="/product" className="drawer-link">PRODUCT</a></div>
            <div className="sep"></div>
            <div><a href="/contact" className="drawer-link strong">CONTACT</a></div>
          </div>
        </div>

        {/* Dim overlay (click to close) */}
        <label htmlFor="nav-toggle" className="overlay" aria-hidden="true"></label>
      </div>

      {/* Example page content under navbar */}
      {showSummary ? (
        <QuotesPage
          data={{ name: '', contact: '', ...submittedData }}
          onEdit={handleEdit}
          showNav={false}
        />
      ) : (
        <>
          {/* ===== Hero Section ===== */}
          <div className="hero">
            <div className="hero-inner">
              {/* Badge */}
              <div className="hero-badge">Since 1920</div>
    {/* Headline */}
    <div className="hero-title">
      Manufacturing Exclusive<br />Hosiery Products.
    </div>

    {/* Subheadline */}
    <div className="hero-subtitle">
      Vertically Integrated Manufacturer &amp;<br />
      Exporter Of Knitwear &amp; Woven Garments
    </div>

    {/* Action buttons */}
    <div className="hero-actions">
      <div className="btn btn-primary">buy</div>
      <div className="btn btn-ghost">Rent</div>
    </div>

    {/* Quote Card */}
    <div className="quote-card">
      {/* Services */}
      <div className="field">
        <div className="label">Services</div>
        <div className="control">
          <select title="Services" className="select" value={formData.service} onChange={(e) => handleChange('service', e.target.value)}>
            <option value="">Select service</option>
            <option>Knitting</option>
            <option>Dyeing</option>
            <option>Stitching</option>
            <option>Finishing</option>
          </select>
        </div>
      </div>

      {/* Fabric */}
      <div className="field">
        <div className="label">Fabric</div>
        <div className="control">
          <select title="Fabric" className="select" value={formData.fabric} onChange={(e) => handleChange('fabric', e.target.value)}>
            <option value="">Have Fabric?</option>
            <option>I have Fabric</option>
            <option>I need Fabric</option>
            <option>Both</option>
          </select>
        </div>
      </div>

      {/* Category */}
      <div className="field">
        <div className="label">Category</div>
        <div className="control">
          <select title="Category" className="select" value={formData.category} onChange={(e) => handleChange('category', e.target.value)}>
            <option value="">Select Category</option>
            <option>T-Shirts</option>
            <option>Hoodies</option>
            <option>Socks</option>
            <option>Bottoms</option>
          </select>
        </div>
      </div>

      {/* QTY */}
      <div className="field">
        <div className="label">QTY</div>
        <div className="control">
          <select title="Quantity" className="select" value={formData.qty} onChange={(e) => handleChange('qty', e.target.value)}>
            <option value="">Select Qty</option>
            <option>100–499</option>
            <option>500–1,999</option>
            <option>2,000–9,999</option>
            <option>10,000+</option>
          </select>
        </div>
      </div>

      {/* CTA */}
      <div className="field field-cta">
        <div className="btn btn-outline" onClick={handleGetQuotes}>Get Quotes</div>
      </div>
    </div>
  </div>
</div>
{/* ===== /Hero Section ===== */}
        </>
      )}
    </div>
  )
}