import { Chrome, ArrowRight } from 'lucide-react'
import { siteConfig } from '../config/site'

export default function StoreButton({ secondary = false }) {
  const ready = Boolean(siteConfig.chromeStoreUrl)
  const className = secondary ? 'button button-secondary' : 'button button-primary'

  if (ready) {
    return (
      <a className={className} href={siteConfig.chromeStoreUrl} target="_blank" rel="noreferrer">
        <Chrome size={19} /> Add to Chrome <ArrowRight size={17} />
      </a>
    )
  }

  return (
    <span className={`${className} disabled-button`} aria-label="Chrome Web Store listing coming soon">
      <Chrome size={19} /> Chrome Web Store soon
    </span>
  )
}
