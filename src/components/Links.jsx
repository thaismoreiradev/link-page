
export const Links = ({ text, link, darkTheme }) => (

    <article className='w-full'>

        <button className={`
        flex justify-center items-center rounded-xl py-1 px-3 border w-full h-full
        ${darkTheme ? "border-white" : "border-neutral-700"}
        `}
        >
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="outline-none w-full"
            > {text}
            </a>

        </button>

    </article>
)