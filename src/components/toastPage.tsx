import Toast from './toast'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom';

function ToastPage() {
  return (
    <>
    <title>Toast - Magpie Treasures Design System</title>
    <div className="contentWidth">
      <div className="pd48-0 mbPd24-0">
        <Link to="/components" className="dispInlBlock"><ArrowLeft aria-hidden="true" className="mgRg12" />Back</Link>
        <h1 className="mgTp24">Toast</h1>
        <div className="mgTp12 thin subTitle">Toast is a dismissible status message for confirmations, errors, warnings, and general alerts. It supports four types, each with its own icon and color treatment, and announces itself to assistive technology automatically when it appears. The close button is optional, a Toast rendered without an <code>onClose</code> handler shows a disabled close button instead of a functional one, which is how it's used throughout this documentation site.</div>
        <h2 className="mgTp48">Examples</h2>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap mbColGap12">
          <div className="bold subHeading tableHeadingWidth smTbFullWidth">Information</div>
          <div className="flexGrow1 tbRightAlign smTbLeftAlign">
            <Toast type="info" text="Your preferences have been saved." />
          </div>
          <div className="borderBox pd8 surfaceColor tbFullWidth">
            <code>&lt;Toast type="info" text="Your preferences..." /&gt;</code>
          </div>
        </div>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap mbColGap12">
          <div className="bold subHeading tableHeadingWidth smTbFullWidth">Success</div>
          <div className="flexGrow1 tbRightAlign smTbLeftAlign">
            <Toast type="success" text="Refund successful." />
          </div>
          <div className="borderBox pd8 surfaceColor tbFullWidth">
            <code>&lt;Toast type="success" text="Refund successful." /&gt;</code>
          </div>
        </div>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap mbColGap12">
          <div className="bold subHeading tableHeadingWidth smTbFullWidth">Warning</div>
          <div className="flexGrow1 tbRightAlign smTbLeftAlign">
            <Toast type="warning" text="Almost out of stock." />
          </div>
          <div className="borderBox pd8 surfaceColor tbFullWidth">
            <code>&lt;Toast type="warning" text="Almost out..." /&gt;</code>
          </div>
        </div>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap mbColGap12">
          <div className="bold subHeading tableHeadingWidth smTbFullWidth">Error</div>
          <div className="flexGrow1 tbRightAlign smTbLeftAlign">
            <Toast type="error" text="Incorrect item number. Try again." />
          </div>
          <div className="borderBox pd8 surfaceColor tbFullWidth">
            <code>&lt;Toast type="error" text="Incorrect item..." /&gt;</code>
          </div>
        </div>
        <h2 className="mgTp48">Properties</h2>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap smTbColGap12 mbColGap12">
          <div className="colHolder colGap24 colMidAlign tbFullWidth flexGrow1">
            <div className="subHeading borderBox pd8 surfaceColor flexShrink0"><code>type</code></div>
            <code>"info" | "success" | "warning" | "error"</code>
          </div>
          <div className="italic">Required, no default</div>
          <div>Determines the toast's color treatment and icon.</div>
        </div>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap smTbColGap12 mbColGap12">
          <div className="colHolder colGap24 colMidAlign tbFullWidth flexGrow1">
            <div className="subHeading borderBox pd8 surfaceColor flexShrink0"><code>text</code></div>
            <code>string</code>
          </div>
          <div className="italic">Required, no default</div>
          <div>The message displayed inside the toast.</div>
        </div>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap smTbColGap12 mbColGap12">
          <div className="colHolder colGap24 colMidAlign tbFullWidth flexGrow1">
            <div className="subHeading borderBox pd8 surfaceColor flexShrink0"><code>onClose</code></div>
            <code>() =&gt; void</code>
          </div>
          <div className="italic">Optional, no default</div>
          <div>Called when the close button is clicked. When omitted it renders disabled.</div>
        </div>
        <h2 className="mgTp48">Accessibility</h2>
        <p className="mgTp12">Toast announces itself automatically using <code>role="status"</code>, which carries an implicit polite live region, so assistive technology picks up new messages without the user needing to navigate to them, and without interrupting whatever they're currently doing. The type icon is marked <code>aria-hidden="true"</code>, since it's decorative, the toast's color and border already communicate type visually, and the message text itself carries the actual information. The close button uses the native <code>disabled</code> attribute when no <code>onClose</code> handler is provided, rather than hiding the button or leaving it clickable but non-functional, so screen readers and keyboard users encounter a button that accurately reflects whether closing is actually possible.</p>
        <p className="mgTp12"><code>onClose</code> is optional specifically to support this documentation site, where every example needs to render as a static, non-dismissible demo rather than a live notification. Outside of a documentation context, <code>onClose</code> being optional wouldn't need to mean "disabled by default," it could instead default to simply removing the toast from view, giving every Toast a working close button out of the box unless a consumer explicitly needed to override that behavior.</p>
      </div>
    </div>
    </>
  )
}

export default ToastPage