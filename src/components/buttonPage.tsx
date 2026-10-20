import Button from './button'
import { ShoppingBag, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom';

function ButtonPage() {
  return (
    <>
    <title>Button - Magpie Treasures Design System</title>
    <div className="contentWidth">
      <div className="pd48-0 mbPd24-0">
        <Link to="/components" className="dispInlBlock"><ArrowLeft aria-hidden="true" className="mgRg12" />Back</Link>
        <h1 className="mgTp24">Button</h1>
        <div className="mgTp12 thin subTitle">Button is the primary interactive control for triggering an action, like submitting a form, opening a modal, or navigating to another page. It supports two visual variants, an optional leading icon, and a disabled state, and renders as either a native &lt;button&gt; or a Link depending on whether a path is provided.</div>
        <h2 className="mgTp48">Examples</h2>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap mbColGap12">
          <div className="bold subHeading tableHeadingWidth smTbFullWidth">Primary</div>
          <div className="flexGrow1 flexShrink0 tbRightAlign mbLeftAlign">
            <Button buttonText="Shop Now" variant="primary" />
          </div>
          <div className="borderBox pd8 surfaceColor tbFullWidth">
            <code>&lt;Button buttonText="Shop Now" variant="primary" /&gt;</code>
          </div>
        </div>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap mbColGap12">
          <div className="bold subHeading tableHeadingWidth smTbFullWidth">Secondary</div>
          <div className="flexGrow1 flexShrink0 tbRightAlign mbLeftAlign">
            <Button buttonText="Learn More" variant="secondary" />
          </div>
          <div className="borderBox pd8 surfaceColor tbFullWidth">
            <code>&lt;Button buttonText="Learn More" variant="secondary" /&gt;</code>
          </div>
        </div>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap mbColGap12">
          <div className="bold subHeading tableHeadingWidth smTbFullWidth">Disabled</div>
          <div className="flexGrow1 flexShrink0 tbRightAlign mbLeftAlign">
            <Button buttonText="Add to Cart" disabled={true} />
          </div>
          <div className="borderBox pd8 surfaceColor tbFullWidth">
            <code>&lt;Button buttonText="Add to Cart" disabled=&#123;true&#125; /&gt;</code>
          </div>
        </div>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap mbColGap12">
          <div className="bold subHeading tableHeadingWidth smTbFullWidth">Primary with Icon</div>
          <div className="flexGrow1 flexShrink0 tbRightAlign mbLeftAlign">
            <Button buttonText="View Cart" icon={ShoppingBag} variant="primary" />
          </div>
          <div className="borderBox pd8 surfaceColor tbFullWidth">
            <code>&lt;Button buttonText="View Cart" variant="primary"  icon=&#123;ShoppingBag&#125; /&gt;</code>
          </div>
        </div>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap mbColGap12">
          <div className="bold subHeading tableHeadingWidth smTbFullWidth">As a Link</div>
          <div className="flexGrow1 flexShrink0 tbRightAlign mbLeftAlign">
            <Button buttonText="View Details" variant="primary" path="#" />
          </div>
          <div className="borderBox pd8 surfaceColor tbFullWidth">
            <code>&lt;Button buttonText="View Details" variant="primary" path="#" /&gt;</code>
          </div>
        </div>
        <h2 className="mgTp48">Properties</h2>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap smTbColGap12 mbColGap12">
          <div className="colHolder colGap24 colMidAlign tbFullWidth flexGrow1">
            <div className="subHeading borderBox pd8 surfaceColor flexShrink0"><code>buttonText</code></div>
            <code>string</code>
          </div>
          <div className="italic">Required, no default</div>
          <div>The button's visible label text.</div>
        </div>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap smTbColGap12 mbColGap12">
          <div className="colHolder colGap24 colMidAlign tbFullWidth flexGrow1">
            <div className="subHeading borderBox pd8 surfaceColor flexShrink0"><code>variant</code></div>
            <code>"primary" | "secondary"</code>
          </div>
          <div className="italic">Optional, "primary" default</div>
          <div>Controls the button's visual style.</div>
        </div>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap smTbColGap12 mbColGap12">
          <div className="colHolder colGap24 colMidAlign tbFullWidth flexGrow1">
            <div className="subHeading borderBox pd8 surfaceColor flexShrink0"><code>disabled</code></div>
            <code>boolean</code>
          </div>
          <div className="italic">Optional, "false" default</div>
          <div>Disables the button. Has no effect when path is set.</div>
        </div>
         <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap smTbColGap12 mbColGap12">
          <div className="colHolder colGap24 colMidAlign tbFullWidth flexGrow1">
            <div className="subHeading borderBox pd8 surfaceColor flexShrink0"><code>type</code></div>
            <code>"button" | "submit"</code>
          </div>
          <div className="italic">Optional, "button" default</div>
          <div>The native button type attribute.</div>
        </div> 
         <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap smTbColGap12 mbColGap12">
          <div className="colHolder colGap24 colMidAlign tbFullWidth flexGrow1">
            <div className="subHeading borderBox pd8 surfaceColor flexShrink0"><code>icon</code></div>
            <code>LucideIcon</code>
          </div>
          <div className="italic">Optional, no default</div>
          <div>Optional leading icon.</div>
        </div>
         <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap smTbColGap12 mbColGap12">
          <div className="colHolder colGap24 colMidAlign tbFullWidth flexGrow1">
            <div className="subHeading borderBox pd8 surfaceColor flexShrink0"><code>path</code></div>
            <code>string</code>
          </div>
          <div className="italic">Optional, no default</div>
          <div>Renders the button as a Link to this path.</div>
        </div>
         <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap smTbColGap12 mbColGap12">
          <div className="colHolder colGap24 colMidAlign tbFullWidth flexGrow1">
            <div className="subHeading borderBox pd8 surfaceColor flexShrink0"><code>onClick</code></div>
            <code>() =&gt; void</code>
          </div>
          <div className="italic">Optional, no default</div>
          <div>Called when the button is clicked. Ignored when path is set.</div>
        </div>
        <h2 className="mgTp48">Accessibility</h2>
        <p className="mgTp12">The icon, when present, is marked <code>aria-hidden="true"</code>, since <code>buttonText</code> is always visible and already gives the button its accessible name, the icon is purely decorative. When <code>disabled</code> is set, the native <code>disabled</code> attribute is used rather than styling alone, so screen readers and keyboard users correctly skip the button rather than encountering a control that looks interactive but isn't. This only applies to the <code>button</code> element itself, since <code>disabled</code> has no effect when path is set and the component renders as a link instead, an important distinction to keep in mind since links can't be natively disabled the way buttons can.</p>
      </div>
    </div>
    </>
  )
}

export default ButtonPage
