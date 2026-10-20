import ThemeToggle from './themeToggle'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom';
import {useState} from 'react'

function TogglePage() {
  const [demoTheme, setDemoTheme] = useState<"light" | "dark">("light");

  return (
    <>
    <title>Theme Toggle - Magpie Treasures Design System</title>
    <div className="contentWidth">
      <div className="pd48-0 mbPd24-0">
        <Link to="/components" className="dispInlBlock"><ArrowLeft aria-hidden="true" className="mgRg12" />Back</Link>
        <h1 className="mgTp24">Theme Toggle</h1>
        <div className="mgTp12 thin subTitle">Theme Toggle is a controlled switch for toggling between light and dark mode. It's a controlled component, the parent owns the current theme state and passes it in along with a handler, rather than the toggle managing its own state internally. It renders as a track-and-thumb switch, with the thumb displaying a sun or moon icon depending on the current theme.</div>
        <h2 className="mgTp48">Examples</h2>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap mbColGap12">
          <div className="bold subHeading tableHeadingWidth smTbFullWidth">Interactive</div>
          <div className="flexGrow1 tbRightAlign smTbLeftAlign">
            <ThemeToggle theme={demoTheme} onToggleTheme={() => setDemoTheme(demoTheme === "light" ? "dark" : "light")} />
          </div>
          <div className="borderBox pd8 surfaceColor tbFullWidth">
            <code>&lt;ThemeToggle theme=&#123;theme&#125; onToggleTheme=&#123;toggleTheme&#125; /&gt;</code>
          </div>
        </div>
        <p className="mgTp12 italic subHeading">Local instance for demo purposes</p>
        <h2 className="mgTp48">Properties</h2>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap smTbColGap12 mbColGap12">
          <div className="colHolder colGap24 colMidAlign tbFullWidth flexGrow1">
            <div className="subHeading borderBox pd8 surfaceColor flexShrink0"><code>theme</code></div>
            <code>"light" | "dark"</code>
          </div>
          <div className="italic">Required, no default</div>
          <div>The currently active theme.</div>
        </div>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap smTbColGap12 mbColGap12">
          <div className="colHolder colGap24 colMidAlign tbFullWidth flexGrow1">
            <div className="subHeading borderBox pd8 surfaceColor flexShrink0"><code>onToggleTheme</code></div>
            <code>() =&gt; void</code>
          </div>
          <div className="italic">Required, no default</div>
          <div>Called when the toggle is clicked.</div>
        </div>
        <h2 className="mgTp48">Accessibility</h2>
        <p className="mgTp12">The toggle is a real <code>&lt;button&gt;</code>, not a styled <code>&lt;div&gt;</code> with a click handler, so it's keyboard-focusable and operable with Enter or Space by default. <code>aria-pressed</code> reflects the current state as a boolean, true when in dark mode, which is how assistive technology distinguishes a toggle button from a regular one and announces whether it's currently "on." The <code>aria-label</code>, "Dark Mode," stays constant regardless of state rather than changing to "Light Mode" or "Dark Mode" dynamically, since <code>aria-pressed</code> already communicates the current state, the label just needs to describe what the control does.</p>
        <p className="mgTp12">The focus outline appears around the track rather than the button itself, using the <code>:has()</code> selector covered on the Accessibility page, so the visible focus indicator matches the whole control rather than just the small thumb inside it.</p>
      </div>
    </div>
    </>
  )
}

export default TogglePage
