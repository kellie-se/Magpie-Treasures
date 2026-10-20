import { Accordion, AccordionGroup } from './accordion'
import Button from './button'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom';

function AccordionPage() {
  return (
    <>
    <title>Accordion - Magpie Treasures Design System</title>
    <div className="contentWidth">
      <div className="pd48-0 mbPd24-0">
        <Link to="/components" className="dispInlBlock"><ArrowLeft aria-hidden="true" className="mgRg12" />Back</Link>
        <h1 className="mgTp24">Accordion</h1>
        <div className="mgTp12 thin subTitle">Accordion is an expandable section that toggles its content between hidden and visible, used to let people scan a list of items (like FAQ questions) without all the content competing for attention at once. A single Accordion manages its own open/closed state and works standalone, or several can be wrapped in an AccordionGroup to make them mutually exclusive, opening one closes any other that's open.</div>
        <h2 className="mgTp48">Examples</h2>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColJustifyBetween tbColWrap mbColGap12">
          <div className="bold subHeading tableHeadingWidth smTbFullWidth flexShrink0">Standard</div>
          <div className="flexGrow1">
            <Accordion title="What are your hours?" content="We're open Tuesday through Sunday, 8am to 4pm for the café, with the shop floor open until 5pm for browsing. Closed Mondays." />
          </div>
          <div className="borderBox pd8 surfaceColor tbFullWidth mnWd400">
            <code>&lt;Accordion title="What are..." content="We're open..." /&gt;</code>
          </div>
        </div>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColJustifyBetween tbColWrap mbColGap12">
          <div className="bold subHeading tableHeadingWidth smTbFullWidth flexShrink0">Default Open</div>
          <div className="flexGrow1">
            <Accordion title="Do you take custom cake or pastry orders?" content={<>Yes, we take custom orders for cakes, tarts, and pastry boxes with at least 48 hours notice. Reach out through our <Link to="#">contact page</Link> with your event details.</>} defaultOpen={true} />
          </div>
          <div className="borderBox pd8 surfaceColor tbFullWidth mnWd400">
            <code>&lt;Accordion title="Do you..." content=&#123;&lt;&gt;Yes, we...&#125; defaultOpen=&#123;true&#125; /&gt;</code>
          </div>
        </div>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColJustifyBetween tbColWrap mbColGap12">
          <div className="bold subHeading tableHeadingWidth smTbFullWidth flexShrink0">Group</div>
          <div className="flexGrow1">
            <AccordionGroup>
              <Accordion title="Is the antiques and goods section separate from the café?" content="They share the same space, so you can browse while you wait on an order or linger over coffee. Everything in the shop is available to purchase at the counter." />
              <Accordion title="Where do your antiques and handmade pieces come from?" content="A mix of estate sales, local makers, and small consignors we've built relationships with over the years. Each piece has its own little history, and we're happy to share what we know about it." />
            </AccordionGroup>
          </div>
          <div className="borderBox pd8 surfaceColor tbFullWidth mnWd400">
            <code>&lt;AccordionGroup&gt;
              <br />&nbsp;&nbsp;&lt;Accordion title="Is the..." content="They share..." /&gt;
              <br />&nbsp;&nbsp;&lt;Accordion title="Where do..." content="A mix..." /&gt;
              <br />&lt;/AccordionGroup&gt;</code>
          </div>
        </div>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColJustifyBetween tbColWrap mbColGap12">
          <div className="bold subHeading tableHeadingWidth smTbFullWidth flexShrink0">Group, Default Open</div>
          <div className="flexGrow1">
            <AccordionGroup defaultOpenFirst={true}>
              <Accordion title="Do you accommodate dietary restrictions?" content="We offer gluten-free and vegan options daily, clearly labeled in the case. Let our staff know about any allergies and we're glad to walk you through ingredients." />
              <Accordion title="Where can I find your full menu?" content={<><p className="pdBt12">Our seasonal menu changes regularly based on what's fresh, you can browse the current lineup anytime, or stop by to see what's in the case today.</p><Button buttonText="View Menu" path="#" variant="secondary" /></>} />
            </AccordionGroup>
          </div>
          <div className="borderBox pd8 surfaceColor tbFullWidth mnWd400">
            <code>&lt;AccordionGroup defaultOpenFirst=&#123;true&#125;&gt;
              <br />&nbsp;&nbsp;&lt;Accordion title="Do you..." content="We offer..." /&gt;
              <br />&nbsp;&nbsp;&lt;Accordion title="Where can..." content=&#123;&lt;&gt;&lt;p&gt;Our seasonal...&#125; /&gt;
              <br />&lt;/AccordionGroup&gt;</code>
          </div>
        </div>
        <h2 className="mgTp48">Properties</h2>
        <h3 className="mgTp24">Accordion</h3>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap smTbColGap12 mbColGap12">
          <div className="colHolder colGap24 colMidAlign tbFullWidth flexGrow1">
            <div className="subHeading borderBox pd8 surfaceColor flexShrink0"><code>title</code></div>
            <code>string</code>
          </div>
          <div className="italic">Required, no default</div>
          <div>The clickable header text.</div>
        </div>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap smTbColGap12 mbColGap12">
          <div className="colHolder colGap24 colMidAlign tbFullWidth flexGrow1">
            <div className="subHeading borderBox pd8 surfaceColor flexShrink0"><code>content</code></div>
            <code>ReactNode</code>
          </div>
          <div className="italic">Required, no default</div>
          <div>The expandable body content. Accepts plain text or richer markup like links, lists, or other components.</div>
        </div>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap smTbColGap12 mbColGap12">
          <div className="colHolder colGap24 colMidAlign tbFullWidth flexGrow1">
            <div className="subHeading borderBox pd8 surfaceColor flexShrink0"><code>defaultOpen</code></div>
            <code>boolean</code>
          </div>
          <div className="italic">Optional, "false" default</div>
          <div>Whether the accordion starts expanded. Has no effect inside an AccordionGroup.</div>
        </div>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap smTbColGap12 mbColGap12">
          <div className="colHolder colGap24 colMidAlign tbFullWidth flexGrow1">
            <div className="subHeading borderBox pd8 surfaceColor flexShrink0"><code>headingLevel</code></div>
            <code>2 | 3 | 4 | 5 | 6</code>
          </div>
          <div className="italic">Optional, "3" default</div>
          <div>Sets the heading level (aria-level) for the accordion's trigger.</div>
        </div>

        <h3 className="mgTp24">AccordionGroup</h3>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap smTbColGap12 mbColGap12">
          <div className="colHolder colGap24 colMidAlign tbFullWidth flexGrow1">
            <div className="subHeading borderBox pd8 surfaceColor flexShrink0"><code>defaultOpenFirst</code></div>
            <code>boolean</code>
          </div>
          <div className="italic">Optional, "false" default</div>
          <div>Automatically opens the first accordion in the group on mount.</div>
        </div>
        <h2 className="mgTp48">Accessibility</h2>
        <p className="mgTp12">The accordion trigger is a native <code>button</code>, so it's keyboard-operable (Enter/Space) and focusable without any extra work. It sets <code>aria-expanded</code> to <code>true</code> or <code>false</code> to reflect its current state, and <code>aria-controls</code> points to the content region it toggles, while <code>aria-labelledby</code> on that content region points back to the button, so screen readers can announce the relationship in both directions. The header wrapping the button uses <code>role="heading"</code> with a configurable <code>aria-level</code>, since the component has no way to know where it sits in a page's heading hierarchy. Both chevron icons are marked <code>aria-hidden="true"</code>, since the button's accessible name already comes from its text and the icons are purely decorative.</p>
      </div>
    </div>
    </>
  )
}
export default AccordionPage