import { useState } from 'react'
import '../App.css'
import './Home.css'
import './QuotesPage.css'

interface QuotesPageProps {
  data: {
    name: string
    contact: string
    service: string
    fabric: string
    category: string
    qty: string
  }
  onEdit: () => void
  showNav?: boolean // when false nav will be omitted (used when embedded inside Home)
}

export default function QuotesPage({ data, onEdit, showNav = true }: QuotesPageProps) {
  const [name, setName] = useState(data.name)
  const [contact, setContact] = useState(data.contact)
  const serviceLabel = (val: string) => val || '—'
  const fabricLabel = (val: string) => val || '—'
  const categoryLabel = (val: string) => val || '—'
  const qtyLabel = (val: string) => val || '—'

  return (
    <div className="home quotes-page">
      {/* Navbar (same as Home) */}
      {showNav !== false && (
        <div className="nav-wrap" role="banner">
          <div className="nav" role="navigation" aria-label="Main">
            <a href="/" className="brand" aria-label="Stitch Home">Stitch</a>
            <input type="checkbox" id="nav-toggle" className="nav-toggle" aria-label="Toggle menu" />
            <label htmlFor="nav-toggle" className="hamburger" aria-hidden="true">
              <span></span><span></span><span></span>
            </label>
            <div className="nav-center">
              <div className="menu">
                <div><a href="/" className="menu-link">HOME</a></div>
                <div><a href="/about" className="menu-link">ABOUT</a></div>
                <div><a href="/service" className="menu-link">SERVICE</a></div>
                <div><a href="/facility" className="menu-link">FACILITY</a></div>
                <div><a href="/quality" className="menu-link">QUALITY</a></div>
                <div><a href="/product" className="menu-link">PRODUCT</a></div>
              </div>
            </div>
            <div className="nav-right">
              <a href="/contact" className="contact-link">CONTACT</a>
            </div>
          </div>
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
          <label htmlFor="nav-toggle" className="overlay" aria-hidden="true"></label>
        </div>
      )}

      {/* Quote Summary Section */}
      <div className="quotes-hero">
        <div className="quotes-inner">
          <h1 className="quotes-title">Your Quote Details</h1>
          <p className="quotes-subtitle">Review the selections below. Click the pencil icon to edit.</p>

          <div className="quote-summary">
            {/* Name */}
            <div className="summary-item">
              <label htmlFor="name-input" className="item-label">Name</label>
              <input
                id="name-input"
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>

            {/* Contact */}
            <div className="summary-item">
              <label htmlFor="contact-input" className="item-label">Contact</label>
              <input
                id="contact-input"
                type="tel"
                className="input"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Enter phone number"
              />
            </div>

            {/* Services */}
            <div className="summary-item">
              <div className="item-header">
                <span className="item-label">Services</span>
                <button className="edit-btn" onClick={onEdit} title="Edit" aria-label="Edit services">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L21 5z"></path>
                  </svg>
                </button>
              </div>
              <div className="item-value">{serviceLabel(data.service)}</div>
            </div>

            {/* Fabric */}
            <div className="summary-item">
              <div className="item-header">
                <span className="item-label">Fabric</span>
                <button className="edit-btn" onClick={onEdit} title="Edit" aria-label="Edit fabric">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L21 5z"></path>
                  </svg>
                </button>
              </div>
              <div className="item-value">{fabricLabel(data.fabric)}</div>
            </div>

            {/* Category */}
            <div className="summary-item">
              <div className="item-header">
                <span className="item-label">Category</span>
                <button className="edit-btn" onClick={onEdit} title="Edit" aria-label="Edit category">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L21 5z"></path>
                  </svg>
                </button>
              </div>
              <div className="item-value">{categoryLabel(data.category)}</div>
            </div>

            {/* Quantity */}
            <div className="summary-item">
              <div className="item-header">
                <span className="item-label">Quantity</span>
                <button className="edit-btn" onClick={onEdit} title="Edit" aria-label="Edit quantity">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L21 5z"></path>
                  </svg>
                </button>
              </div>
              <div className="item-value">{qtyLabel(data.qty)}</div>
            </div>
          </div>

          <div className="quote-actions">
            <button className="btn btn-primary" onClick={onEdit}>Edit Selections</button>
            <button className="btn btn-ghost">Submit Quote Request</button>
          </div>
        </div>
      </div>
    </div>
  )
}
