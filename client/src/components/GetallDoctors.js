import React from 'react'
import './GetAllDoctors.css'
import { currentUser, getalldoctors } from '../Redux/actions/user'
import { useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux'


import Docard from './Docard'
const GetallDoctors = () => {
    const dispatch=useDispatch()
    useEffect(() => {
        
       dispatch(getalldoctors())
       
    }, [])

    const doc = useSelector(state => state.userReducer.Doc)
    
    return (
        <div className='alldoctor' style={{display:'flex' ,flexWrap:'wrap' ,justifyContent:'space-around',marginTop:'10px'}}>
           {doc.map((el)=><Docard key={el._id} el={el}/>)}
        </div>
    )
}

export default GetallDoctors
