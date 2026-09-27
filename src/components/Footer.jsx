import { Link } from 'react-router-dom'
import Brand from './Brand'
import { siteConfig } from '../config/site'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <Brand compact />
          <p className="footer-note">Clean exports. A lighter library. A simpler ChatGPT workflow.</p>
          <p className="footer-parent">A product of <strong>{siteConfig.company}</strong></p>
        </div>
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <span>Version {siteConfig.version}</span>
        </div>
      </div>
      <div className="shell legal-line">
        © 2026 {siteConfig.company}. Chatory is a product of {siteConfig.company}. Chatory is an independent third-party browser extension and is not affiliated with, endorsed by, or sponsored by OpenAI.
      </div>
    </footer>
  )
}
