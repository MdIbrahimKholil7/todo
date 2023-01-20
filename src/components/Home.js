import React from 'react';
import AllTodo from './AllTodo';

const Home = () => {
    const handleForm = (e) => {
        
        e.preventDefault()
        console.log(e.target.input.value)
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

