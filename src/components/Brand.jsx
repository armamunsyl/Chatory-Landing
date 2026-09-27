import { Link } from 'react-router-dom'

export default function Brand({ compact = false }) {
  return (
    <Link to="/" className="brand" aria-label="Chatory home">
      <img src="/assets/chatory-symbol.png" alt="" className={compact ? 'brand-symbol compact' : 'brand-symbol'} />
      <span className="brand-copy">
        <strong>Chatory</strong>
        {!compact && <small>Toolkit for ChatGPT</small>}
      </span>
    </Link>
  )
}
