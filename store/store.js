const { createStore, action } = require("easy-peasy");

const bookingModal = {
    isOpen:false,
    onOpen:action((state)=>{
        state.isOpen=true
    }),
    onClose: action((state)=>{
        state.isOpen=false
    })
}

const busSeatModal = {
    isOpen:false,
    onOpen:action((state)=>{
        state.isOpen=true
    }),
    onClose: action((state)=>{
        state.isOpen=false
    })
}

const busId = {
   busId:'',
    getBusId : action((state,id)=>{
        state.busId=id
    })
}



const store = createStore({
    booking:bookingModal,
    busSeat:busSeatModal,
    busId,
})

export default store