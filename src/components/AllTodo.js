import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import EditModal from './editModal';
const AllTodo = () => {
    const { todo: { allTodo } } = useSelector(state => state)
    const [openEditModal, setOpenEditModal] = useState(null)
    const [openDeleteModal, setOpenDeleteModal] = useState(null)
    const [editId, setEditId] = useState(null)
    const [deleteId, setDeleteId] = useState(null)

    return (
        <div >
            <h1 className='text-2xl font-bold my-32'>Your Daily Todo</h1>

            <div>
                <div className="overflow-x-auto">
                    {
                        allTodo.length > 0 ? <table className="table w-full text-[17px]">

                            <thead className='text-xl'>
                                <tr className=''>
                                    <th>Id</th>
                                    <th>Todo</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    allTodo.map(({ id, todoName }, i) => <tr
                                        key={i}
                                        className=''>
                                        <th>{id}</th>
                                        <td className='font-bold text-black'>{todoName}</td>
                                        <td >
                                            <button

                                                className='flex items-center gap-2 btn btn-sm bg-gray-600 text-white'
                                            >Edit <AiFillEdit
                                                    className='text-xl font-bold'
                                                /></button></td>
                                        <td>
                                            <button
                                                className='flex items-center gap-2 btn btn-sm bg-red-600 text-white'
                                            >Delete <AiFillDelete
                                                    className='text-xl font-bold  '
                                                /></button></td>
                                    </tr>)
                                }

                            </tbody>
                        </table> : <div>
                            <p className='text-xl my-8 font-bold'>No todo available. Please add some todo</p>
                        </div>
                    }
                </div>
            </div>
            {
                openEditModal && <EditModal />
            }
        </div>
    );
};

export default AllTodo;