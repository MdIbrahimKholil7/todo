import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editTodo } from '../features/todoSlice';

const EditModal = ({ openEditModal, setOpenEditModal }) => {

    const { todo: { allTodo } } = useSelector(state => state)
    const dispatch=useDispatch()
    const { todoName, id } = openEditModal || {}
    const [value, setValue] = useState(todoName)
    const updateTodo = (id, name) => {

        dispatch(editTodo({id,name}))
        setOpenEditModal(null)
    }
    return (
        <div>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <div>
                        <p className='my-5 font-bold capitalize text-xl'>Update your Todo</p>
                        <input
                            onChange={e => setValue(e.target.value)}
                            value={value}
                            type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <button onClick={() => updateTodo(id, value)} className='btn bg-green-400 mt-10 '>Save</button>
                </label>
            </label>
        </div>
    );
};

export default EditModal;