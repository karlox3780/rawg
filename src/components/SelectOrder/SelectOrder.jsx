import './SelectOrder.css';

const SelectOrder = ({ orderby, handleOrder }) => {
    return (
        <select defaultValue={orderby} onChange={handleOrder} name="orderby" className="bg-[#202020] w-full text-white text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#202020] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white">
            <option value="-relevance">Relevance</option>
            <option value="-created">Date added</option>
            <option value="name">Name</option>
            <option value="-released">Release date</option>
            <option value="-added">Popularity</option>
            <option value="-rating">Average rating</option>
        </select>
    )
}
export default SelectOrder;