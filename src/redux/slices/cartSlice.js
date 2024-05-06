import { createSlice } from "@reduxjs/toolkit";




const cartSlice =createSlice({
    name:'cartSlice',
    initialState:[],
    reducers:{
        //add
        addCartItem:(state,actions)=>{
            state.push(actions.payload)
        },
        //remove
        removeCartItem:(state,actions)=>{
         return   state.filter((item)=>item.id!=actions.payload)
        },
        emptyCart:(state)=>{
            state=[]
        }
    }
})

export const {addCartItem,removeCartItem,emptyCart}=cartSlice.actions
export default cartSlice.reducer