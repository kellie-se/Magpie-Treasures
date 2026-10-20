import {LayoutPanelTop, Braces, SlidersHorizontal, Wrench} from 'lucide-react'

function Installation() {

  return (
    <>
    <title>Installation - Magpie Treasures Design System</title>
    <div className="contentWidth">
      <div className="pd48-0 mbPd24-0">
        <h1>Installation</h1>
        <div className="mgTp12 thin subTitle">This is a demonstration project built to showcase design system architecture and component patterns, not a published package available through a package manager. The sections below walk through how the project is structured and how it's actually built, as a reference for the patterns used throughout.</div>
        <div className="colHolder colGap24 smTbUndoCol">
          <nav aria-label="Installation sections" className="mgTp48 floatNav flexShrink0 smTbMgTp16">
              <ul className="stickySideMenu">
                  <li><a href="#structure"><span className="smTbHide">Project </span>Structure</a></li>
                  <li><a href="#tokens"><span className="smTbHide">Design </span>Tokens</a></li>
                  <li><a href="#theme">Theme<span className="smTbHide"> Setup</span></a></li>
                  <li><a href="#component"><span className="smTbHide">Using a </span>Component</a></li>
              </ul>
          </nav>
          <div className="flexGrow1">
            <section aria-labelledby="structure-heading" id="structure" className="contentSection mgTp48 smTbMgTp24">
              <div className="colHolder colTopAlign colGap24 mbColGap12">
                <div><LayoutPanelTop className="primColor mgTpMini" aria-hidden="true" /></div>
                <div>
                    <h2 id="structure-heading">Project Structure</h2>
                    <p className="mgTp12">The project keeps a flat structure rather than organizing by feature or nesting components into their own subfolders. <code>tokens/</code> holds the design token files: <code>colors.css</code> for raw primitives, <code>themes.css</code> for the light/dark role tokens that components actually reference, and <code>typography.css</code> for the type scale. <code>components/</code> holds everything else in the app, the reusable components themselves, the documentation pages you're looking at right now, and the small helpers behind them. <code>assets/</code> holds the images.</p>
                    <p className="mgTp12">This stays simple at the current scale of the project. A larger, longer-lived codebase would likely split <code>components/</code> further, grouping each component with its own styles, tests, and stories, but for a project this size, a flat structure keeps everything easy to find without adding folders that only hold one or two files.</p>
                </div>
              </div>
            </section>

            <section aria-labelledby="tokens-heading" id="tokens" className="contentSection mgTp48">
              <div className="colHolder colTopAlign colGap24 mbColGap12">
                <div><Braces className="primColor mgTpMini" aria-hidden="true" /></div>
                <div>
                  <h2 id="tokens-heading">Design Tokens</h2>
                  <p className="mgTp12">Three files make up the token layer, and all three need to load for the system to render correctly. <code>colors.css</code> defines the raw color primitives, ramps like Ink, Slate, and Blue, that are never referenced directly in components. <code>themes.css</code> assigns those primitives a role for light and dark mode, tokens like <code>--color-page</code> or <code>--color-text-primary</code>, which is what components actually point to. <code>typography.css</code> defines the type scale as its own set of custom properties, separate from color since it changes independently.</p>
                  <p className="mgTp12">Splitting tokens this way, by what they represent rather than lumping everything into one file, keeps each file focused and easy to scan. A design system with more token categories, spacing, shadows, motion durations, would likely follow the same pattern, one file per category, rather than growing a single tokens file indefinitely.</p>
                </div>
              </div>
            </section>

            <section aria-labelledby="theme-heading" id="theme" className="contentSection mgTp48">
              <div className="colHolder colTopAlign colGap24 mbColGap12">
                <div><SlidersHorizontal className="primColor mgTpMini" aria-hidden="true" /></div>
                <div>
                  <h2 id="theme-heading">Theme Setup</h2>
                  <p className="mgTp12">Theme is tracked with a single <code>useState</code>, initialized lazily from the user's system preference using <code>window.matchMedia('(prefers-color-scheme: dark)')</code>, so the page opens in whichever theme the visitor already has set at the OS level. The Theme Toggle component is the only thing that changes it afterward, and it applies through a <code>data-theme</code> attribute that <code>themes.css</code> uses to swap which values the role tokens point to, so individual components never need to know which theme is active.</p>
                  <p className="mgTp12">This works well for a two-theme system with a single component controlling the toggle. A larger application, one with more than two themes, or theme state needed in many places across the component tree, would likely move this into React Context instead, so any component could read or change the theme without it being passed down through props manually.</p>
                </div>
              </div>
            </section>

            <section aria-labelledby="component-heading" id="component" className="contentSection mgTp48">
              <div className="colHolder colTopAlign colGap24 mbColGap12">
                <div><Wrench className="primColor mgTpMini" aria-hidden="true" /></div>
                <div>
                  <h2 id="component-heading">Using a Component</h2>
                  <p className="mgTp12">Every component is imported directly from its file in <code>components/</code> and used like any other React component, passing its props directly. A Button, for example, is dropped in as <code>&lt;Button buttonText="Shop Now" variant="primary" path="/shop" /&gt;</code>, and TypeScript enforces which props it accepts, so passing an invalid <code>variant</code> value or forgetting a required prop shows up as an error before the code ever runs.</p>
                  <p className="mgTp12">That's straightforward at a small, known set of components, each imported directly from its own file. A larger system would typically also export everything from a single entry point, letting consumers write one import statement for multiple components instead of pointing at each file individually, but at this scale, importing directly keeps things simple.</p>
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

export default Installation
