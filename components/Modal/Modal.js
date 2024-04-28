'use client'

import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { IoMdClose } from 'react-icons/io'



const Modal = ({ isOpen, onClose, children, description, title, handleChange }) => (
    <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={handleChange}>
        <Dialog.Portal>
            <Dialog.Overlay className='bg-neutral-900/50 backdrop-blur-sm fixed inset-0'>
                <Dialog.Content className='fixed drop-shadow-md border border-green-500 top-[50%] left-[50%] max-h-full h-full md:h-auto md:max-h-[85vh] w-full md:w-[98vw] md:max-w-[450px] translate-x-[-50%] translate-y-[-50%] p-[25px] bg-green-500 focus:outline-none rounded-md'>
                    <Dialog.Title className='text-xl text-center font-bold mb-4 text-white'>
                        {title}
                    </Dialog.Title>
                    <Dialog.Description className='mb-5 text-sm leading-normal text-center text-white'>
                        {description}
                    </Dialog.Description>
                    <div className='w-full flex justify-center'>
                        {children}
                    </div>
                    <Dialog.Close asChild>
                        <button onClick={() => onClose()} className='text-neutral-900 hover:text-white absolute top-[10px]  right-[10px] appearance-none items-center justify-center rounded-full focus:outline-none '>
                            <IoMdClose />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Overlay>
        </Dialog.Portal>
    </Dialog.Root>

);



export default Modal;