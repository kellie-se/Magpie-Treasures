import Modal from './modal'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom';
import Button from './button';
import { useState } from 'react';

function ModalPage() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  
  const ex3ModalContent = (<>
    <ul>
        <li><strong>Item:</strong> Lemon lavender layer cake, 8 inch</li>
        <li><strong>Pickup:</strong> Saturday at 10am</li>
        <li><strong>Notes:</strong> Please write "Happy Birthday, Mara" on top</li>
    </ul>
    <p className="mgTp12">We'll email a confirmation, and our team will reach out within one business day if we have any questions.</p>
  </>)
  const ex3ModalActions = (<>
    <div className="colHolder colGap12 colJustifyEnd colMidAlign">
        <Button buttonText="Cancel" variant="secondary" onClick={() => setOpenModal(null)} />
        <Button buttonText="Place Order" variant="primary" />
    </div>
  </>)

  const ex4ModalActions = (<>
    <div className="colHolder colGap12 colJustifyEnd colMidAlign">
        <Button buttonText="Keep Order" variant="secondary" onClick={() => setOpenModal(null)} />
        <Button buttonText="Cancel Order" variant="primary" />
    </div>
  </>)

  return (
    <>
        <title>Modal - Magpie Treasures Design System</title>
        <div className="contentWidth">
            <div className="pd48-0 mbPd24-0">
                <Link to="/components" className="dispInlBlock"><ArrowLeft aria-hidden="true" className="mgRg12" />Back</Link>
                <h1 className="mgTp24">Modal</h1>
                <div className="mgTp12 thin subTitle">Modal is a full-screen overlay dialog that interrupts the page to present focused content or require a response before the user continues. It is controlled by its parent through isOpen and onClose, and closes via the close button, the Escape key, or a click on the overlay. It comes in two sizes, small for brief alerts and large for standard modal content.</div>
                <h2 className="mgTp48">Examples</h2>
                <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap mbColGap12">
                    <div className="bold subHeading tableHeadingWidth smTbFullWidth">Large</div>
                    <div className="flexGrow1 tbRightAlign smTbLeftAlign">
                        <button className="btn primBtn" onClick={() => setOpenModal("ex1")}>Definition</button>
                        <Modal isOpen={openModal === "ex1"} title="What does &quot;provenance&quot; mean?" content={<><p>Provenance is the recorded history of an antique: where it came from, who owned it, and how it ended up here. Pieces with a documented provenance are often more valuable, and we share whatever we know about an item's story on its tag.</p></>} onClose={() => setOpenModal(null)} />
                    </div>
                    <div className="borderBox pd8 surfaceColor tbFullWidth">
                        <code>&lt;Modal title="What does..." content=&#123;...&#125; ... /&gt;</code>
                    </div>
                </div>
                <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap mbColGap12">
                    <div className="bold subHeading tableHeadingWidth smTbFullWidth">Small</div>
                    <div className="flexGrow1 tbRightAlign smTbLeftAlign">
                        <button className="btn primBtn" onClick={() => setOpenModal("ex2")}>Notice</button>
                        <Modal isOpen={openModal === "ex2"} size="small" title="Closing early today" content={<><p>We're closing at 2pm today for a private event. The café and shop will be back to regular hours tomorrow. Thanks for your understanding!</p></>} onClose={() => setOpenModal(null)} />
                    </div>
                    <div className="borderBox pd8 surfaceColor tbFullWidth">
                        <code>&lt;Modal size="small" title="Closing..." content=&#123;...&#125; ... /&gt;</code>
                    </div>
                </div>
                <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap mbColGap12">
                    <div className="bold subHeading tableHeadingWidth smTbFullWidth">Large with actions</div>
                    <div className="flexGrow1 tbRightAlign smTbLeftAlign">
                        <button className="btn primBtn" onClick={() => setOpenModal("ex3")}>Your Order</button>
                        <Modal isOpen={openModal === "ex3"} title="Order Review" content={ex3ModalContent} actions={ex3ModalActions} onClose={() => setOpenModal(null)} />
                    </div>
                    <div className="borderBox pd8 surfaceColor tbFullWidth">
                        <code>&lt;Modal title="Order Review" content=&#123;...&#125; actions=&#123;...&#125; ... /&gt;</code>
                    </div>
                </div>
                <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap mbColGap12">
                    <div className="bold subHeading tableHeadingWidth smTbFullWidth">Small with actions</div>
                    <div className="flexGrow1 tbRightAlign smTbLeftAlign">
                        <button className="btn primBtn" onClick={() => setOpenModal("ex4")}>Cancel Order</button>
                        <Modal isOpen={openModal === "ex4"} size="small" title="Cancel your order?" content="This will cancel your custom cake order for Saturday. You can place a new order anytime with at least 48 hours notice." actions={ex4ModalActions} onClose={() => setOpenModal(null)} />
                    </div>
                    <div className="borderBox pd8 surfaceColor tbFullWidth">
                        <code>&lt;Modal size="small" title="Cancel your..." content="This will..." actions=&#123;...&#125; ... /&gt;</code>
                    </div>
                </div>
                <p className="mgTp12 italic subHeading">isOpen and onClose are omitted from the snippets for brevity</p>
                <h2 className="mgTp48">Properties</h2>
                <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap smTbColGap12 mbColGap12">
                    <div className="colHolder colGap24 colMidAlign tbFullWidth flexGrow1">
                        <div className="subHeading borderBox pd8 surfaceColor flexShrink0"><code>isOpen</code></div>
                        <code>boolean</code>
                    </div>
                    <div className="italic">Required, no default</div>
                    <div>Controls whether the modal is visible. Managed by the parent.</div>
                </div>
                <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap smTbColGap12 mbColGap12">
                    <div className="colHolder colGap24 colMidAlign tbFullWidth flexGrow1">
                        <div className="subHeading borderBox pd8 surfaceColor flexShrink0"><code>onClose</code></div>
                        <code>() =&gt; void</code>
                    </div>
                    <div className="italic">Required, no default</div>
                    <div>Called when the modal should close: the close button, the Escape key, or a click on the overlay.</div>
                </div>
                <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap smTbColGap12 mbColGap12">
                    <div className="colHolder colGap24 colMidAlign tbFullWidth flexGrow1">
                        <div className="subHeading borderBox pd8 surfaceColor flexShrink0"><code>title</code></div>
                        <code>string</code>
                    </div>
                    <div className="italic">Required, no default</div>
                    <div>The modal's heading, also used as its accessible name.</div>
                </div>
                <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap smTbColGap12 mbColGap12">
                    <div className="colHolder colGap24 colMidAlign tbFullWidth flexGrow1">
                        <div className="subHeading borderBox pd8 surfaceColor flexShrink0"><code>content</code></div>
                        <code>ReactNode</code>
                    </div>
                    <div className="italic">Required, no default</div>
                    <div>The modal body. Accepts plain text or richer markup like links, lists, or other components.</div>
                </div>
                <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap smTbColGap12 mbColGap12">
                    <div className="colHolder colGap24 colMidAlign tbFullWidth flexGrow1">
                        <div className="subHeading borderBox pd8 surfaceColor flexShrink0"><code>actions</code></div>
                        <code>ReactNode</code>
                    </div>
                    <div className="italic">Optional, no default</div>
                    <div>Optional footer area, typically for buttons like Cancel and Confirm.</div>
                </div>
                <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap smTbColGap12 mbColGap12">
                    <div className="colHolder colGap24 colMidAlign tbFullWidth flexGrow1">
                        <div className="subHeading borderBox pd8 surfaceColor flexShrink0"><code>size</code></div>
                        <code>"small" | "large"</code>
                    </div>
                    <div className="italic">Optional, "large" default</div>
                    <div>Small suits brief alerts, large suits standard modal content.</div>
                </div>
                <h2 className="mgTp48">Accessibility</h2>
                <p className="mgTp12">The modal uses <code>role="dialog"</code> with <code>aria-modal="true"</code> and is named by its title through <code>aria-labelledby</code>, so screen readers announce it when it opens. While it's open, the app's <code>#root</code> element is made <code>inert</code>, which removes the rest of the page from the tab order and the accessibility tree, so keyboard focus and screen reader navigation stay inside the modal. This relies on the app being mounted in an element with the id root, so projects using a different root element will need to adjust it. When the modal opens, focus moves to the modal container, and when it closes, focus returns to the element that opened it. It can be dismissed with the close button, the Escape key, or a click on the overlay, and scrolling the page behind it is locked while it's open. The close button is a native button with an <code>aria-label</code>, and its icon is marked <code>aria-hidden="true"</code>. Because the rest of the page is <code>inert</code>, the title is rendered as an <code>h1</code>, so any headings inside the content should start at <code>h2</code>.</p>
            </div>
        </div>
    </>
  )
}
export default ModalPage