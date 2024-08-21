import banner from '../assets/banner.png'
import {IoSearchOutline} from "react-icons/io5";
import {useState} from "react";

function Search() {
    const tags=[
        {
            id:1,
            name:'All',
        },
        {
            id:2,
            name:'React',
        },
        {
            id:3,
            name:'React Native',
        },
        {
            id:4,
            name:'Angular',
        },
        {
            id:5,
            name:'UI/UX',
        },
    ]

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="flex justify-center mt-8 flex-col px-[70px] sm:px-[150px] md:px-[150px]">
            <img src={banner} alt="Banner" className="rounded-2xl"/>
            <div className="bg-white shadow-pink-200 shadow-lg p-3 rounded-lg mt-[-20px] mx-[25%] flex items-center">
                <IoSearchOutline className="text-[20px] text-gray-400"/>
                <input
                    type="text"
                    placeholder="Search"
                    className="outline-none ml-2 h-12 p-3 text-lg w-full"
                />
            </div>
            <div className="flex gap-10 justify-center mt-5">
                {tags.map((item, index) => (
                    <ul
                        onClick={() => setActiveIndex(index)}
                        className={`${index == activeIndex ? 'bg-pink-500 text-white' : null} 
                            p-1 pb-2 rounded-sm md:rounded-full cursor-pointer md:px-4
                            hover:scale-110 hover:border-[1px] border-pink-500 transition-all duration-100 ease-in-out`}>
                        <li>{item.name}</li>
                    </ul>
                ))}
            </div>
        </div>
    );
}

export default Search;
