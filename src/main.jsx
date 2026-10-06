import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const ArrowUpRight = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 19 19 5M8 5h11v11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ArrowRight = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Spark = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="m12 2 1.7 7.3L21 11l-7.3 1.7L12 20l-1.7-7.3L3 11l7.3-1.7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
)

function Logo() {
  return <a className="logo" href="#top" aria-label="Fermor home"><span className="logo-mark">f</span><span>fermor</span></a>
}

function DashboardCard() {
  return (
    <div className="dashboard-wrap">
      <div className="dashboard-orbit orbit-one" />
      <div className="dashboard-orbit orbit-two" />
      <div className="dashboard-card">
        <div className="dashboard-topline">
          <div className="dashboard-brand"><span className="mini-dot" /> <span>Overview</span></div>
          <button className="icon-button" aria-label="More options">•••</button>
        </div>
        <div className="balance-label">Total balance <span className="eye">shown in USD</span></div>
        <div className="balance">$48,240<span>.82</span></div>
        <div className="balance-change"><span className="change-pill">↗ 12.4%</span><span>vs. last month</span></div>
        <div className="chart-wrap">
          <div className="chart-grid"><span /><span /><span /><span /></div>
          <svg className="chart" viewBox="0 0 460 140" preserveAspectRatio="none" aria-label="Balance trend chart">
            <defs>
              <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#c7f36b" stopOpacity=".3" /><stop offset="1" stopColor="#c7f36b" stopOpacity="0" /></linearGradient>
            </defs>
            <path d="M0 118 C28 120, 32 101, 59 105 S93 91, 116 96 S143 75, 168 83 S194 74, 220 77 S250 53, 272 61 S303 65, 327 42 S356 50, 379 32 S413 34, 460 9 V140 H0Z" fill="url(#chartFill)" />
            <path d="M0 118 C28 120, 32 101, 59 105 S93 91, 116 96 S143 75, 168 83 S194 74, 220 77 S250 53, 272 61 S303 65, 327 42 S356 50, 379 32 S413 34, 460 9" fill="none" stroke="#c7f36b" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <div className="chart-labels"><span>May 01</span><span>May 07</span><span>May 14</span><span>May 21</span><span>May 28</span></div>
        </div>
        <div className="dashboard-foot">
          <div><span className="foot-icon income">↗</span><span><small>Income</small><strong>$8,430.00</strong></span></div>
          <div><span className="foot-icon spend">↘</span><span><small>Spending</small><strong>$2,184.16</strong></span></div>
        </div>
      </div>
      <div className="floating-card insight-card"><span className="insight-icon"><Spark /></span><span><strong>Nice momentum.</strong><small>You’re 18% ahead of your goal.</small></span></div>
      <div className="floating-card goal-card"><span className="goal-ring"><span>72%</span></span><span><small>House deposit</small><strong>$36,000 / $50,000</strong></span></div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div id="top" className="site-shell">
      <header className="site-header">
        <Logo />
        <nav className={menuOpen ? 'main-nav open' : 'main-nav'} aria-label="Main navigation">
          <a href="#product" onClick={() => setMenuOpen(false)}>Product <span>⌄</span></a>
          <a href="#approach" onClick={() => setMenuOpen(false)}>Our approach</a>
          <a href="#stories" onClick={() => setMenuOpen(false)}>Stories</a>
        </nav>
        <div className="header-actions"><a className="login-link" href="#footer">Log in</a><a className="button button-dark header-cta" href="#get-started">Get started <ArrowUpRight size={16} /></a></div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}><span /><span /></button>
      </header>

      <main>
        <section className="hero section-pad">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> Money, without the fog</div>
            <h1>Know where you stand. <em>Choose what’s next.</em></h1>
            <p className="hero-lede">Fermor brings your accounts, spending and goals into one plain-English view. Less second-guessing; more confidence in the next decision.</p>
            <div className="hero-actions"><a className="button button-lime" href="#get-started">Get the full picture <ArrowUpRight size={17} /></a><a className="text-link" href="#product">How it works <ArrowRight size={17} /></a></div>
            <div className="hero-note"><div className="avatar-stack"><span>AM</span><span>JR</span><span>+</span></div><span>For people who want a better handle on their money.</span></div>
          </div>
          <DashboardCard />
        </section>

        <section className="signal-bar section-pad" aria-label="Fermor highlights">
          <div><strong>See</strong><small>your accounts</small></div>
          <div><strong>Plan</strong><small>for what matters</small></div>
          <div><strong>Move</strong><small>with context</small></div>
          <p>Good financial decisions<br /><i>start with a clear view.</i></p>
        </section>

        <section id="product" className="product-section section-pad">
          <div className="section-intro"><div className="eyebrow dark"><span className="eyebrow-dot" /> Everything, in one place</div><h2>You don’t need another <em>spreadsheet.</em></h2><p>You need a place that connects the dots. Fermor turns the noise into a next step you can actually take.</p></div>
          <div className="product-grid">
            <article className="feature-card statement-card"><div className="card-kicker">01 <span>See the full picture</span></div><h3>Your money, <em>decoded.</em></h3><p>Connect the accounts you already use and see what is coming in, going out and building up.</p><div className="statement-ui"><div className="ui-title"><span>This month</span><strong>June 2024 <span>⌄</span></strong></div><div className="ui-total">$6,245.40</div><div className="ui-bars"><span style={{height:'46%'}} /><span style={{height:'62%'}} /><span style={{height:'39%'}} /><span style={{height:'75%'}} /><span style={{height:'55%'}} /><span className="active" style={{height:'88%'}} /><span style={{height:'67%'}} /></div><div className="ui-days"><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span></div></div></article>
            <article className="feature-card plan-card"><div className="card-kicker">02 <span>Turn plans into progress</span></div><h3>A plan that <em>moves with you.</em></h3><p>Give a goal a number, a date and a route — then see how everyday choices change the picture.</p><div className="plan-ui"><div className="plan-ui-top"><span className="plan-icon">⌂</span><span><small>Buying a home</small><strong>On track</strong></span><span className="plan-percent">72%</span></div><div className="progress-line"><span /></div><div className="plan-foot"><span>$36,000 saved</span><span>Target $50,000</span></div></div></article>
            <article className="feature-card nudge-card"><div className="card-kicker">03 <span>Feel good about your next move</span></div><h3>Helpful, <em>not noisy.</em></h3><p>Timely insights that explain what matters and leave the jargon at the door.</p><div className="nudge-ui"><span className="nudge-spark"><Spark /></span><div><small>Fermor insight</small><strong>You could save $120 this month by moving your subscriptions.</strong></div><ArrowRight size={17} /></div></article>
          </div>
        </section>

        <section id="approach" className="approach-section section-pad">
          <div className="approach-copy"><div className="eyebrow dark"><span className="eyebrow-dot" /> Our point of view</div><h2>Money is personal.<br /><em>Your tools should be too.</em></h2><p>The right decision depends on your life, not a generic rule. Fermor gives you the context and control to make a plan that fits.</p><a className="button button-dark" href="#get-started">Meet Fermor <ArrowUpRight size={16} /></a></div>
          <div className="principles"><div className="principle"><span>01</span><div><h3>Make it human</h3><p>We speak like people, not spreadsheets. Clear language. Useful context. No judgement.</p></div></div><div className="principle"><span>02</span><div><h3>Earn your trust</h3><p>Your data is yours. We build with transparency at every step, and privacy at the core.</p></div></div><div className="principle"><span>03</span><div><h3>Keep you moving</h3><p>Progress beats perfection. We help you take the next good step, whenever you’re ready.</p></div></div></div>
        </section>

        <section id="stories" className="quote-section section-pad"><div className="quote-mark">/</div><blockquote>Good money decisions feel less like a leap when you can see <em>what’s in front of you.</em></blockquote><div className="quote-author"><span className="quote-avatar">f</span><span><strong>The Fermor principle</strong><small>Make the next step easier to see</small></span></div></section>

        <section id="get-started" className="cta-section section-pad"><div><div className="eyebrow"><span className="eyebrow-dot" /> Start with the full picture</div><h2>Make the next decision<br /><em>with confidence.</em></h2></div><div className="cta-side"><p>See your money clearly, then decide what it needs from you.</p><a className="button button-lime" href="#top">Get started <ArrowUpRight size={17} /></a></div></section>
      </main>

      <footer id="footer" className="site-footer section-pad"><div className="footer-top"><div className="footer-brand"><Logo /><p>A clearer relationship<br />with your money.</p></div><div className="footer-links"><div><strong>Explore</strong><a href="#product">Product</a><a href="#approach">Our approach</a><a href="#stories">Stories</a></div><div><strong>Let’s talk</strong><a href="mailto:hello@fermor.com">hello@fermor.com</a><a href="#top">Instagram ↗</a><a href="#top">LinkedIn ↗</a></div><div><strong>Good to know</strong><a href="#top">Privacy</a><a href="#top">Terms</a><a href="#top">Security</a></div></div></div><div className="footer-bottom"><span>© 2026 Fermor. Built for the decisions between paydays.</span><span>Made with intention <span className="footer-heart">✦</span></span></div></footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
