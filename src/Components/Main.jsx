import React from 'react'
import { Chat } from './Chat'
import { useAppContext } from 'context/app.context'
export const Main = () => {
    const { state, dispatch } = useAppContext();
    const [refresh,setRefresh] = React.useState(false);
    React.useEffect(()=>{
        if(state.newChat){
            setRefresh(!refresh)
        }
    },[state])
    return <>
    {
        refresh ? <Chat/>: <Chat/>
    }
    </>
}


