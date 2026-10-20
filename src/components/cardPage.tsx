import Card from './card'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom';
import card1Img from '../assets/card-1.jpg'
import card2Img from '../assets/card-2.jpg'
import card3Img from '../assets/card-3.jpg'

function CardPage() {
  return (
    <>
    <title>Card - Magpie Treasures Design System</title>
    <div className="contentWidth">
      <div className="pd48-0 mbPd24-0">
        <Link to="/components" className="dispInlBlock"><ArrowLeft aria-hidden="true" className="mgRg12" />Back</Link>
        <h1 className="mgTp24">Card</h1>
        <div className="mgTp12 thin subTitle">Card is a flexible content container for showcasing an image, heading, and supporting text, with an optional link. The heading's HTML tag is configurable through headingLevel, defaulting to a plain div rather than a semantic heading, since a reusable component can't know in advance where it'll land in a page's heading hierarchy each time it's used.</div>
        <h2 className="mgTp48">Examples</h2>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap mbColGap12">
          <div className="bold subHeading tableHeadingWidth smTbFullWidth flexShrink0">Card with Link</div>
          <div className="flexGrow1 tbRightAlign smTbLeftAlign">
            <Card image={card1Img} imageAlt="Graphic of a variety of bakery items stacked on top of each other" heading="New Menu Every Week" text="Discover new treats every week, from all corners of the planet." href="#" linkText="View Current Menu" />
          </div>
          <div className="borderBox pd8 surfaceColor tbFullWidth">
            <code>&lt;Card image=&#123;card1Img&#125; imageAlt="[...]" heading="[...]" text="[...]" href="#" linkText="[...]" /&gt;</code>
          </div>
        </div>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap mbColGap12">
          <div className="bold subHeading tableHeadingWidth smTbFullWidth flexShrink0">Card without Link</div>
          <div className="flexGrow1 tbRightAlign smTbLeftAlign">
            <Card image={card2Img} heading="Fresh-baked bread" text="All items baked fresh daily for everyone's enjoyment." />
          </div>
          <div className="borderBox pd8 surfaceColor tbFullWidth">
            <code>&lt;Card image=&#123;card2Img&#125; heading="[...]" text="[...]" /&gt;</code>
          </div>
        </div>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap mbColGap12">
          <div className="bold subHeading tableHeadingWidth smTbFullWidth flexShrink0">Card using h2 heading</div>
          <div className="flexGrow1 tbRightAlign smTbLeftAlign">
            <Card image={card3Img} headingLevel="h2" heading="Custom Bakery Orders" text="Let us take care of the baking for your next event!" />
          </div>
          <div className="borderBox pd8 surfaceColor tbFullWidth">
            <code>&lt;Card image=&#123;card3Img&#125; headingLevel="h2" heading="[...]" text="[...]" /&gt;</code>
          </div>
        </div>
        <h2 className="mgTp48">Properties</h2>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap smTbColGap12 mbColGap12">
          <div className="colHolder colGap24 colMidAlign tbFullWidth flexGrow1">
            <div className="subHeading borderBox pd8 surfaceColor flexShrink0"><code>image</code></div>
            <code>string</code>
          </div>
          <div className="italic">Required, no default</div>
          <div>The path to the card's image.</div>
        </div>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap smTbColGap12 mbColGap12">
          <div className="colHolder colGap24 colMidAlign tbFullWidth flexGrow1">
            <div className="subHeading borderBox pd8 surfaceColor flexShrink0"><code>imageAlt</code></div>
            <code>string</code>
          </div>
          <div className="italic">Optional, empty string default</div>
          <div>Alt text for the image. Defaults to an empty string, which marks the image as decorative.</div>
        </div>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap smTbColGap12 mbColGap12">
          <div className="colHolder colGap24 colMidAlign tbFullWidth flexGrow1">
            <div className="subHeading borderBox pd8 surfaceColor flexShrink0"><code>heading</code></div>
            <code>string</code>
          </div>
          <div className="italic">Required, no default</div>
          <div>The card's heading text.</div>
        </div>
         <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap smTbColGap12 mbColGap12">
          <div className="colHolder colGap24 colMidAlign tbFullWidth flexGrow1">
            <div className="subHeading borderBox pd8 surfaceColor flexShrink0"><code>text</code></div>
            <code>string</code>
          </div>
          <div className="italic">Optional, no default</div>
          <div>Supporting text displayed below the heading.</div>
        </div> 
         <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap smTbColGap12 mbColGap12">
          <div className="colHolder colGap24 colMidAlign tbFullWidth flexGrow1">
            <div className="subHeading borderBox pd8 surfaceColor flexShrink0"><code>href</code></div>
            <code>string</code>
          </div>
          <div className="italic">Optional, no default</div>
          <div>When provided alongside linkText, renders a link at the bottom of the card.</div>
        </div>
         <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap smTbColGap12 mbColGap12">
          <div className="colHolder colGap24 colMidAlign tbFullWidth flexGrow1">
            <div className="subHeading borderBox pd8 surfaceColor flexShrink0"><code>linkText</code></div>
            <code>string</code>
          </div>
          <div className="italic">Optional, no default</div>
          <div>The link's visible text.</div>
        </div>
         <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap smTbColGap12 mbColGap12">
          <div className="colHolder colGap24 colMidAlign tbFullWidth flexGrow1">
            <div className="subHeading borderBox pd8 surfaceColor flexShrink0"><code>headingLevel</code></div>
            <code>"p" | "div" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"</code>
          </div>
          <div className="italic">Optional, "div" default</div>
          <div>Controls which HTML tag the heading renders as.</div>
        </div>
        <h2 className="mgTp48">Accessibility</h2>
        <p className="mgTp12">Card doesn't enforce accessibility decisions on its own, it depends on how it's used. <code>imageAlt</code> should describe the image's content whenever the image conveys meaning, and left empty only when the image is purely decorative. <code>headingLevel</code> defaults to a <code>div</code> rather than a real heading, since a reusable component can't guess where it belongs in a page's heading hierarchy, it's up to whoever places the Card to set <code>headingLevel</code> to the correct <code>h1–h6</code> value so it participates in that page's actual outline, rather than leaving it as a non-semantic default in contexts where a true heading is expected.</p>
      </div>
    </div>
    </>
  )
}

export default CardPage
