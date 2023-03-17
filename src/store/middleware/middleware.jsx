export const MyMiddleware = (store)=>(next)=>(action)=>{
    if(!action.type) {
        return next(action)
    }
    console.log('type: ',action.type)
    console.log('payload: ',action.payload)
    console.log('Old state: ',store.getState())
    next(action)
    console.log('New state: ' , store.getState())
}