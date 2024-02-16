import { Link } from "react-router-dom";

const LinksMenu = () => {
    return (
        <Link className='text-lg font-normal flex items-center gap-2 group'>
            <span className='p-2 bg-[#202020] text-white rounded-xl group-hover:bg-white group-hover:text-[#202020] transition-colors duration-300'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" strokeWidth="0" fill="currentColor"></path></svg>
            </span>
            <span className='text-base'>Last 30 days</span>
        </Link>
    )
}
export default LinksMenu;