import { Link } from 'react-router-dom';

type CardProps = {
    image: string;
    imageAlt?: string;
    heading: string;
    text?: string;
    href?: string;
    linkText?: string;
    headingLevel?: "p" | "div" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

function Card({ image, imageAlt = "", heading, text, href, linkText, headingLevel = "div" }: CardProps) {
  const Heading = headingLevel;
  return (
    <>
      <div className="simpleCard">
        <img src={image} className="boldBorderBox" alt={imageAlt} />
        <div className="">
            <Heading className="cardHeading mgTp8">{heading}</Heading>
            {text && <div className="subHeading mgTp8">{text}</div>}
            {href && linkText &&
                <div className="mgTp24 mbMgTp12">
                    <Link to={href}>{linkText}</Link>
                </div>
            }
        </div>
      </div>
    </>
  )
}

export default Card
