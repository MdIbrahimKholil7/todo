import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../features/todoSlice';

const DeleteModal = ({ openDeleteModal, setOpenDeleteModal }) => {


    const dispatch = useDispatch()
    const deleteTodoDetails = (id) => {

        dispatch(deleteTodo(id))
        setOpenDeleteModal(null)
    }
    return (
        <div>
        
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <div>
                        <p className='my-5 font-bold capitalize text-xl'>Are you sure you want to delete this todo</p>
                    </div>
                    <button onClick={() => deleteTodoDetails(openDeleteModal)} className='btn bg-red-400 mt-10 text-white'>Yes</button>
                </label>
            </label>
        </div>
    );
};

export default DeleteModal;