import { useEffect, useState } from "react";
import BillsCard from "../Pages/BillsCard";
import { FaBorderAll, FaInternetExplorer } from "react-icons/fa6";
import { MdElectricBolt } from "react-icons/md";
import { SiFireship } from "react-icons/si";
import { IoIosWater } from "react-icons/io";



const Bills = () => {
    const [bills, setBills] = useState([]);
    const [loading, setLoading] = useState(true)
    const [category, setCategory] = useState("All")

    useEffect(() => {

        let url = 'http://localhost:3000/bills'
        if (category !== "All") {
            url += `?category=${category}`
        }

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setBills(data)
                setLoading(false)
            })
            .catch((err => {
                console.log(err)
                setLoading(false)
            }))
    }, [category])


    if (loading) {
        return <p className="text-2xl">Loading.....</p>
    }
    return (
        <div className='flex flex-col justify-center items-center my-5'>
            <div className='w-11/12 mx-auto my-20'>
                <h1 className='text-center text-4xl mb-5 font-semibold text-primary'>All The Bills </h1>
                <h4 className="text-sm font-semibold mb-15  text-center">Hair you can Choose the latest utility bills available.  You can give one or multiple bills, just choose your bill   <span className="font-bold">Click </span> see details button, see you bills details then pay you bill, easy right...</h4>
                <div className="dropdown dropdown-bottom flex justify-between items-center">
                    <div>

                    </div>
                    <div className="flex justify-center gap-3">
                        <h2 className="text-secondary text-xl font-bold mt-1">Choose Your Category</h2>
                        <div className="flex justify-between  mb-10">
                            <select onChange={(e) => setCategory(e.target.value)}
                                value={category} className="select select-primary w-full max-w-xs font-semibold rounded-xl">
                                <option value="All"><FaBorderAll /> All Categories</option>
                                <option value="Electricity"><MdElectricBolt /> Electricity</option>
                                <option value="Gas"><SiFireship /> Gas</option>
                                <option value="Water"><IoIosWater /> Water</option>
                                <option value="Internet"><FaInternetExplorer /> Internet</option>
                            </select>
                        </div>
                    </div>

                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 mx-auto'>
                    {
                        bills.map((bill, index) => <BillsCard key={index} bill={bill}></BillsCard>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Bills;