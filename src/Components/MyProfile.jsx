
import { use, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import toast from 'react-hot-toast';


const MyProfile = () => {

    const { user, updateUser, setUser } = use(AuthContext);
    const [name, setName] = useState(user?.displayName || '');
    const [photo, setPhoto] = useState(user?.photoURL || '');
    const [isUpdating, setIsUpdating] = useState(false);

    useEffect(() => {
        if (user) {
            setName(user.displayName || '')
            setPhoto(user.photoURL || '')
        }
    }, [user])
    const handleUpdateProfile = () => {
        updateUser({
            displayName: name,
            photoURL: photo,
        })
            .then(() => {
                setUser({ ...user, displayName: name, photoURL: photo })
                toast.success("Successfully update profile")
                setIsUpdating(false);
            })
            .catch((error) => {
                toast.error("Fail to update profile", error.message)
            })
    }


    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className='flex justify-between items-center gap-10  px-5 py-5 shadow-2xl rounded-xl w-auto'>
                <div className='space-y-5 my-5 '>
                    <img src={user?.photoURL || "https://i.ibb.co.com/ym22qcw0/user-icon.jpg"} className='w-[100px] h-[100px] rounded-full ' alt="" />
                    <h2 className='text-lg font-semibold'><strong>Name:</strong> {user?.displayName} </h2>
                    <h2 className='text-lg font-semibold'><strong>Email:</strong> {user?.email}</h2>

                    {!isUpdating && (<button onClick={() => setIsUpdating(true)} className='btn btn-secondary w-full'>Update Your Profile</button>)}
                </div>

                {isUpdating && (<form className='space-y-5 card '>
                    {/* Name */}
                    <div>
                        <label className="label">Name</label>
                        <input type="text" className="input w-full" name='name' onChange={(e) => setName(e.target.value)} placeholder="Name" />
                    </div>

                    {/* Photo URL */}
                    <div>
                        <label className="label">Photo URL</label>
                        <input type="type" className="input w-full" name='photoURL' onChange={(e) => setPhoto(e.target.value)} placeholder="Photo URL" />
                    </div>
                    <button onClick={handleUpdateProfile} className='btn btn-secondary w-full'>Update Profile</button>
                </form>
                )}
            </div>
        </div>
    );
};

export default MyProfile;