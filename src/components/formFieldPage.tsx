import FormField from './formField'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom';
import { useState } from "react";

function FormFieldPage() {
  const [name, setName] = useState("Jane Doe");
  const [fname, setfName] = useState("Jane");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("test@123!com");

  return (
    <>
    <title>Form Field - Magpie Treasures Design System</title>
    <div className="contentWidth">
      <div className="pd48-0 mbPd24-0">
        <Link to="/components" className="dispInlBlock"><ArrowLeft aria-hidden="true" className="mgRg12" />Back</Link>
        <h1 className="mgTp24">Form Field</h1>
        <div className="mgTp12 thin subTitle">Form field is a labeled text input for collecting a single piece of user data in a form. It pairs a label, an optional helper text, and the input itself, and can show a validation error with either a custom message or a default one. It's a controlled component, so the parent manages its value and update logic.</div>
        <h2 className="mgTp48">Examples</h2>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColJustifyBetween tbColWrap mbColGap12">
          <div className="bold subHeading tableHeadingWidth smTbFullWidth flexShrink0">Standard</div>
          <div className="flexGrow1 flexShrink0 tbFlexGrow0">
            <div className="leftAlign"><FormField label="First name" value={fname} id="id1" onChange={(e) => setfName(e.target.value)} /></div>
          </div>
          <div className="borderBox pd8 surfaceColor tbFullWidth">
            <code>&lt;FormField label="First name" value=&#123;fname&#125; id="id1" onChange="(e) =&gt;..." /&gt;</code>
          </div>
        </div>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColJustifyBetween tbColWrap mbColGap12">
          <div className="bold subHeading tableHeadingWidth smTbFullWidth flexShrink0">With helper text</div>
          <div className="flexGrow1 flexShrink0 tbFlexGrow0">
            <div className="leftAlign"><FormField label="Full name" value={name} id="id2" helperText="Include first, middle, and last names." onChange={(e) => setName(e.target.value)} /></div>
          </div>
          <div className="borderBox pd8 surfaceColor tbFullWidth">
            <code>&lt;FormField label="Full name" value=&#123;name&#125; id="id2" helperText="Include first..." onChange="(e) =&gt;..." /&gt;</code>
          </div>
        </div>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColJustifyBetween tbColWrap mbColGap12">
          <div className="bold subHeading tableHeadingWidth smTbFullWidth flexShrink0">Number type, required, with error</div>
          <div className="flexGrow1 flexShrink0 tbFlexGrow0">
            <div className="leftAlign"><FormField label="Age" type="number" required={true} value={age} error={true} id="id3" onChange={(e) => setAge(e.target.value)} /></div>
          </div>
          <div className="borderBox pd8 surfaceColor tbFullWidth">
            <code>&lt;FormField label="Age" type="number" value=&#123;age&#125; id="id3" required=&#123;true&#125; error=&#123;true&#125; onChange="(e) =&gt;..." /&gt;</code>
          </div>
        </div>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColJustifyBetween tbColWrap mbColGap12">
          <div className="bold subHeading tableHeadingWidth smTbFullWidth flexShrink0">E-mail type, required, with custom error</div>
          <div className="flexGrow1 flexShrink0 tbFlexGrow0">
            <div className="leftAlign"><FormField label="E-mail Address" type="email" required={true} value={email} error="Please enter a valid e-mail address" id="id4" onChange={(e) => setEmail(e.target.value)} /></div>
          </div>
          <div className="borderBox pd8 surfaceColor tbFullWidth">
            <code>&lt;FormField label="E-mail Address" type="email" value=&#123;email&#125; id="id4" required=&#123;true&#125; error="Please enter..." onChange="(e) =&gt;..." /&gt;</code>
          </div>
        </div>
        <h2 className="mgTp48">Properties</h2>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap smTbColGap12 mbColGap12">
          <div className="colHolder colGap24 colMidAlign tbFullWidth flexGrow1">
            <div className="subHeading borderBox pd8 surfaceColor flexShrink0"><code>id</code></div>
            <code>string</code>
          </div>
          <div className="italic">Required, no default</div>
          <div>Unique id used to connect the label, input, and error message.</div>
        </div>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap smTbColGap12 mbColGap12">
          <div className="colHolder colGap24 colMidAlign tbFullWidth flexGrow1">
            <div className="subHeading borderBox pd8 surfaceColor flexShrink0"><code>label</code></div>
            <code>string</code>
          </div>
          <div className="italic">Required, no default</div>
          <div>The field's visible label text.</div>
        </div>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap smTbColGap12 mbColGap12">
          <div className="colHolder colGap24 colMidAlign tbFullWidth flexGrow1">
            <div className="subHeading borderBox pd8 surfaceColor flexShrink0"><code>value</code></div>
            <code>string</code>
          </div>
          <div className="italic">Required, no default</div>
          <div>The input's current value. FormField is a controlled component.</div>
        </div>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap smTbColGap12 mbColGap12">
          <div className="colHolder colGap24 colMidAlign tbFullWidth flexGrow1">
            <div className="subHeading borderBox pd8 surfaceColor flexShrink0"><code>onChange</code></div>
            <code>(e: React.ChangeEvent&lt;HTMLInputElement&gt;) =&gt; void</code>
          </div>
          <div className="italic">Required, no default</div>
          <div>Called when the input's value changes.</div>
        </div>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap smTbColGap12 mbColGap12">
          <div className="colHolder colGap24 colMidAlign tbFullWidth flexGrow1">
            <div className="subHeading borderBox pd8 surfaceColor flexShrink0"><code>type</code></div>
            <code>"text" | "email" | "password" | "number" | "tel" | "url" | "search"</code>
          </div>
          <div className="italic">Optional, "text" default</div>
          <div>The native input type attribute.</div>
        </div>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap smTbColGap12 mbColGap12">
          <div className="colHolder colGap24 colMidAlign tbFullWidth flexGrow1">
            <div className="subHeading borderBox pd8 surfaceColor flexShrink0"><code>helperText</code></div>
            <code>string</code>
          </div>
          <div className="italic">Optional, no default</div>
          <div>Supporting text shown below the label, above the input.</div>
        </div>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap smTbColGap12 mbColGap12">
          <div className="colHolder colGap24 colMidAlign tbFullWidth flexGrow1">
            <div className="subHeading borderBox pd8 surfaceColor flexShrink0"><code>error</code></div>
            <code>boolean | string</code>
          </div>
          <div className="italic">Optional, "false" default</div>
          <div>Shows an error message below the input. A string renders as the message; true renders a default message.</div>
        </div>
        <div className="colHolder colGap24 colMidAlign borderBottom pd24-0 tbColWrap smTbColGap12 mbColGap12">
          <div className="colHolder colGap24 colMidAlign tbFullWidth flexGrow1">
            <div className="subHeading borderBox pd8 surfaceColor flexShrink0"><code>required</code></div>
            <code>boolean</code>
          </div>
          <div className="italic">Optional, "false" default</div>
          <div>Marks the field as required and shows a required indicator next to the label.</div>
        </div>
        <h2 className="mgTp48">Accessibility</h2>
        <p className="mgTp12">The label is connected to the input via <code>htmlFor</code>/<code>id</code>, and the helper text and error message are both connected via <code>aria-describedby</code> so screen readers announce them alongside the field. When an error is present, the input also receives <code>aria-invalid="true"</code>. The required indicator is a visual asterisk only, since the native <code>required</code> attribute already exposes the field's required state to assistive technology; because both are driven by the same <code>required</code> prop, they can't fall out of sync.</p>
      </div>
    </div>
    </>
  )
}

export default FormFieldPage
