'use client'

import React, { useCallback, useEffect } from 'react';
import Modal from './Modal';
import { useStoreActions, useStoreState } from 'easy-peasy';
import BusSeat from '../busSeat';
import SeatPattan from '../SeatPattan';
import { useQuery } from '@tanstack/react-query';
import getSeatsByBusId from '@/action/getSeatsByBusId';


const BookingModal = () => {

    const { booking, busId } = useStoreState(state => state)
    const { onClose } = useStoreActions(action => action.booking)
    const { data, isLoading } = useQuery({ queryKey: ['busSeats'], queryFn: () => getSeatsByBusId(busId.id) })

    const onChange = (isOpen) => {
        if (!isOpen) {
            onClose()
        }
    }

    

    return (
        <Modal isOpen={booking.isOpen} title={"Booking Modal"} handleChange={onChange} onClose={onClose} description={'Please Book a Seat'}>
            <div>
                {isLoading && <h1>Loading....</h1>}
                <div>
                    <SeatPattan direction={data?.pattan} seats={data?.seats} />
                </div>
            </div>
        </Modal>
    );
};

export default BookingModal;