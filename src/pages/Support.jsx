import { useState } from 'react'
import {
  Archive,
  ChevronDown,
  Chrome,
  ExternalLink,
  FileText,
  Home as HomeIcon,
  LifeBuoy,
  Mail,
  Puzzle,
  ShieldCheck,
  Wrench,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PageMeta from '../components/PageMeta'
import { siteConfig } from '../config/site'

const supportSubject = 'Chatory Support Request'
const supportBody = `Hello Chatory Support,

Issue:
What I was trying to do:
Chrome version:
Chatory version:

Thank you.`

const supportMailto = `mailto:${siteConfig.supportEmail}?subject=${encodeURIComponent(supportSubject)}&body=${encodeURIComponent(supportBody)}`

const helpCards = [
  {
    icon: FileText,
    title: 'PDF Export',
    description: 'Help with previews, PDF generation, formatting, images, tables, code, math, and long conversations.',
  },
  {
    icon: Archive,
    title: 'Storage Cleaner',
    description: 'Help with scanning your ChatGPT Library, selecting files, categories, and cleanup operations.',
  },
  {
    icon: Puzzle,
    title: 'Installation & Access',
    description: 'Help with installing Chatory, opening the extension, permissions, and using it on ChatGPT.',
  },
  {
    icon: Wrench,
    title: 'General Issues',
    description: 'Troubleshoot unexpected behavior, loading problems, or features that are not responding.',
  },
]

const commonIssues = [
  {
    question: 'Chatory does not appear on ChatGPT',
    answer: (
      <ol>
        <li>Make sure Chatory is installed and enabled in Chrome.</li>
        <li>Open or refresh <code>https://chatgpt.com</code>.</li>
        <li>Open a conversation and look for the Chatory launcher near the ChatGPT header controls.</li>
        <li>If it still does not appear, reload the ChatGPT page once.</li>
      </ol>
    ),
  },
  {
    question: 'My current conversation is not detected',
    answer: <p>Open the conversation you want to export and give Chatory a moment to refresh the conversation information. If the title or message information looks outdated, refresh the ChatGPT tab and reopen Chatory.</p>,
  },
  {
    question: 'PDF export is not working',
    answer: <p>Make sure the current conversation has fully loaded. For very long conversations, Chatory may need additional time to collect the conversation before generating the document. Try Preview first and then Export PDF.</p>,
  },
  {
    question: 'Some content looks different in the exported PDF',
    answer: <p>Chatory attempts to preserve supported headings, paragraphs, lists, code, tables, math, and images. Complex or newly introduced ChatGPT content types may render differently from the original ChatGPT interface.</p>,
  },
  {
    question: 'Storage scan is taking a long time',
    answer: <p>Large ChatGPT Libraries can contain thousands of files. Chatory discovers files progressively, so larger libraries naturally take longer. You can stop the scan and work with files that have already been discovered.</p>,
  },
  {
    question: 'Storage cleanup did not remove every selected file',
    answer: <p>ChatGPT may temporarily limit a large number of requests. Chatory may retry cleanup operations or process them in smaller groups. After cleanup, scan your Library again to confirm the remaining files.</p>,
  },
  {
    question: 'Can I choose exactly what gets deleted?',
    answer: <p>Yes. Chatory lets you review file categories and choose which files you want to remove. Cleanup actions should only be performed on files selected by the user.</p>,
  },
  {
    question: 'Does closing the Chatory panel stop an active operation?',
    answer: <p>Some operations may continue while the related ChatGPT tab remains open. Reopen Chatory to check the current operation state.</p>,
  },
]

const faqs = [
  {
    question: 'What is Chatory?',
    answer: <p>Chatory is a productivity toolkit for ChatGPT that helps users export conversations as clean PDFs and manage files in their ChatGPT Library.</p>,
  },
  {
    question: 'Where does Chatory work?',
    answer: <p>Chatory is designed to work on <code>chatgpt.com</code> in Google Chrome.</p>,
  },
  {
    question: 'Does Chatory send my conversations to NeonBytes servers?',
    answer: <p>According to the current Privacy Policy, Chatory processes conversation and Library data in the user’s browser and does not operate a developer backend that receives conversation content, Library files, or ChatGPT session credentials.</p>,
  },
  {
    question: 'Why does Chatory request Chrome permissions?',
    answer: <p>Chatory requests browser permissions needed to provide its documented features on ChatGPT. These permissions support the PDF Export and Storage Cleaner workflows described on this site.</p>,
  },
  {
    question: 'Is Chatory made by OpenAI?',
    answer: <p>No. Chatory is an independent product of {siteConfig.company} and is not affiliated with or endorsed by OpenAI.</p>,
  },
]

function AccordionItem({ item, index, group, isOpen, onToggle }) {
  const buttonId = `${group}-button-${index}`
  const panelId = `${group}-panel-${index}`

  return (
    <div className="support-accordion-item">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="support-accordion-trigger"
        >
          <span>{item.question}</span>
          <ChevronDown aria-hidden="true" className={isOpen ? 'is-open' : ''} />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
        className="support-accordion-panel"
      >
        {item.answer}
      </div>
    </div>
  )
}

function AccordionGroup({ items, group, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)

  return (
    <div className="support-accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={item.question}
          item={item}
          index={index}
          group={group}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
        />
      ))}
    </div>
  )
}

