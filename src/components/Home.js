import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../features/todoSlice';
import AllTodo from './AllTodo';

const Home = () => {


    const { todo: { allTodo } } = useSelector(state => state)
    const dispatch = useDispatch()
    console.log(allTodo)

    const handleForm = (e) => {

        e.preventDefault()

        dispatch(addTodo({
            id: allTodo.length + 1,
            todoName: e.target.input.value
        }))
        e.target.reset()
    }

    return (
        <div className='max-w-[600px] mx-auto my-20'>
            <div>
                <h1 className='capitalize font-bold text-3xl mb-10'>Please write something</h1>
                <div >
                    <form
                        onSubmit={handleForm}
                        className='flex gap-4 justify-center items-center'>
                        <input name='input' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <button className='btn btn-primary'>Add</button>
                    </form>
                </div>
            </div>
            <AllTodo />
        </div>
    );
};

export default Home;

