'use client'

import BookingModal from '@/components/Modal/BookingModal';
import React, { useEffect, useState } from 'react';

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    return (
        <>
            <BookingModal  />
            
        </>
    );
};

export default ModalProvider;