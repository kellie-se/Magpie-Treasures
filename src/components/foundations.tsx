import {Palette, Image, CaseSensitive, GapHorizontal, X, Check, InfoIcon, TriangleAlert, CircleAlert} from 'lucide-react'
import Toast from './toast'
import ColorRamps from './colorRamps'

function Foundations() {

  return (
    <>
    <title>Foundations - Magpie Treasures Design System</title>
    <div className="contentWidth smTbRelPos">
      <div className="pd48-0 mbPd24-0">
        <h1>The Foundations</h1>
        <div className="mgTp12 thin subTitle">The core building blocks of the Magpie Treasures Design System: color, type, spacing, and icons.</div>
        <div className="colHolder colGap24 smTbUndoCol">
          <nav aria-label="Foundations sections" className="mgTp48 floatNav flexShrink0 smTbMgTp16">
              <ul className="stickySideMenu">
                  <li><a href="#colors">Colors</a></li>
                  <li><a href="#typography">Typography</a></li>
                  <li><a href="#iconography">Icon<span className="mbShowInl">s</span><span className="mbHide">ography</span></a></li>
                  <li><a href="#spacing">Spacing<span className="smTbHide"> & Border Radius</span></a></li>
              </ul>
          </nav>
          <div className="flexGrow1">
            <section aria-labelledby="colors-heading" id="colors" className="contentSection mgTp48 smTbMgTp24">
              <div className="colHolder colTopAlign colGap24 mbColGap12">
                <div><Palette className="primColor mgTpMini" aria-hidden="true" /></div>
                <div>
                  <h2 id="colors-heading">Colors</h2>
                  <p className="mgTp12">Our palette is inspired by the Eurasian Magpie, calm and confident, with warm accents drawn from the shop itself. Every color pairing in this system meets WCAG AA contrast requirements in both light and dark themes.</p>
                  <h3 className="mgTp24 subHeading">Primitives</h3>
                  <p className="mgTp12">The raw color ramp. These are never used directly in components, they're the source that theme colors point to.</p>
                  <div className="mgTp24">
                    <div>
                      <ColorRamps />
                    </div>
                  </div>
                  <h3 className="mgTp24 subHeading">Theme</h3>
                  <p className="mgTp12">Primitives get assigned a role for light and dark mode. Components reference these theme tokens, never the primitives directly, so the whole system can be rethemed by changing this one layer.</p>
                  <h4 className="mgTp24 subHeading">Light Theme</h4>
                  <div className="mgTp12" data-theme="light">
                    <div className="colRowHolder colGap8 borderBox surfaceColor pd12">
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-page)"}}></span>
                        <p className="bold smTbColorName">--color-page</p>
                        <p className="smTbColorDesc">Page background color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-surface)"}}></span>
                        <p className="bold smTbColorName">--color-surface</p>
                        <p className="smTbColorDesc">Alternative background color, for example card backgrounds</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-text-primary)"}}></span>
                        <p className="bold smTbColorName">--color-text-primary</p>
                        <p className="smTbColorDesc">Primary text color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-text-secondary)"}}></span>
                        <p className="bold smTbColorName">--color-text-secondary</p>
                        <p className="smTbColorDesc">Secondary text color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-text-error)"}}></span>
                        <p className="bold smTbColorName">--color-text-error</p>
                        <p className="smTbColorDesc">Error text color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-border)"}}></span>
                        <p className="bold smTbColorName">--color-border</p>
                        <p className="smTbColorDesc">Border color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-nav-bg)"}}></span>
                        <p className="bold smTbColorName">--color-nav-bg</p>
                        <p className="smTbColorDesc">Navigation background color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-footer-bg)"}}></span>
                        <p className="bold smTbColorName">--color-footer-bg</p>
                        <p className="smTbColorDesc">Footer background color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-footer-text)"}}></span>
                        <p className="bold smTbColorName">--color-footer-text</p>
                        <p className="smTbColorDesc">Footer text color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-link)"}}></span>
                        <p className="bold smTbColorName">--color-link</p>
                        <p className="smTbColorDesc">Link text color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-link-hover)"}}></span>
                        <p className="bold smTbColorName">--color-link-hover</p>
                        <p className="smTbColorDesc">Link text hover color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-focus-ring)"}}></span>
                        <p className="bold smTbColorName">--color-focus-ring</p>
                        <p className="smTbColorDesc">Clickable element focus outline</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-primary)"}}></span>
                        <p className="bold smTbColorName">--color-primary</p>
                        <p className="smTbColorDesc">Primary button color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-primary-hover)"}}></span>
                        <p className="bold smTbColorName">--color-primary-hover</p>
                        <p className="smTbColorDesc">Button hover color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-primary-pressed)"}}></span>
                        <p className="bold smTbColorName">--color-primary-pressed</p>
                        <p className="smTbColorDesc">Button pressed/active color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-on-primary)"}}></span>
                        <p className="bold smTbColorName">--color-on-primary</p>
                        <p className="smTbColorDesc">Button text color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-primary-shadow)"}}></span>
                        <p className="bold smTbColorName">--color-primary-shadow</p>
                        <p className="smTbColorDesc">Button shadow color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-primary-track)"}}></span>
                        <p className="bold smTbColorName">--color-primary-track</p>
                        <p className="smTbColorDesc">Toggle track color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-disabled-surface)"}}></span>
                        <p className="bold smTbColorName">--color-disabled-surface</p>
                        <p className="smTbColorDesc">Disabled button background color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-disabled-text)"}}></span>
                        <p className="bold smTbColorName">--color-disabled-text</p>
                        <p className="smTbColorDesc">Disabled button text color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-disabled-shadow)"}}></span>
                        <p className="bold smTbColorName">--color-disabled-shadow</p>
                        <p className="smTbColorDesc">Disabled button shadow color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-status-text)"}}></span>
                        <p className="bold smTbColorName">--color-status-text</p>
                        <p className="smTbColorDesc">Status message text color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-status-info-bg)"}}></span>
                        <p className="bold smTbColorName">--color-status-info-bg</p>
                        <p className="smTbColorDesc">Info status background color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-status-info-accent)"}}></span>
                        <p className="bold smTbColorName">--color-status-info-accent</p>
                        <p className="smTbColorDesc">Info status border and icon color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-status-success-bg)"}}></span>
                        <p className="bold smTbColorName">--color-status-success-bg</p>
                        <p className="smTbColorDesc">Success status background color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-status-success-accent)"}}></span>
                        <p className="bold smTbColorName">--color-status-success-accent</p>
                        <p className="smTbColorDesc">Success status border and icon color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-status-warning-bg)"}}></span>
                        <p className="bold smTbColorName">--color-status-warning-bg</p>
                        <p className="smTbColorDesc">Warning status background color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-status-warning-accent)"}}></span>
                        <p className="bold smTbColorName">--color-status-warning-accent</p>
                        <p className="smTbColorDesc">Warning status border and icon color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-status-error-bg)"}}></span>
                        <p className="bold smTbColorName">--color-status-error-bg</p>
                        <p className="smTbColorDesc">Error status background color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-status-error-accent)"}}></span>
                        <p className="bold smTbColorName">--color-status-error-accent</p>
                        <p className="smTbColorDesc">Error status border and icon color</p>
                      </div>
                    </div>
                  </div>
                  <h4 className="mgTp24 subHeading">Dark Theme</h4>
                  <div className="mgTp12" data-theme="dark">
                    <div className="colRowHolder colGap8 borderBox surfaceColor pd12">
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-page)"}}></span>
                        <p className="bold smTbColorName">--color-page</p>
                        <p className="smTbColorDesc">Page background color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-surface)"}}></span>
                        <p className="bold smTbColorName">--color-surface</p>
                        <p className="smTbColorDesc">Alternative background color, for example card backgrounds</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-text-primary)"}}></span>
                        <p className="bold smTbColorName">--color-text-primary</p>
                        <p className="smTbColorDesc">Primary text color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-text-secondary)"}}></span>
                        <p className="bold smTbColorName">--color-text-secondary</p>
                        <p className="smTbColorDesc">Secondary text color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-text-error)"}}></span>
                        <p className="bold smTbColorName">--color-text-error</p>
                        <p className="smTbColorDesc">Error text color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-border)"}}></span>
                        <p className="bold smTbColorName">--color-border</p>
                        <p className="smTbColorDesc">Border color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-nav-bg)"}}></span>
                        <p className="bold smTbColorName">--color-nav-bg</p>
                        <p className="smTbColorDesc">Navigation background color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-footer-bg)"}}></span>
                        <p className="bold smTbColorName">--color-footer-bg</p>
                        <p className="smTbColorDesc">Footer background color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-footer-text)"}}></span>
                        <p className="bold smTbColorName">--color-footer-text</p>
                        <p className="smTbColorDesc">Footer text color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-link)"}}></span>
                        <p className="bold smTbColorName">--color-link</p>
                        <p className="smTbColorDesc">Link text color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-link-hover)"}}></span>
                        <p className="bold smTbColorName">--color-link-hover</p>
                        <p className="smTbColorDesc">Link text hover color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-focus-ring)"}}></span>
                        <p className="bold smTbColorName">--color-focus-ring</p>
                        <p className="smTbColorDesc">Clickable element focus outline</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-primary)"}}></span>
                        <p className="bold smTbColorName">--color-primary</p>
                        <p className="smTbColorDesc">Primary button color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-primary-hover)"}}></span>
                        <p className="bold smTbColorName">--color-primary-hover</p>
                        <p className="smTbColorDesc">Button hover color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-primary-pressed)"}}></span>
                        <p className="bold smTbColorName">--color-primary-pressed</p>
                        <p className="smTbColorDesc">Button pressed/active color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-on-primary)"}}></span>
                        <p className="bold smTbColorName">--color-on-primary</p>
                        <p className="smTbColorDesc">Button text color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-primary-shadow)"}}></span>
                        <p className="bold smTbColorName">--color-primary-shadow</p>
                        <p className="smTbColorDesc">Button shadow color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-primary-track)"}}></span>
                        <p className="bold smTbColorName">--color-primary-track</p>
                        <p className="smTbColorDesc">Toggle track color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-disabled-surface)"}}></span>
                        <p className="bold smTbColorName">--color-disabled-surface</p>
                        <p className="smTbColorDesc">Disabled button background color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-disabled-text)"}}></span>
                        <p className="bold smTbColorName">--color-disabled-text</p>
                        <p className="smTbColorDesc">Disabled button text color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-disabled-shadow)"}}></span>
                        <p className="bold smTbColorName">--color-disabled-shadow</p>
                        <p className="smTbColorDesc">Disabled button shadow color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-status-text)"}}></span>
                        <p className="bold smTbColorName">--color-status-text</p>
                        <p className="smTbColorDesc">Status message text color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-status-info-bg)"}}></span>
                        <p className="bold smTbColorName">--color-status-info-bg</p>
                        <p className="smTbColorDesc">Info status background color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-status-info-accent)"}}></span>
                        <p className="bold smTbColorName">--color-status-info-accent</p>
                        <p className="smTbColorDesc">Info status border and icon color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-status-success-bg)"}}></span>
                        <p className="bold smTbColorName">--color-status-success-bg</p>
                        <p className="smTbColorDesc">Success status background color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-status-success-accent)"}}></span>
                        <p className="bold smTbColorName">--color-status-success-accent</p>
                        <p className="smTbColorDesc">Success status border and icon color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-status-warning-bg)"}}></span>
                        <p className="bold smTbColorName">--color-status-warning-bg</p>
                        <p className="smTbColorDesc">Warning status background color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-status-warning-accent)"}}></span>
                        <p className="bold smTbColorName">--color-status-warning-accent</p>
                        <p className="smTbColorDesc">Warning status border and icon color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-status-error-bg)"}}></span>
                        <p className="bold smTbColorName">--color-status-error-bg</p>
                        <p className="smTbColorDesc">Error status background color</p>
                      </div>
                      <div className="colHolder colGap24 colMidAlign smTbFlexWrap smTbGap0-24">
                        <span className="colorSquare flexShrink0" style={{backgroundColor:"var(--color-status-error-accent)"}}></span>
                        <p className="bold smTbColorName">--color-status-error-accent</p>
                        <p className="smTbColorDesc">Error status border and icon color</p>
                      </div>
                    </div>
                  </div>
                    <h4 className="mgTp24 subHeading">Statuses</h4>
                    <div className="mgTp12 colHolder colGap24 colWrap">
                      <div data-theme="light">
                        <div className="colRowHolder colTopAlign colGap12 surfaceColor borderBox pd12">
                          <Toast type="info" text="Information" />
                          <Toast type="success" text="Success" />
                          <Toast type="warning" text="Warning" />
                          <Toast type="error" text="Error" />
                        </div>
                      </div>
                      <div data-theme="dark">
                        <div className="colRowHolder colTopAlign colGap12 pd12 surfaceColor borderBox">
                          <Toast type="info" text="Information" />
                          <Toast type="success" text="Success" />
                          <Toast type="warning" text="Warning" />
                          <Toast type="error" text="Error" />
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </section>
            <section aria-labelledby="typography-heading" id="typography" className="contentSection mgTp48">
              <div className="colHolder colTopAlign colGap24 mbColGap12">
                <div><CaseSensitive className="primColor mgTpMini" aria-hidden="true" /></div>
                <div>
                  <h2 id="typography-heading">Typography</h2>
                  <p className="mgTp12">Inria Serif carries the voice of the system: warm, readable, and a little more personal than a typical sans-serif interface font. It's used for every size, from page titles down to captions, keeping the whole system consistent rather than mixing typefaces.</p>
                  <p className="mgTp12">The type scale below is built from an 18px base, with each level chosen to create clear hierarchy without shouting. Larger headings use a bolder weight and tighter line-height, since big text needs less vertical space to read comfortably. Body text stays looser (1.6 line-height on larger screens) to keep longer paragraphs easy to follow.</p>

                  <h3 className="mgTp24 subTitle">Type Scale</h3>  
                  <div className="mgTp12 colRowHolder colGap12">
                    <div className="colHolder colGap24 colMidAlign smTbGap0-24 smTbFlexWrap">
                      <div className="headingName subHeading">H1</div>
                      <p className="h1 flexGrow1 headingExText">Magpie Treasures</p>
                      <div className="borderBox surfaceColor pd12 headingDetails">--font-size-h1 · 35px · 700</div>
                    </div>
                    <div className="colHolder colGap24 colMidAlign smTbGap0-24 smTbFlexWrap">
                      <div className="headingName subHeading">H2</div>
                      <p className="h2 flexGrow1 headingExText">Magpie Treasures</p>
                      <div className="borderBox surfaceColor pd12 headingDetails">--font-size-h2 · 29px · 700</div>
                    </div>
                    <div className="colHolder colGap24 colMidAlign smTbGap0-24 smTbFlexWrap">
                      <div className="headingName subHeading">H3</div>
                      <p className="h3 flexGrow1 headingExText">Magpie Treasures</p>
                      <div className="borderBox surfaceColor pd12 headingDetails">--font-size-h3 · 24px · 600</div>
                    </div>
                    <div className="colHolder colGap24 colMidAlign smTbGap0-24 smTbFlexWrap">
                      <div className="headingName subHeading">H4</div>
                      <p className="h4 flexGrow1 headingExText">Magpie Treasures</p>
                      <div className="borderBox surfaceColor pd12 headingDetails">--font-size-h4 · 20px · 600</div>
                    </div>
                    <div className="colHolder colGap24 colMidAlign smTbGap0-24 smTbFlexWrap">
                      <div className="headingName subHeading">Body</div>
                      <p className="flexGrow1 headingExText">Magpie Treasures</p>
                      <div className="borderBox surfaceColor pd12 headingDetails">--font-size-body · 18px · 400</div>
                    </div>
                    <div className="colHolder colGap24 colMidAlign smTbGap0-24 smTbFlexWrap">
                      <div className="headingName subHeading">Small</div>
                      <p className="small-text headingExText flexGrow1">Magpie Treasures</p>
                      <div className="borderBox surfaceColor pd12 headingDetails">--font-size-small · 15px · 400</div>
                    </div>
                  </div>

                  <p className="mgTp24">On screens narrower than 500px, headings scale down to 28, 24, 21 and 18px, and body line-height tightens to 1.5.</p>

                  <h3 className="mgTp24 subTitle">Usage</h3>                  
                  <p className="mgTp12">Bold weight is reserved for headings and short emphasis, never for large blocks of body copy, since bold text at length becomes harder to read, not easier.</p>

                </div>
              </div>
            </section>
            <section aria-labelledby="iconography-heading" id="iconography" className="contentSection mgTp48">
              <div className="colHolder colTopAlign colGap24 mbColGap12">
                <div><Image className="primColor mgTpMini" aria-hidden="true" /></div>
                <div>
                  <h2 id="iconography-heading">Iconography</h2>
                  <p className="mgTp12">Icons come from Lucide, a clean outline set that matches the calm, friendly tone of this system.</p>
                  <p className="mgTp12">Icon size and stroke weight are set per component to fit the context they appear in. In Toast, icons use 20px with a 2.5px stroke, giving them enough presence to read clearly against the alert's colored background.</p>
                  <p className="mgTp12">Icon color is set explicitly per component rather than always inheriting from currentColor. In Toast, the icon matches the alert's accent color (the same color as its border), while the message text stays a neutral, consistent color across all four toast types. This keeps the icon doing the work of signaling meaning, without needing the text color to shift too.</p>
                  <p className="mgTp24 colHolder colGap12 colMidAlign">
                    <X aria-hidden="true" /><Check aria-hidden="true" /><InfoIcon aria-hidden="true" /><TriangleAlert aria-hidden="true" /><CircleAlert aria-hidden="true" />
                  </p>
                  <h3 className="mgTp24 subTitle">Accessibility</h3> 
                  <p className="mgTp12">Decorative icons (icons that repeat information already shown as text, like the checkmark on a Success toast) are hidden from assistive technology. Icons that are the only content of an interactive element, like an icon-only close button, need an accessible label instead, since there's no visible text for a screen reader to announce.</p>
                </div>
              </div>
            </section>
            <section aria-labelledby="spacing-heading" id="spacing" className="contentSection mgTp48">
              <div className="colHolder colTopAlign colGap24 mbColGap12">
                <div><GapHorizontal className="primColor mgTpMini" aria-hidden="true" /></div>
                <div>
                  <h2 id="spacing-heading">Spacing & Border Radius</h2>
                  <p className="mgTp12">Spacing across the system is built from a 4px base unit, keeping padding, margin, and gaps consistent and predictable. Most spacing uses these common steps:</p>
                  <div className="mgTp12 dispInlBlock borderBox surfaceColor pd12">8px, 12px, 16px, 20px, 24px, 48px, 60px, 120px</div>
                  <p className="mgTp12">A smaller 4px step exists for tight, specific cases (like the space between an icon and the text directly above it) but is used sparingly, most spacing decisions should reach for one of the steps above first.</p>
                  <p className="mgTp12">Utility classes follow the pattern [property][direction][size], for example .mgTp24 (margin-top, 24px) or .pd12 (padding, all sides, 12px), so any step in the scale can be applied consistently across margin, padding, and gap.</p>
                  <div className="mgTp24 colRowHolder colGap12">
                    <div className="colHolder colGap24 colMidAlign">
                      <div style={{ width: "50px" }} className="subHeading">4px</div>
                      <div style={{ width: "4px", height: "20px", backgroundColor: "var(--color-primary)" }} />
                    </div>
                    <div className="colHolder colGap24 colMidAlign">
                      <div style={{ width: "50px" }} className="subHeading">8px</div>
                      <div style={{ width: "8px", height: "20px", backgroundColor: "var(--color-primary)" }} />
                    </div>
                    <div className="colHolder colGap24 colMidAlign">
                      <div style={{ width: "50px" }} className="subHeading">12px</div>
                      <div style={{ width: "12px", height: "20px", backgroundColor: "var(--color-primary)" }} />
                    </div>
                    <div className="colHolder colGap24 colMidAlign">
                      <div style={{ width: "50px" }} className="subHeading">16px</div>
                      <div style={{ width: "16px", height: "20px", backgroundColor: "var(--color-primary)" }} />
                    </div>
                    <div className="colHolder colGap24 colMidAlign">
                      <div style={{ width: "50px" }} className="subHeading">20px</div>
                      <div style={{ width: "20px", height: "20px", backgroundColor: "var(--color-primary)" }} />
                    </div>
                    <div className="colHolder colGap24 colMidAlign">
                      <div style={{ width: "50px" }} className="subHeading">24px</div>
                      <div style={{ width: "24px", height: "20px", backgroundColor: "var(--color-primary)" }} />
                    </div>
                    <div className="colHolder colGap24 colMidAlign">
                      <div style={{ width: "50px" }} className="subHeading">48px</div>
                      <div style={{ width: "48px", height: "20px", backgroundColor: "var(--color-primary)" }} />
                    </div>
                    <div className="colHolder colGap24 colMidAlign">
                      <div style={{ width: "50px" }} className="subHeading">60px</div>
                      <div style={{ width: "60px", height: "20px", backgroundColor: "var(--color-primary)" }} />
                    </div>
                    <div className="colHolder colGap24 colMidAlign">
                      <div style={{ width: "50px" }} className="subHeading">120px</div>
                      <div style={{ width: "120px", height: "20px", backgroundColor: "var(--color-primary)" }} />
                    </div>
                  </div>
                  <p className="mgTp24">Border radius stays consistent at 6px across the system, a middle ground that reads as soft and friendly without looking either sharp (4px) or overly rounded (8px) on most components. The one exception is the Theme Toggle, which uses a fully rounded shape to read clearly as a pill-style switch.</p>
                  <div className="colHolder colGap12 colMidAlign mgTp24">
                    <div className="borderBox surfaceColor" style={{ width: "60px", height: "30px" }} />
                    <div className="subHeading">6px · default</div>
                  </div>
                  <div className="colHolder colGap12 colMidAlign mgTp24">
                    <div className="borderBox surfaceColor" style={{ width: "60px", height: "30px", borderRadius: "999px" }} />
                    <div className="subHeading">Fully rounded · Theme Toggle only</div>
                  </div>
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

export default Foundations
