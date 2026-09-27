import { Link, useLocation } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Brand from './Brand'
import { siteConfig } from '../config/site'

export default function Header() {
  const location = useLocation()
  const isPrivacy = location.pathname === '/privacy'
  const storeReady = Boolean(siteConfig.chromeStoreUrl)

  return (
    <header className="site-header">
      <div className="shell nav-inner">
        <div className="header-brand-group">
          <Brand compact />
          <span className="parent-brand-badge">A product of <strong>{siteConfig.company}</strong></span>
        </div>
        <nav className="nav-links" aria-label="Main navigation">
          {!isPrivacy && <a href="#features">Features</a>}
          {!isPrivacy && <a href="#how-it-works">How it works</a>}
          <Link to="/privacy">Privacy</Link>
          {storeReady ? (
            <a className="nav-cta" href={siteConfig.chromeStoreUrl} target="_blank" rel="noreferrer">
              Add to Chrome <ArrowUpRight size={15} />
            </a>
          ) : (
            <span className="nav-cta muted">Chrome Web Store soon</span>
          )}
        </nav>
      </div>
    </header>
  )
}
