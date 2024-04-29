'use client'

import React from 'react';
import Modal from './Modal';
import { useStoreActions, useStoreState } from 'easy-peasy';
import BusSeat from '../busSeat';


const BookingModal = () => {

    const { booking, busId } = useStoreState(state => state)
    const { onClose } = useStoreActions(action => action.booking)

    const onChange = (isOpen) => {
        if (!isOpen) {
            onClose()
        }
    }

    return (
        <Modal isOpen={booking.isOpen} title={"Booking Modal"} handleChange={onChange} onClose={onClose} description={'Please Booked a Seat'}>
            <BusSeat busId={busId.id}/>
        </Modal>
    );
};

export default BookingModal;