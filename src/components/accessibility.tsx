import {Palette, Keyboard, Tags, Gauge} from 'lucide-react'

function Accessibility() {
  return (
    <>
    <title>Accessibility - Magpie Treasures Design System</title>
    <div className="contentWidth">
      <div className="pd48-0 mbPd24-0">
        <h1>Accessibility</h1>
        <div className="mgTp12 thin subTitle">How the Magpie Treasures Design System stays usable for everyone: contrast, focus, semantics, and motion.</div>
        <div className="colHolder colGap24 smTbUndoCol">
          <nav aria-label="Accessibility sections" className="mgTp48 floatNav flexShrink0 smTbMgTp16">
              <ul className="stickySideMenu">
                  <li><a href="#contrast">Contrast<span className="smTbHide"> & Color</span></a></li>
                  <li><a href="#keyboard">Keyboard<span className="smTbHide"> & Focus</span></a></li>
                  <li><a href="#aria">ARIA<span className="smTbHide"> & Semantics</span></a></li>
                  <li><a href="#motion">Motion</a></li>
              </ul>
          </nav>
          <div className="flexGrow1">
            <section aria-labelledby="contrast-heading" id="contrast" className="contentSection mgTp48 smTbMgTp24">
              <div className="colHolder colTopAlign colGap24 mbColGap12">
                <div><Palette className="primColor mgTpMini" aria-hidden="true" /></div>
                <div>
                    <h2 id="contrast-heading">Contrast & Color</h2>
                    <p className="mgTp12">Every color pairing in this system is checked against WCAG 2.1 AA, the standard used to confirm text and interface elements stay readable for people with low vision or color blindness. Body text and images of text need a contrast ratio of at least 4.5:1 against their background. Large text (18.66px bold or 24px regular and up) and non-text elements like icons, borders, and focus indicators need at least 3:1.</p>
                    <p className="mgTp12">This applies in both themes independently, a pairing that passes in light mode isn't assumed to pass in dark mode too, each gets checked on its own.</p>
                </div>
              </div>
            </section>

            <section aria-labelledby="keyboard-heading" id="keyboard" className="contentSection mgTp48">
              <div className="colHolder colTopAlign colGap24 mbColGap12">
                <div><Keyboard className="primColor mgTpMini" aria-hidden="true" /></div>
                <div>
                  <h2 id="keyboard-heading">Keyboard & Focus</h2>
                  <p className="mgTp12">Every interactive element in this system gets a visible focus indicator on keyboard navigation, using <code>:focus-visible</code> rather than <code>:focus</code>, so a 2px outline appears only when someone is actually tabbing through the page, not on every mouse click. The outline color meets the same 3:1 contrast requirement as any other non-text UI element, in both themes.</p>
                  <p className="mgTp12">Some components need the focus ring to land somewhere other than the element that's actually receiving it. The Theme Toggle's focus outline appears around the track, not the thumb button underneath it, using CSS's <code>:has()</code> selector to style a parent based on its child's focus state. This keeps the outline visually matched to the whole control, not just the small button inside it.</p>
                  <p className="mgTp12">Focusability follows function, not decoration. An element only becomes focusable if it's actually interactive. The Toast component's close button, for example, uses the native <code>disabled</code> attribute when no close functionality is wired up, rather than faking a non-functional button with styling alone, so screen readers and keyboard users never encounter a control that looks actionable but silently does nothing.</p>
                  <p className="mgTp12">Modal manages focus instead of leaving it to chance. When it opens, focus moves into the dialog, and when it closes, focus returns to the element that opened it. Rather than building a manual focus trap that intercepts the Tab key, the app's <code>#root</code> element is made <code>inert</code> while the modal is open, which removes the rest of the page from both the tab order and the accessibility tree. Escape closes the modal, along with the close button and a click on the overlay.</p>
                  <p className="mgTp12">The same idea applies to hidden content. A closed Accordion panel is marked <code>inert</code> rather than only collapsed with CSS, since a panel with zero height would still leave its links and buttons reachable by keyboard and screen reader, and people would land on controls they can't see.</p>
                  <p className="mgTp12">Navigation follows the same pattern. A skip link is the first focusable element on every page, stays off-screen until it receives keyboard focus, and jumps straight to the main content so keyboard users don't have to tab through the navigation each time. On smaller screens, the page content is <code>inert</code> while the mobile menu is open, and the menu is <code>inert</code> while it's closed.</p>
                </div>
              </div>
            </section>

            <section aria-labelledby="aria-heading" id="aria" className="contentSection mgTp48">
              <div className="colHolder colTopAlign colGap24 mbColGap12">
                <div><Tags className="primColor mgTpMini" aria-hidden="true" /></div>
                <div>
                  <h2 id="aria-heading">ARIA & Semantics</h2>
                  <p className="mgTp12">ARIA attributes are added where semantics fall short of native HTML, never as a substitute for it. A real <code>&lt;button&gt;</code> is used before reaching for <code>role="button"</code>, a real <code>&lt;nav&gt;</code> before <code>aria-label</code> alone. ARIA fills the gaps native elements can't cover on their own.</p>
                  <p className="mgTp12">Toast messages use <code>role="status"</code>, which carries an implicit polite live region, so assistive technology announces new messages automatically without interrupting whatever the user is currently doing, the way an <code>aria-live="assertive"</code> region would. This matches how toasts behave visually, appearing without demanding immediate attention.</p>
                  <p className="mgTp12">Icons follow one of two rules. Decorative icons, ones that repeat information already shown as text, like the checkmark on a Success toast, are hidden from assistive technology with <code>aria-hidden="true"</code>. Icons that are the only content of an interactive element, like an icon-only close button, get a real accessible label instead, since there's no visible text for a screen reader to announce.</p>
                  <p className="mgTp12">Disclosure and dialog patterns state their relationships explicitly. The Accordion trigger sits inside a <code>role="heading"</code> wrapper with a configurable <code>aria-level</code>, uses <code>aria-expanded</code> to report whether it's open, and <code>aria-controls</code> to point at its panel, which is a labeled <code>region</code> named by the trigger. The mobile menu button follows the same <code>aria-expanded</code> and <code>aria-controls</code> pattern, with a fixed "Menu" label so the state is only announced once. Modal is a <code>role="dialog"</code> with <code>aria-modal="true"</code>, named by its title through <code>aria-labelledby</code>.</p>
                  <p className="mgTp12">Form Field connects everything a screen reader needs to the input itself. The label is tied to the input with <code>htmlFor</code>, and the helper text and error message are both joined through <code>aria-describedby</code> so they're read alongside the field. When an error is present the input gets <code>aria-invalid="true"</code>, and the error message uses <code>role="alert"</code> so it's announced the moment it appears. The required asterisk is hidden with <code>aria-hidden="true"</code>, since the native <code>required</code> attribute already exposes that state and announcing both would repeat it.</p>
                </div>
              </div>
            </section>

            <section aria-labelledby="motion-heading" id="motion" className="contentSection mgTp48">
              <div className="colHolder colTopAlign colGap24 mbColGap12">
                <div><Gauge className="primColor mgTpMini" aria-hidden="true" /></div>
                <div>
                  <h2 id="motion-heading">Motion</h2>
                  <p className="mgTp12">Animations in this system are opt-in, not assumed. All transitions and smooth scrolling are wrapped in a <code>prefers-reduced-motion: no-preference</code> media query, so they only run for users who haven't told their operating system they'd prefer less motion. Anyone with that setting enabled (often used to avoid triggering vestibular disorders, migraines, or general discomfort from movement) gets the same functional result with no animation at all.</p>
                  <p className="mgTp12">In this system, that covers things like the Theme Toggle's thumb sliding into position, the mobile menu panel sliding open, and smooth scrolling to in-page anchor links. None of these are essential to understanding or using the interface, they're polish, so removing them for users who've asked for less motion costs nothing functionally.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Accessibility
