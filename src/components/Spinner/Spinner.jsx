import './Spinner.css';

const Spinner = () => {
    return (
        <div className='w-full flex flex-col items-center pt-[20px] gap-10'>
            <span className="loader"></span>
        </div>
    )
}

export default Spinner;