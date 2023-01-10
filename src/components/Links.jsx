
export const Links = ({ text, link, darkTheme }) => (

    <div className=' w-[130px] xs:w-[160px]'>
        <button className={`
        flex justify-center items-center rounded-xl py-1 px-3 border-[1px] w-full h-8
        ${darkTheme ? "border-white" : "border-neutral-700"}
        `}
        >
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