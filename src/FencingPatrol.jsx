import './FencingPatrol.css'
import {
  HeroSection,
  FeatureGrid,
  ImageText,
  Steps,
  Gallery,
  Faq,
  CtaBanner,
} from '@aagf470/ui'

// ---------------------------------------------------------------------------
// FencePatrol — single-page general contractor site (built on @aagf470/ui).
// Short, grounded, local. Themed via src/theme/theme.css (orange/black/white).
//
// PLACEHOLDERS to swap before launch:
//   • BRAND — legal name is "FencePatrol"; final brand/domain still TBD.
//   • PHONE — (346) 332-6885 stands in for the Google Voice number.
//   • public/img/*.svg — placeholder art (also still carry the old wordmark).
//
// Phone-only business: no email, no contact form — every CTA is tap-to-call.
// ---------------------------------------------------------------------------

const BRAND = { a: 'Fence', b: 'Patrol', full: 'FencePatrol' } // ← placeholder name
const PHONE_DISPLAY = '(346) 332-6885'
const PHONE_TEL     = '+13463326885'
const AREA          = 'all of Long Island, plus the Bronx, Manhattan, and northern New Jersey'

// ── Phone icon for the nav CTA ───────────────────────────────────────────────
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.5 2 2 0 0 1 3.6 1.32h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.16 6.16l1.06-1.06a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

// ── Long Island line-art (lighthouse + waves) ──────────────────────────────
const LongIslandArt = () => (
  <svg className="fp-li__svg" viewBox="0 0 160 224" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Long Island lighthouse">
    {/* light beams */}
    <path d="M80 46 L2 14 L2 40 Z" fill="#e0600f" opacity="0.13" />
    <path d="M80 46 L158 14 L158 40 Z" fill="#e0600f" opacity="0.13" />
    {/* roof + finial */}
    <circle cx="80" cy="18" r="3.5" fill="#241f1b" />
    <path d="M60 42 L80 22 L100 42 Z" fill="#241f1b" />
    {/* lantern room */}
    <rect x="66" y="42" width="28" height="22" fill="#faf3e8" stroke="#241f1b" strokeWidth="3" />
    <rect x="70" y="46" width="20" height="14" fill="#e0600f" />
    {/* gallery platform */}
    <rect x="55" y="64" width="50" height="9" fill="#241f1b" />
    {/* tower */}
    <path d="M63 73 L97 73 L108 186 L52 186 Z" fill="#faf3e8" stroke="#241f1b" strokeWidth="3" strokeLinejoin="round" />
    {/* stripes */}
    <path d="M65 96 L95 96 L97 118 L63 118 Z" fill="#e0600f" />
    <path d="M60.5 146 L99.5 146 L102 168 L58 168 Z" fill="#e0600f" />
    {/* rock base */}
    <path d="M28 186 Q80 170 132 186 L132 200 L28 200 Z" fill="#241f1b" opacity="0.92" />
    {/* waves */}
    <path d="M6 200 q12 -8 24 0 t24 0 t24 0 t24 0 t24 0 t24 0" stroke="#e0600f" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.85" />
    <path d="M0 212 q12 -8 24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0" stroke="#e0600f" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.5" />
  </svg>
)

const AREAS = ['Nassau', 'Suffolk', 'Bronx', 'Manhattan', 'Northern NJ']

// ── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <nav className="fp-nav" aria-label="Main">
      <a href="#top" className="fp-nav__logo">{BRAND.a}<span>{BRAND.b}</span></a>
      <div className="fp-nav__links">
        <a href="#services">Services</a>
        <a href="#work">Our work</a>
        <a href="#faq">FAQ</a>
      </div>
      <a href={`tel:${PHONE_TEL}`} className="fp-nav__cta">
        <PhoneIcon /> {PHONE_DISPLAY}
      </a>
    </nav>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="fp-footer">
      <div className="fp-footer__inner">
        <div>
          <div className="fp-footer__brand">{BRAND.a}<span>{BRAND.b}</span></div>
          <p className="fp-footer__tagline">
            A family-owned general remodeling contractor serving {AREA}. Fencing,
            roofing, paving &amp; driveways — plus siding, and plumbing or
            landscaping on request. We speak English and Spanish.
          </p>
          <p className="fp-footer__insured" style={{ marginTop: '14px' }}>
            ● Family-owned · Fully insured · Registered LLC
          </p>
        </div>
        <div className="fp-footer__contact">
          <span style={{ fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>
            Call for a free estimate
          </span>
          <a href={`tel:${PHONE_TEL}`} className="fp-footer__phone">{PHONE_DISPLAY}</a>
          <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>We speak English &amp; Spanish · Find us on Yelp &amp; Angie's List</span>
        </div>
      </div>
      <div className="fp-footer__bottom">
        <span>© {new Date().getFullYear()} {BRAND.full}. All rights reserved.</span>
        <span>Site by <a href="https://guillen.studio" target="_blank" rel="noopener noreferrer">Guillen Solutions</a></span>
      </div>
    </footer>
  )
}

// ── Content ────────────────────────────────────────────────────────────────────

const SERVICES = [
  { icon: 'fence',  title: 'Fencing',            body: 'Wood, vinyl, chain-link, and aluminum — property lines, privacy, and repairs, installed clean and straight.' },
  { icon: 'home',   title: 'Roofing',            body: 'Repairs, re-roofs, and replacements — shingle and flat roofs built for New York weather.' },
  { icon: 'layers', title: 'Paving & asphalt',   body: 'Walkways, lots, and patios — new asphalt, resurfacing, and repairs that hold up.' },
  { icon: 'map',    title: 'Blacktop driveways', body: 'New driveways and repaving, sealed and finished to last.' },
]

const WHY = [
  { icon: 'users',  title: 'Family-owned & local',  body: 'A small, local family business — not a corporate outfit. We take on curated jobs close to home.' },
  { icon: 'shield', title: 'Insured & LLC',         body: 'Fully insured and operating as a registered LLC. (General contractor license in progress.)' },
  { icon: 'wrench', title: 'You work with the owner', body: 'You deal directly with the person doing the work. For bigger jobs we bring on a small, trusted crew.' },
  { icon: 'map',    title: 'Long Island, NYC & NJ', body: 'Serving all of Long Island, plus the Bronx, Manhattan, and northern New Jersey.' },
]

const STEPS = [
  { title: 'Call',            body: 'Give us a call and tell us about the project — no pressure, no runaround.' },
  { title: 'Estimate',        body: 'We come out, look at the work in person, and give you a clear, honest estimate.' },
  { title: 'Contract',        body: 'Happy with the number? We put the scope, timeline, and price in a written contract.' },
  { title: 'Confirm & build', body: 'You give the go-ahead, we get to work — and finish the job clean.' },
]

const PROJECTS = [
  { src: '/img/fencing.svg',   alt: 'Fence install',      caption: 'Privacy fence — Nassau' },
  { src: '/img/roofing.svg',   alt: 'Roof repair',        caption: 'Shingle re-roof — Suffolk' },
  { src: '/img/paving.svg',    alt: 'Paving',             caption: 'Walkway & patio — Bronx' },
  { src: '/img/project-6.svg', alt: 'Driveway',           caption: 'Blacktop driveway — LI' },
  { src: '/img/project-4.svg', alt: 'Fence',              caption: 'Vinyl fence — Queens' },
  { src: '/img/project-5.svg', alt: 'Roof',               caption: 'Flat roof — NJ' },
]

const FAQ = [
  { q: 'Are you insured?',                 a: 'Yes — fully insured and set up as a registered LLC. Our general contractor license is in progress; we\'re happy to share our current paperwork before any work starts.' },
  { q: 'What areas do you serve?',         a: `We cover ${AREA}. If you're in the area, give us a call and we'll come take a look.` },
  { q: 'What kind of jobs do you take?',   a: 'Small, local, curated work — homes, small businesses, and non-profits. Our focus is fencing, roofing, and paving; we also do siding, plus plumbing and landscaping on request.' },
  { q: 'Who actually does the work?',      a: 'You work directly with the owner. For larger jobs we bring on a small, trusted crew — the team is sized to your project, never more than you need.' },
]