export default function Support() {
  const storeReady = Boolean(siteConfig.chromeStoreUrl)

  return (
    <div className="page-shell">
      <PageMeta
        title="Chatory Support — Help & Troubleshooting"
        description="Get help with Chatory PDF Export, ChatGPT Library cleanup, installation, permissions, and troubleshooting."
      />
      <Header />
      <main className="support-page">
        <section className="support-hero">
          <div className="shell support-hero-grid">
            <div className="support-hero-copy">
              <div className="eyebrow-pill"><LifeBuoy size={15} /> Chatory Support</div>
              <h1>How can we help?</h1>
              <p>Find answers, troubleshooting steps, and support for Chatory's PDF Export and Storage Cleaner.</p>
              <div className="hero-actions support-actions">
                <a className="button button-primary" href="#common-issues">Browse common issues</a>
                <a className="button button-secondary" href={supportMailto}><Mail size={18} /> Contact support</a>
              </div>
            </div>
            <div className="support-hero-panel" aria-label="Support coverage">
              <img src="/assets/chatory-symbol.png" alt="" />
              <strong>Chatory help desk</strong>
              <p>Support for PDF exports, Library cleanup, installation, and access issues.</p>
              <span><ShieldCheck size={16} /> Public support page for Chrome Web Store users</span>
            </div>
          </div>
        </section>

        <section className="section support-section">
          <div className="shell">
            <div className="section-heading narrow">
              <span className="section-kicker">Quick help</span>
              <h2>Start with the area that matches your issue.</h2>
            </div>
            <div className="support-card-grid">
              {helpCards.map(({ icon: Icon, title, description }) => (
                <article className="support-card" key={title}>
                  <div className="feature-icon"><Icon size={23} /></div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="common-issues" className="section section-soft support-section">
          <div className="shell support-narrow">
            <div className="section-heading narrow">
              <span className="section-kicker">Common issues</span>
              <h2>Troubleshooting steps.</h2>
              <p>Try these steps before contacting support.</p>
            </div>
            <AccordionGroup items={commonIssues} group="common-issues" />
          </div>
        </section>

        <section className="section support-section">
          <div className="shell support-narrow">
            <div className="section-heading narrow">
              <span className="section-kicker">Frequently asked questions</span>
              <h2>Answers before you email.</h2>
            </div>
            <AccordionGroup items={faqs} group="support-faqs" />
          </div>
        </section>

        <section className="support-contact-section">
          <div className="shell support-contact-grid">
            <div>
              <span className="section-kicker">Still need help?</span>
              <h2>Contact the Chatory support team.</h2>
              <p>If your issue is not covered above, contact the Chatory support team and include enough information for us to reproduce the problem.</p>
              <a className="button button-primary" href={supportMailto}><Mail size={18} /> Contact support</a>
              <a className="support-email" href={supportMailto}>{siteConfig.supportEmail}</a>
            </div>
            <div className="support-checklist" aria-label="What to include in your support request">
              <strong>Please include</strong>
              <ul>
                <li>a short description of the issue</li>
                <li>what you were trying to do</li>
                <li>your Chrome version</li>
                <li>your Chatory version</li>
                <li>a screenshot if relevant</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section support-section">
          <div className="shell">
            <div className="section-heading narrow">
              <span className="section-kicker">Useful links</span>
              <h2>Keep moving.</h2>
            </div>
            <div className="useful-links-grid">
              <Link className="useful-link-card" to="/">
                <HomeIcon />
                <span>
                  <strong>Visit Chatory</strong>
                  <small>Chatory Home</small>
                </span>
              </Link>
              <Link className="useful-link-card" to="/privacy">
                <ShieldCheck />
                <span>
                  <strong>Read our Privacy Policy</strong>
                  <small>Privacy Policy</small>
                </span>
              </Link>
              {storeReady ? (
                <a className="useful-link-card" href={siteConfig.chromeStoreUrl} target="_blank" rel="noreferrer">
                  <Chrome />
                  <span>
                    <strong>Chrome Web Store</strong>
                    <small>Add Chatory to Chrome</small>
                  </span>
                  <ExternalLink className="useful-link-arrow" />
                </a>
              ) : (
                <span className="useful-link-card is-disabled" aria-label="Chrome Web Store listing coming soon">
                  <Chrome />
                  <span>
                    <strong>Chrome Web Store</strong>
                    <small>Coming soon</small>
                  </span>
                </span>
              )}
            </div>
            <p className="support-legal-note">
              Chatory is a product of {siteConfig.company} and is not affiliated with or endorsed by OpenAI.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
