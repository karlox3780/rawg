import './Title.css';

const Title = ({ title, subtitle }) => {
    return (
        <>
            {
                (title || subtitle) && <div className="flex flex-col gap-3 text-left">
                    {title && <h1 className="text-5xl md:text-7xl text-white font-bold capitalize">{title}</h1>}
                    {subtitle && <span className="text-md text-white">{subtitle}</span>}
                </div>
            }
        </>
    )
}
export default Title;