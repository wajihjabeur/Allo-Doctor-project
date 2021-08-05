import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleterec, getallrec } from '../Redux/actions/rec'


const AdminReport = () => {

    const dispatch=useDispatch()
    useEffect(() => {
       dispatch(getallrec())
    }, [])


    const recall = useSelector(state => state.recReducer.result)
    return (
        <div className='m-5'>
            <table class="ui celled table">
            <thead>
              <tr>
                <th></th>
                <th>_id</th>
                <th>Client_name</th>
                <th>Client_id</th>
                <th>Title</th>
                <th>Object</th>
                
              </tr>
            </thead>

            <tbody>
              {recall
                ? recall.map((el) => (
                    <tr>
                      <td
                        data-label="_id"
                        onClick={() => dispatch(deleterec(el._id))}
                      >
                        {" "}
                        <i class="trash alternate outline icon"></i>
                      </td>

                      <td data-label="_id">{el._id}</td>
                      <td data-label="Is Admin ?">{el.client_name}</td>
                      <td data-label="Name">{el.client_id}</td>
                      <td data-label="Last Name">{el.title}</td>
                      <td data-label="Email">{el.object}</td>
                   
                    </tr>
                  ))
                : "LOADING"}
            </tbody>
          </table>
        </div>
    )
}

export default AdminReport
