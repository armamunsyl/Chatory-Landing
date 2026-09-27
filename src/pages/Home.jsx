import {
  Check,
  FileText,
  FolderOpen,
  Image as ImageIcon,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  Trash2,
} from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import StoreButton from '../components/StoreButton'
import PageMeta from '../components/PageMeta'

const featureCards = [
  {
    icon: FileText,
    eyebrow: 'PDF Export',
    title: 'Turn conversations into clean, readable PDFs.',
    copy: 'Preview and export ChatGPT conversations with structured text, images, code, tables and math preserved as cleanly as possible.',
  },
  {
    icon: Trash2,
    eyebrow: 'Storage Cleaner',
    title: 'Scan your Library and remove only what you choose.',
    copy: 'See images, PDFs and other files by category, select individual items or whole groups, and clear unwanted files without hours of manual cleanup.',
  },
]

const steps = [
  { number: '01', title: 'Open Chatory', copy: 'Use the Chatory icon directly inside ChatGPT.' },
  { number: '02', title: 'Choose a tool', copy: 'Export the current conversation or scan your ChatGPT Library.' },
  { number: '03', title: 'Stay in control', copy: 'Preview PDFs before saving and choose exactly which files are removed.' },
]

export default function Home() {
  return (
    <div className="page-shell">
      <PageMeta
        title="Chatory — Toolkit for ChatGPT"
        description="Chatory is a utility toolkit for ChatGPT that exports conversations as polished PDFs and helps you clean your ChatGPT Library."
      />
      <Header />
      <main>
        <section className="hero">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
          <div className="shell hero-grid">
            <div className="hero-copy">
              <div className="eyebrow-row">
                <div className="eyebrow-pill"><Sparkles size={15} /> Storage & conversation tools</div>
              </div>
              <h1>Your ChatGPT workflow, <span>cleaner and easier.</span></h1>
              <p>
                Chatory helps you export conversations as polished PDFs and clean unwanted files from your ChatGPT Library — without turning simple tasks into long manual work.
              </p>
              <div className="hero-actions">
                <StoreButton />
                <a className="button button-secondary" href="#features">Explore features</a>
              </div>
              <div className="trust-row">
                <span><Check size={15} /> Works inside ChatGPT</span>
                <span><Check size={15} /> Local browser processing</span>
                <span><Check size={15} /> You choose what gets deleted</span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="visual-frame">
                <img src="/assets/store-overview.png" alt="Chatory PDF Export and Storage Cleaner overview" />
              </div>
            </div>
          </div>
        </section>

        <section className="logo-strip">
          <div className="shell logo-strip-inner">
            <span>Built for people who use ChatGPT every day</span>
            <div className="audience-list">
              <span>Students</span><i />
              <span>Researchers</span><i />
              <span>Developers</span><i />
              <span>Writers</span><i />
              <span>Power users</span>
            </div>
          </div>
        </section>

        <section id="features" className="section section-soft">
          <div className="shell">
            <div className="section-heading narrow">
              <span className="section-kicker">Two focused tools</span>
              <h2>Less clutter. Better exports.</h2>
              <p>Chatory focuses on two everyday ChatGPT problems and keeps both workflows simple.</p>
            </div>
            <div className="feature-grid">
              {featureCards.map(({ icon: Icon, eyebrow, title, copy }) => (
                <article className="feature-card" key={title}>
                  <div className="feature-icon"><Icon size={23} /></div>
                  <span className="feature-eyebrow">{eyebrow}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section product-section">
          <div className="shell product-grid">
            <div className="product-copy">
              <span className="section-kicker">Conversation export</span>
              <h2>Save the chat, not the browser chrome.</h2>
              <p>
                Export the conversation you actually care about. Chatory creates a clean document-style preview before saving your PDF.
              </p>
              <ul className="check-list">
                <li><Check /> Conversation title and editable file name</li>
                <li><Check /> User prompts and ChatGPT responses</li>
                <li><Check /> Images, code, tables and math when available</li>
                <li><Check /> Preview first or export directly</li>
              </ul>
            </div>
            <div className="product-image-card tilted-left">
              <img src="/assets/store-pdf.png" alt="Chatory PDF export feature" />
            </div>
          </div>
        </section>

        <section className="section section-green product-section">
          <div className="shell product-grid reverse">
            <div className="product-copy light-copy">
              <span className="section-kicker light">Library cleanup</span>
              <h2>Thousands of files should not take hours to clean.</h2>
              <p>
                Scan your ChatGPT Library, review categories, select exactly what you want gone, and let Chatory handle the repetitive cleanup.
              </p>
              <div className="mini-feature-grid">
                <div><ImageIcon /><strong>Images</strong><span>Review generated and uploaded images.</span></div>
                <div><FileText /><strong>PDFs</strong><span>See PDFs separately from other files.</span></div>
                <div><FolderOpen /><strong>Other files</strong><span>Keep the rest organized by type.</span></div>
                <div><Trash2 /><strong>Selective clear</strong><span>Delete only files you choose.</span></div>
              </div>
            </div>
            <div className="product-image-card dark-shadow">
              <img src="/assets/store-storage.png" alt="Chatory Storage Cleaner feature" />
            </div>
          </div>
        </section>

        <section id="how-it-works" className="section">
          <div className="shell">
            <div className="section-heading narrow">
              <span className="section-kicker">How it works</span>
              <h2>Three steps. No learning curve.</h2>
            </div>
            <div className="steps-grid">
              {steps.map((step) => (
                <article className="step-card" key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft privacy-preview">
          <div className="shell privacy-card">
            <div>
              <span className="section-kicker">Private by design</span>
              <h2>Your ChatGPT content stays in your browser.</h2>
              <p>
                Chatory does not run a developer backend that receives your conversations, Library files or ChatGPT session credentials. The extension uses access only to provide the features you request.
              </p>
              <a href="/privacy" className="text-link">Read the full Privacy Policy →</a>
            </div>
            <div className="privacy-points">
              <div><ShieldCheck /><span><strong>No developer analytics</strong><small>No tracking service in the current version.</small></span></div>
              <div><LockKeyhole /><span><strong>No data selling</strong><small>Your chats are not sold to advertisers or data brokers.</small></span></div>
              <div><Trash2 /><span><strong>Explicit deletion</strong><small>Library files are removed only after you choose them.</small></span></div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="shell cta-card">
            <img src="/assets/chatory-symbol.png" alt="" />
            <span className="section-kicker light">Chatory for Chrome</span>
            <h2>Export what matters. Clear what does not.</h2>
            <p>A focused toolkit for people who use ChatGPT as part of their real work and study.</p>
            <StoreButton secondary />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
