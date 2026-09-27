import { Link, useLocation } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Brand from './Brand'
import { siteConfig } from '../config/site'

export default function Header() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isPrivacy = location.pathname === '/privacy'
  const isSupport = location.pathname === '/support'
  const storeReady = Boolean(siteConfig.chromeStoreUrl)

  return (
    <header className="site-header">
      <div className="shell nav-inner">
        <div className="header-brand-group">
          <Brand compact />
        </div>
        <nav className="nav-links" aria-label="Main navigation">
          {isHome && <a href="#features">Features</a>}
          {isHome && <a href="#how-it-works">How it works</a>}
          <Link to="/support" aria-current={isSupport ? 'page' : undefined}>Support</Link>
          <Link to="/privacy" aria-current={isPrivacy ? 'page' : undefined}>Privacy</Link>
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
