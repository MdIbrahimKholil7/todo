import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import EditModal from './EditModal';
import { useEffect } from 'react';
import { addReloadTodo, addTodo } from '../features/todoSlice';
import DeleteModal from './DeleteModal';
const AllTodo = () => {
    const { todo: { allTodo } } = useSelector(state => state)
    const [openEditModal, setOpenEditModal] = useState(null)
    const [openDeleteModal, setOpenDeleteModal] = useState(null)
   
    const dispatch = useDispatch()
   
    useEffect(() => {
        const result = JSON.parse(localStorage.getItem('tdoss'))
        if (result?.length > 0) {

            dispatch(addReloadTodo(result))

        }
       
    }, [])

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
                                        <th>{i+1}</th>
                                        <td className='font-bold text-black'>{todoName}</td>
                                        <td >

                                            <label
                                                htmlFor="my-modal-4"
                                                onClick={() => setOpenEditModal({ id, todoName })}
                                                className='flex items-center gap-2 btn btn-sm bg-gray-600
                                                 text-white px-[0px]'
                                            >Edit <AiFillEdit
                                                    className='text-xl font-bold'
                                                /></label></td>
                                        <td>
                                            <label
                                                htmlFor="my-modal-4"
                                                onClick={() => setOpenDeleteModal(id)}
                                                className='flex items-center gap-2 btn btn-sm bg-red-600 text-white'
                                            >Delete <AiFillDelete
                                                    className='text-xl font-bold  '
                                                /></label></td>
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
                openEditModal && <EditModal
                    openEditModal={openEditModal}
                    setOpenEditModal={setOpenEditModal}
                />
            }
            {
                openDeleteModal && <DeleteModal
                openDeleteModal={openDeleteModal}
                setOpenDeleteModal={setOpenDeleteModal}
                />
            }
        </div>
    );
};

export default AllTodo;