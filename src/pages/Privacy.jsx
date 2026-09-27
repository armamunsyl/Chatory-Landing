import Header from '../components/Header'
import Footer from '../components/Footer'
import { siteConfig } from '../config/site'

const sections = [
  {
    title: '1. Data Chatory handles',
    body: (
      <>
        <p>To provide its features, Chatory may access data visible to or returned by <code>chatgpt.com</code>, including:</p>
        <ul>
          <li>ChatGPT conversation content needed to create a PDF, including user messages, assistant responses, formatting, images and attachment information when available.</li>
          <li>ChatGPT Library file metadata and file identifiers needed to scan, display, select and delete files that the user chooses.</li>
          <li>Authentication information used by the active ChatGPT session. When necessary for same-origin ChatGPT requests, a session access token may be held temporarily in page memory. Chatory does not save this token to Chrome storage or send it to the developer.</li>
        </ul>
      </>
    ),
  },
  {
    title: '2. How the data is used',
    body: <p>This data is used only to provide Chatory’s user-facing features: creating and previewing conversation PDFs, downloading PDFs requested by the user, scanning the user’s ChatGPT Library, showing file categories and selections, and deleting only files the user explicitly chooses to clear.</p>,
  },
  {
    title: '3. Local processing and storage',
    body: (
      <>
        <p>Chatory processes conversation and Library data in the user’s browser. Chatory does not operate a developer backend that receives conversation content, Library files, or ChatGPT session credentials.</p>
        <p>Chatory uses Chrome extension storage for limited local preferences and operational state, such as the selected Chatory tab, PDF options, and scan progress. It does not store ChatGPT conversation contents or authentication tokens there.</p>
      </>
    ),
  },
  {
    title: '4. Sharing and selling data',
    body: <p>Chatory does not sell user data. Chatory does not share ChatGPT conversation content, Library data, or authentication information with advertisers, data brokers, or other third parties.</p>,
  },
  {
    title: '5. Advertising and analytics',
    body: <p>Chatory does not use user data for personalized advertising or retargeting. The current version does not include developer analytics or tracking services.</p>,
  },
  {
    title: '6. Chrome debugger permission',
    body: <p>Chatory uses Chrome’s <code>debugger</code> permission only when a user requests a PDF download. It temporarily attaches to Chatory’s own PDF preview tab to use Chromium’s PDF rendering capability, then detaches. Chatory does not use this permission to inspect unrelated websites.</p>,
  },
  {
    title: '7. Data deletion',
    body: <p>Local Chatory preferences and operational state are removed when the extension is uninstalled according to Chrome’s extension storage behavior. Files removed through Chatory’s Storage feature are deleted from the user’s ChatGPT Library only after the user explicitly selects and confirms the deletion.</p>,
  },
  {
    title: '8. Security',
    body: <p>Chatory restricts its website access to <code>https://chatgpt.com/*</code>. Requests made to ChatGPT are same-origin HTTPS requests to ChatGPT while the user is signed in.</p>,
  },
  {
    title: '9. Limited Use',
    body: <p>Chatory’s use of information is limited to providing and improving its disclosed user-facing purpose. Chatory does not use or transfer user data for personalized advertising, credit decisions, data brokerage, or unrelated purposes.</p>,
  },
  {
    title: '10. Product independence',
    body: <p>Chatory is an independent third-party browser extension and is not affiliated with, endorsed by, or sponsored by OpenAI.</p>,
  },
  {
    title: '11. Contact',
    body: <p>For privacy or support questions, use the public support contact listed on Chatory’s Chrome Web Store listing.</p>,
  },
]

export default function Privacy() {
  return (
    <div className="page-shell">
      <Header />
      <main className="privacy-page">
        <div className="shell privacy-layout">
          <aside className="privacy-aside">
            <div className="privacy-aside-card">
              <img src="/assets/chatory-symbol.png" alt="" />
              <span>Chatory Privacy</span>
              <small>Effective {siteConfig.effectiveDate}</small>
              <div className="privacy-summary">
                <strong>At a glance</strong>
                <p>Local browser processing.</p>
                <p>No developer analytics.</p>
                <p>No sale of your data.</p>
              </div>
            </div>
          </aside>
          <article className="privacy-document">
            <span className="section-kicker">Legal & privacy</span>
            <h1>Privacy Policy</h1>
            <p className="privacy-lead">Chatory is a browser extension that helps users export ChatGPT conversations as PDFs and manage files in their ChatGPT Library.</p>
            <div className="privacy-notice">
              <strong>Plain-language summary</strong>
              <p>Chatory works inside your browser. The current version does not send your ChatGPT conversations, Library files, or ChatGPT session credentials to a Chatory developer backend.</p>
            </div>
            {sections.map((section) => (
              <section className="policy-section" key={section.title}>
                <h2>{section.title}</h2>
                {section.body}
              </section>
            ))}
          </article>
        </div>
      </main>
      <Footer />
    </div>
  )
}
