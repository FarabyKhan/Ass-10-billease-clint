import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import Swal from 'sweetalert2';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const MyPayBills = () => {
    const { user } = use(AuthContext)
    const [myBills, setMyBills] = useState([])
    const [modal, setModal] = useState(false)
    const [updateBill, setUpdateBill] = useState(null)
    const [selectedBill, setSelectedBill] = useState(null)

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/myBills?email=${user.email}`, {
                headers: {
                    authorization: `Bearer ${user.accessToken}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    setMyBills(data)
                })
        }
    }, [user?.email, user])

    const totalAmount = myBills.reduce(
        (sum, bill) => sum + parseFloat(bill.amount || 0), 0
    )

    const handleDeleteBill = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:3000/myBills/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('after delete', data);
                        if (data.deletedCount)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your bill has been deleted.",
                                icon: "success"
                            });
                    })
                const remainingBills = myBills.filter(bill => bill._id !== _id);
                setMyBills(remainingBills)

            }
        });
    }

    const handleUpdateClick = (bill) => {
        setSelectedBill(bill);
        setUpdateBill(bill);
        setModal(true);
    }

    const handleUpdateChange = (e) => {
        const { name, value } = e.target;
        setUpdateBill({ ...updateBill, [name]: value });
    };

    const handleUpdateSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const updateInfo = {
            amount: form.amount.value,
            address: form.address.value,
            phone: form.phone.value,
            date: form.date.value,
            email: user.email,
        }


        fetch(`http://localhost:3000/myBills/${updateBill._id}`, {
            method: "PUT",
            
             headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${user.accessToken}`
                },
                body: JSON.stringify(updateInfo),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "middle",
                        icon: "success",
                        title: "Payment is successful",
                        text: 'Your bill has been updated successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    });

                    setMyBills(myBills.map((bill) => bill._id === updateBill._id ? { ...bill, ...updateBill } : bill))

                }
                setModal(false)
                setUpdateBill(null)

            })
            .catch(err => {
                console.error(err);

            })



    }
    const handleDownloadPdf = () => {
        console.log("Bills inside PDF:", myBills);
        const doc = new jsPDF()

        doc.setFontSize(18)
        doc.text('My Pay Bills Report', 14, 15);

        doc.setFontSize(12)
        doc.text(`User: ${user?.displayName || ""}`, 14, 25);
        doc.text(`Email: ${user?.email || ""}`, 14, 32)

        const tableColumn = [" Bill No.", "Address", "Amount", "Phone", "Date"]
        const tableRow = [];

        myBills.forEach((bill, index) => {
            const rowData = [
                index + 1,
                bill.address,
                bill.amount,
                bill.phone,
                bill.date
            ];
            tableRow.push(rowData)
        })

        autoTable(doc, {
            startY: 40,
            head: [tableColumn],
            body: tableRow,
            styles: { fontSize: 12 },
            theme: "striped"
        })

        const total = myBills.reduce(
            (sum, bill) => sum + parseFloat(bill.amount || 0), 0

        );
        doc.text(`Total Amount: ${total} TK`, 14, doc.lastAutoTable.finalY + 10);
        doc.save('MyPayBills.pdf')

    }


    return (

        <div className='min-h-screen w-11/12 mx-auto my-30'>
            <div className='text-center mt-30'>
                <h1 className='my-20 text-primary text-3xl font-bold'>My Payed Bills</h1>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center mb-15 text-accent text-xl font-bold mx-10 p-5 rounded-2xl shadow-xl gap-0 md:gap-5 '>
          <h2 className='text-lg md:text-xl '>Total Bills: <span className='text-secondary font-normal md:font-semibold'>{myBills.length}</span></h2>
                
                    <h2 className='flex justify-center items-center gap-2 text-lg md:text-xl'>Total Amount Paid: <span className='text-secondary font:normal md:font-semibold flex justify-center items-center'><FaBangladeshiTakaSign /> {totalAmount}</span> </h2>

                    <button onClick={handleDownloadPdf} className='btn  text-red-500 font-semibold flex justify-center border-red-500'> <img src="/pdf.png" className='w-8 h-8' alt="" /><span> Download as PDF</span></button>
                

            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full min-w-max">
                    {/* head */}
                    <thead className='bg-blue-500 text-white'>
                        <tr>
                            <th>
                                <label>
                                    Bill No.
                                </label>
                            </th>
                            <th className='hidden sm:table-cell'>Name & Email</th>
                            <th className='hidden sm:table-cell'>Bills Name</th>
                            <th>Address & Phone</th>
                            <th>Amount</th>
                            <th className="hidden lg:table-cell">Phone No.</th>
                            <th>Date</th>
                            <th>Buttons</th>
                        </tr>
                    </thead>
                    <tbody>

                        {

                            myBills.map((myBill, index) => <tr key={myBill._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex  items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={user?.photoURL || "https://img.daisyuiimages/profile/demo/5@94.webp"}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{myBill.username}</div>
                                            <div className="text-sm opacity-50 my-1 ">{myBill.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className='font-bold '>{myBill.billTitle}</td>
                                <td className=''>
                                    {myBill.address}
                                </td>

                                <td className='font-bold'>{myBill.amount} TK</td>
                                <td>
                                    <p className="badge badge-ghost badge-sm">{myBill.phone}</p>
                                </td>
                                <td>
                                    <p className='font-semibold'>{new Date(myBill.date).toLocaleDateString()}</p>
                                </td>
                                <td className='flex flex-warp gap-2'>
                                    <button onClick={() => handleUpdateClick(myBill)} className='btn btn-primary'>Update</button>
                                    <button onClick={() => handleDeleteBill(myBill._id)}
                                        className='btn border-red-500 text-red-500'>Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {modal && updateBill && (

                <dialog open className="modal modal-bottom sm:modal-middle">
                    <div onClick={e => e.stopPropagation()} className="modal-box">
                        <p className="text-center text-3xl text-primary font-semibold">Update Your Bill</p>
                        <form onSubmit={handleUpdateSubmit} className='space-y-2 '>
                            <div className="modal-action">
                                <div className="card-body">
                                    <fieldset className="fieldset space-y-2">

                                        <label className="label">Amount</label>
                                        <input type="number"
                                            name='amount'
                                            defaultValue={updateBill.amount}
                                            onChange={handleUpdateChange} className="input w-full" placeholder="Amount" />

                                        <label className="label">Your Address</label>
                                        <input type="text" name='address' defaultValue={updateBill.address} onChange={handleUpdateChange} required className="input w-full" placeholder="Your Address" />

                                        <label className="label">Phone Number</label>
                                        <input type="text" name='phone' defaultValue={updateBill.phone} onChange={handleUpdateChange} required className="input w-full" placeholder="Phone Number" />

                                        <label className="label">Date</label>
                                        <input type="date" name='date' value={updateBill.date || ""} onChange={handleUpdateChange} required className="input w-full" placeholder="Date" />


                                        <div className='flex justify-end gap-2 mt-4'>
                                            <button onClick={() => setModal(false)} type="button" className="btn btn-neutral mt-4 ">Cancel</button>

                                            <button type="submit" className="btn btn-primary mt-4 ">Update</button>
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

export default MyPayBills;