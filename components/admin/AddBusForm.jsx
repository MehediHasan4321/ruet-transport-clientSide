'use client'

import React, { useCallback, useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { oneByOneSeat, twoByTwoSeat } from '@/src/constants'

const AddBusForm = ({ handleBusInfo }) => {
    const isAc = ['AC', 'NON AC']
    const busSeatPattans = ['one by two', 'two by two']
    const initDistination = { distination: '', time: '' }
    const [distination, setdistination] = useState({ ...initDistination })
    const [error, setError] = useState(false)
    const [formValue, setFormValue] = useState({
        busName: '',
        isAc: isAc[0],
        seatPattan: busSeatPattans[0],
        stopes: [],
        busSeat: []


    })

    const handleAddStopes = (value) => {

        if (value.distination && value.time) {
            setError(false)
            setFormValue(prev => ({ ...prev, stopes: [...prev.stopes, value] }))
            setdistination(initDistination)
            return
        } else {
            setError(true)
        }
    }

    const handleChangePattan = e => {
        setFormValue(prev => ({ ...prev, seatPattan: e.target.value }))
    }

    const handleSeats = useCallback((pattan)=>{
        if(pattan==='one by two'){
            return oneByOneSeat
        }else{
            return twoByTwoSeat
        }
    },[formValue.seatPattan])


    const totalSeat = handleSeats(formValue.seatPattan)

    const onSubmit = (e) => {
        e.preventDefault()
        if (formValue.stopes.length < 2) {
            return alert(`add minimum 2 bus Stopes, You add only ${formValue?.stopes?.length} Stopes`)
        }
        handleBusInfo({...formValue,busSeat:totalSeat})
    }

    const handleDistinationChange = (e) => {
        setdistination(prev => ({ ...prev, distination: e.target.value }))
    }

    const handleTimeChange = e => {

        setdistination(prev => ({ ...prev, time: e.target.value }))
    }


    return (
        <form
            onSubmit={onSubmit}
            className='space-y-6 w-full'
        >
            <div className='space-y-2 w-full'>

                <label htmlFor='busName' className='text-white' >Bus Name</label>
                <Input
                    onChange={e => setFormValue(prev => ({ ...prev, busName: e.target.value }))}
                    className='w-full px-2 py-3'
                    placeholder='Enter Bus name'
                    type='text'
                    required
                    value={formValue.busName}
                />
            </div>
            {
                formValue.stopes && <div className='flex flex-col gap-y-2 max-h-[130px] overflow-y-auto'>
                    {formValue.stopes.map(item => <div key={item.distination} className='w-full flex justify-between items-center bg-green-500 px-2 py-1 text-white text-md'>
                        <h2>{item.distination}</h2>
                        <h2>{item.time}</h2>
                    </div>)}
                </div>
            }
            <div className=' w-full flex gap-x-2 items-end'>
                <div className='w-full space-y-2'>
                    <label htmlFor='stopes' className='text-white' >Stopes</label>
                    <Input
                        onChange={handleDistinationChange}
                        className={error ? 'w-full px-2 py-3 border border-red-500' : 'w-full px-2 py-3'}
                        placeholder='Enter Bus Road'
                        type='text'
                        value={distination.distination}

                    />
                </div>
                <div className='w-full space-y-2'>
                    <label htmlFor='time' className='text-white' >Time</label>
                    <Input
                        onChange={handleTimeChange}
                        className={error ? 'w-full px-2 py-3 border border-red-500' : 'w-full px-2 py-3'}
                        placeholder='Enter Bus Road'
                        type='time'
                        value={distination.time}
                    />
                </div>
                <span onClick={() => handleAddStopes(distination)} className='w-[200px] rounded-md px-3 py-2 bg-white text-green-500 cursor-pointer'>
                    Add
                </span>
            </div>
            <div className='w-full  flex items-center gap-x-2'>
                <div className='w-1/2 space-y-2'>
                    <label htmlFor='isAC' className='text-white'>AC OR NON AC</label>
                    <select
                        onChange={e => setFormValue(prev => ({ ...prev, isAc: e.target.value }))}
                        id='isAC'
                        className='px-3 py-2 rounded-md bg-white w-full'
                        required
                        value={formValue.isAc}
                    >
                        {isAc.map(item => <option
                            key={item}
                            value={item}
                        >
                            {item}
                        </option>)}
                    </select>
                </div>

                <div className='w-1/2 space-y-2'>
                    <label htmlFor='pattan' className='text-white'>Select Bus Seat Pattan</label>
                    <select
                        onChange={handleChangePattan}
                        id='pattan'
                        className='px-3 py-2 rounded-md bg-white w-full '
                        required
                        value={formValue.seatPattan}
                    >
                        {busSeatPattans.map(item => <option
                            key={item}
                            value={item}>

                            {item}
                        </option>)}
                    </select>
                </div>
            </div>
            <div>
                <Button className='w-full' type='submit'>View Before Publish</Button>
            </div>

        </form>
    );
};

export default AddBusForm;