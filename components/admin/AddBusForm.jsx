'use client'

import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const AddBusForm = ({ handleBusInfo }) => {
    const [busStopes,setBusStopes] = useState({stopes:'',time:''})
    const [formValue, setFormValue] = useState({
        busName: '',
        stopes:[],
        isAc:'NON AC',
        seatPattan:''
    })

    const handleAddStopes = ()=>{
        setFormValue(prev=>({...prev,stopes:[...stopes,busStopes]}))
    }

    console.log('from formValue',formValue)

    const onSubmit = (value) => {
        handleBusInfo(value)
    }
    const isAc = ['AC', 'NON AC']
    const busSeatPattans = ['one by two', 'two by two']
    return (
        <form
            onSubmit={onSubmit}
            className='space-y-6 w-full'
        >
            <div className='space-y-2 w-full'>

                <label htmlFor='busName' className='text-white' >Bus Name</label>
                <Input
                    onChange={e=>setFormValue(prev=>({...prev,busName:e.target.value}))}
                    className='w-full px-2 py-3'
                    placeholder='Enter Bus name'
                    type='text'
                    required
                    value={formValue.busName}
                />
            </div>
            <div className=' w-full flex gap-x-2 items-end'>
                <div className='w-full space-y-2'>
                    <label htmlFor='stopes' className='text-white' >Stopes</label>
                    <Input

                        className='w-full px-2 py-3'
                        placeholder='Enter Bus Road'
                        type='text'
                        required
                    />
                </div>
                <div className='w-full space-y-2'>
                    <label htmlFor='time' className='text-white' >Time</label>
                    <Input
                        className='w-full px-2 py-3'
                        placeholder='Enter Bus Road'
                        type='time'
                        required
                    />
                </div>
                <span className='w-[200px] rounded-md px-3 py-2 bg-white text-green-500 cursor-pointer'>
                    Add Road
                </span>
            </div>
            <div className='w-full  flex items-center gap-x-2'>
                <div className='w-1/2 space-y-2'>
                    <label htmlFor='isAC' className='text-white'>AC OR NON AC</label>
                    <select id='isAC' className='px-3 py-2 rounded-md bg-white w-full '>
                        {isAc.map(item => <option
                            key={item}
                            value={item}>

                            {item}
                        </option>)}
                    </select>
                </div>

                <div className='w-1/2 space-y-2'>
                    <label htmlFor='pattan' className='text-white'>Select Bus Seat Pattan</label>
                    <select id='pattan' className='px-3 py-2 rounded-md bg-white w-full ' required>
                        {busSeatPattans.map(item => <option
                            key={item}
                            value={item}>

                            {item}
                        </option>)}
                    </select>
                </div>
            </div>
            <div>
                <Button className='w-full' type='submit'>Submit</Button>
            </div>

        </form>
    );
};

export default AddBusForm;