
export const Links = ({text, link}) => (

    <div>
        <button className="bg-neutral-300">
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="outline-none"
            > {text}
            </a>
        </button>
    </div>



)