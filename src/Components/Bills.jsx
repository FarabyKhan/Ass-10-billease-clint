import { useEffect, useState } from "react";
import BillsCard from "../Pages/BillsCard";



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
            <div className='w-11/12 mx-auto my-20 '>
                <h1 className='text-center text-4xl mb-15 font-semibold text-primary'>All The Bills </h1>
                <div className="dropdown dropdown-bottom">

                    <div className="flex justify-center mb-10">
                        
                        <select onChange={(e) => setCategory(e.target.value)}
                            value={category} className="select select-primary w-full max-w-xs">
                            <option value="All">All Categories</option>
                            <option value="Electricity">Electricity</option>
                            <option value="Gas">Gas</option>
                            <option value="Water">Water</option>
                            <option value="Internet">Internet</option>
                        </select>
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