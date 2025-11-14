import React, { use, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import LoadingElements from '../Utility/LoadingElements';
import { AuthContext } from '../Provider/AuthContext';
import Swal from 'sweetalert2';





const BillDetails = () => {
    const { id } = useParams()
    const [bill, setBill] = useState({});
    const [loading, setLoading] = useState({})
    const [message, setMessage] = useState("")
    const [modal, setModal] = useState(false)
    const [paid, setPaid] = useState(false)

    const { user } = use(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:3000/bills/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBill(data)
                setLoading(false)
            })
    }, [id])

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/myBills?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.paid) {
                        setPaid(true)
                        setMessage("You've already paid this bill")
                    }

                })
                .catch(error => {
                    console.error(error)
                })
        }
    }, [user])

    if (loading)
        return <LoadingElements></LoadingElements>



    const { image, title, location, category, amount, description, date } = bill

    const billDate = new Date(date)
    const present = new Date()

    const isCurrentMonth = billDate.getMonth() === present.getMonth() &&
        billDate.getFullYear() === present.getFullYear()

    const handlePayClick = () => {
        if (!isCurrentMonth) {
            setMessage("Only current months bill can be paid.")
            return;
        }
        else {
            setModal(true)
            setMessage("")
        }
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const paymentInfo = {
            email: form.email.value,
            billId: form.billId.value,
            billTitle: form.billTitle.value,
            amount: form.amount.value,
            username: form.username.value,
            address: form.address.value,
            phone: form.phone.value,
            date: form.date.value,

        }

        fetch('http://localhost:3000/myBills', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(paymentInfo)
        })
            .then(res => res.json())
            .then(data => {
                setMessage(data.message)
                setModal(false)

                if (data.message === "Payment is successful") {
                    Swal.fire({
                        position: "middle",
                        icon: "success",
                        title: "Payment is successful",
                        text: 'Your bill has been paid successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
                else {
                    Swal.fire({
                        position: "middle",
                        icon: "error",
                        title: "Payment Failed",
                        text: data.message,
                        showConfirmButton: true,
                        timer: 1500
                    });
                }
            })
            .catch(err => {
                console.error(err);

            })
    }


    const categoryLogos = {
        Electricity: "https://i.ibb.co.com/B2stTmLb/electricity.png",
        Gas: "https://i.ibb.co.com/845j38Vy/gas.jpg",
        Water: "https://i.ibb.co.com/gNRK0Gg/water.png",
        Internet: "https://i.ibb.co.com/Kj49dtX1/internet.jpg"
    }
    const categoryLogo = categoryLogos[category] || ""


    return (
        <div className='min-h-screen my-30'>
            <div className="flex flex-col md:flex-row justify-center items-center bg-base-100 shadow-sm gap-15">
                <figure>
                    <img
                        className='h-[450px] w-[450px] object-cover mt-5'
                        src={image}
                        alt={category} />
                </figure>
                <div className="flex flex-col items-start space-y-3 my-20">
                    <div className='space-y-3 flex justify-center items-center gap-2'>
                        <img src={categoryLogo} className='w-[50px] h-[50px] mt-4' alt={category} />
                        <h2 className="card-title text-4xl text-accent"> {title}</h2>
                    </div>
                    <div className='w-full border-b border-primary  space-y-5 pb-10 '>
                        <p className='text-start text-accent text-xl font-semibold flex justify-center items-center gap-3'><img src="/category.png" alt="" className='w-[30px] h-[30px]' />Category:<span className='text-primary'>{category}</span></p>

                        <p className='text-start text-accent text-xl font-semibold flex justify-center items-center gap-3'><img src="/location.png" alt="" className='w-[30px] h-[30px]' />Location:<span>{location}</span></p>
                    </div>

                    <div className="card-actions flex flex-row justify-between items-center mx-20 gap-35">
                        <p className='text-start text-accent text-xl font-semibold flex justify-center items-center gap-3'><img src="/tk.png" alt="" className='w-[30px] h-[30px]' /><span className='text-accent'>{amount}</span></p>
                        
                        <p className='text-start text-accent text-xl font-semibold flex justify-center items-center gap-3'><img src="/calendr.png" alt="" className='w-[30px] h-[30px]' /><span className='text-accent'>{date}</span></p>

                    </div>
                    <div className="card-actions my-10">
                        <button
                            onClick={handlePayClick}

                            className={`btn mx-20 w-80 ${isCurrentMonth ? "btn-primary" : " btn bg-red-500 text-white"}  `}>Pay Bill</button>
                    </div>
                    {
                        message &&
                        <p className='text-lg text-primary text-center mx-20'>{message}</p>
                    }
                </div>

            </div>
            <div className=" border-t border-base-300 pt-8 mx-10 my-20">
                <h1 className='text-2xl font-bold text-accent mb-3 text-center md:text-left'>Description</h1>
                <p className='text-gray-600 leading-relaxed text-justify'>{description}</p>
            </div>

            {modal && (

                <dialog open className="modal modal-bottom sm:modal-middle">
                    <div onClick={e => e.stopPropagation()} className="modal-box">
                        <p className="text-center text-3xl text-primary font-semibold">Pay Your Bill </p>
                        <form onSubmit={handleSubmit} className='space-y-2'>
                            <div className="modal-action">
                                <div className="card-body">
                                    <fieldset className="fieldset space-y-1">

                                    <div className='flex justify-center items-center gap-5'>
                                        <div className=''>
                                        <label className="label text-sm font-semibold">Email</label>
                                    <input type="email" name='email' defaultValue={user?.email || ""}className="input w-full" placeholder="Email" readOnly />
                                    </div>


                                       <div className=''>
                                        <label className="label text-sm font-semibold">Bill Id</label>
                                       <input type="text" name='billId' defaultValue={id} className="input"placeholder="Bill Id" readOnly />
                                       </div>
                                    </div>

                                       <label className="label text-sm font-semibold">Name Of The Bill</label>
                                       <input type="text" name='billTitle' defaultValue={title}className="input" placeholder="Name Of The Bill" readOnly />

                                    <div className='flex justify-center items-center gap-5'>
                                        <div>
                                            <label className="label text-sm font-semibold">Amount</label>
                                    <input type="number" name='amount' defaultValue={amount}className="input" placeholder="Amount" readOnly />
                                        </div>

                                    <div>
                                        <label className="label text-sm font-semibold">Date</label>
                                    <input type="date" name='date' defaultValue={date}className="input" placeholder="Date" readOnly />
                                    </div>
                                    </div>

                                    <label className="label text-sm font-semibold">Your Name</label>
                                    <input type="text" name='username' required className="input"placeholder="Your Name" />

                                    <label className="label text-sm font-semibold">Your Address</label>
                                       <input type="text" name='address' required className="input"placeholder="Your Address" />

                                    <label className="label text-sm font-semibold">Phone Number</label>
                                        <input type="text" name='phone' required className="input" placeholder="Phone Number" />


                                        <div className='flex justify-end gap-2 mt-4'>
                                            <button onClick={() => setModal(false)} type="button" className="btn btn-neutral mt-4">Cancel</button>

                                            <button type="submit" className="btn btn-primary mt-4">Confirm Payment</button>
                                        </div>

                                    </fieldset>
                                </div>
                            </div>
                        </form>
                    </div>

                </dialog>

            )}

        </div>
    );
};


export default BillDetails;