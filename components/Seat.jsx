'use client'

const Seat = ({ info, onClick }) => {
    return (
        <div onClick={() => onClick({ seatId: info.seatId, seatName: info.seatName })} className={info?.isBooked ? 'w-10 h-10 bg-slate-300 text-green-500 rounded-lg flex justify-center items-center cursor-not-allowed'
            :
            'w-10 h-10 bg-white text-green-500 rounded-lg cursor-pointer flex justify-center items-center transition hover:scale-110'}>
            {info?.seatName}
        </div>
    )
}

export default Seat