// ── Page ──────────────────────────────────────────────────────────────────────
export default function FencingPatrol() {
  return (
    <div id="top">
      <Nav />

      <HeroSection
        eyebrow="Family-owned general contractor · Long Island, NY"
        headline="Fencing, roofing & paving — done right."
        subtext={`${BRAND.full} is a small, family-owned remodeling contractor serving ${AREA}. Local, curated work — insured, LLC-registered, and you deal directly with the owner.`}
        ctas={[
          { label: `Call ${PHONE_DISPLAY}`, href: `tel:${PHONE_TEL}`, variant: 'solid' },
          { label: 'Get a free estimate',   href: '#contact',          variant: 'ghost' },
        ]}
        layout="left"
      />

      <div id="services">
        <FeatureGrid
          eyebrow="What we do"
          headline="Our services"
          subtext="Our core trades are fencing, roofing, and paving. We also handle siding — and plumbing or landscaping on request."
          items={SERVICES}
          columns={4}
          variant="alt"
        />
      </div>

      <FeatureGrid
        eyebrow="Why us"
        headline="A contractor you can actually reach"
        items={WHY}
        columns={4}
        variant="default"
      />

      {/* Proudly Long Island */}
      <section className="fp-li">
        <div className="fp-li__inner">
          <div className="fp-li__art"><LongIslandArt /></div>
          <div className="fp-li__copy">
            <p className="fp-li__eyebrow">Proudly Long Island</p>
            <h2 className="fp-li__title">Local to the Island — and the whole area</h2>
            <p className="fp-li__body">
              Born and based on Long Island. We know the neighborhoods, the housing stock,
              and what the salt air and Nor'easters do to a roof or a fence. From the Island
              out to the city and northern New Jersey — close enough to show up, small enough
              to care.
            </p>
            <ul className="fp-li__areas">
              {AREAS.map(a => <li key={a}>{a}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <ImageText
        eyebrow="About"
        headline="A local family contractor, starting fresh"
        body={`${BRAND.full} is owner-operated and family-run. We've spent years doing hands-on remodeling work, and we're now fully insured and LLC-registered — focused on small, local jobs for homes, small businesses, and non-profits. Not the big corporate stuff: honest, grounded work close to home, where you deal with the owner from the first call to the final walkthrough.`}
        image="/img/about.svg"
        imageAlt="On the job"
        layout="image-left"
        cta={{ label: 'See our work', href: '#work', variant: 'ghost-bordered' }}
        variant="alt"
      />

      <Steps
        eyebrow="How it works"
        headline="Call, estimate, contract, done"
        subtext="Four simple steps. No pressure and no surprises."
        items={STEPS}
        variant="default"
      />

      <div id="work">
        <Gallery
          eyebrow="Our work"
          headline="A look at the kind of work we do"
          subtext="Fencing, roofing, and paving across Long Island, NYC, and New Jersey. (Photos are placeholders for now.)"
          images={PROJECTS}
          columns={3}
          aspect="4 / 3"
          variant="alt"
        />
      </div>

      <div id="faq">
        <Faq
          eyebrow="Common questions"
          headline="Good to know"
          items={FAQ}
          variant="default"
        />
      </div>

      <div id="contact">
        <CtaBanner
          eyebrow="Ready to start?"
          headline="Call for a free estimate."
          subtext="A phone call is the fastest way to reach us — free estimates, no obligation. Family-owned, insured, and local. We speak English and Spanish."
          cta={{ label: `Call ${PHONE_DISPLAY}`, href: `tel:${PHONE_TEL}`, variant: 'solid' }}
          variant="accent"
        />
      </div>

      <Footer />
    </div>
  )
}
