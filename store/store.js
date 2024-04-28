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
   id:'',
    getBusId : action((state,id)=>{
        state.id=id
    })
}



const store = createStore({
    booking:bookingModal,
    busSeat:busSeatModal,
    busId,
})

export default store