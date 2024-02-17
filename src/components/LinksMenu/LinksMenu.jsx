import { Link } from "react-router-dom";
import parse from "html-react-parser";

const LinksMenu = ({ path, svg, text }) => {
    return (
        <Link className='text-lg font-normal flex items-center gap-2 group' to={path}>
            <span className='p-2 bg-[#202020] text-white rounded-xl group-hover:bg-white group-hover:text-[#202020] transition-colors duration-300'>
                {parse(svg)}
            </span>
            <span className='text-base'>{text}</span>
        </Link>
    )
}
export default LinksMenu;