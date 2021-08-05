import React,{useState} from 'react'
import {useCallback,useRef,useMemo} from "react";
import { MapContainer, TileLayer, Marker, Popup ,useMapEvents} from "react-leaflet";
import { useDispatch, useSelector } from 'react-redux'
import { editprofile } from '../Redux/actions/user'
import { Link, useHistory } from 'react-router-dom'
import {Col,Row} from "react-bootstrap"
import "./FormProfile.css"
import Map from './Map'
const FormProfile = () => {
  const history=useHistory()
    const dispatch=useDispatch()
    const current = useSelector(state => state.userReducer.result)
    const [user, setuser] = useState({name:current?current.name:'',lastName:current?current.lastName:"",email:current?current.email:'',profession:current?current.profession:"",specialité:current?current.specialité:"",ville:current?current.ville:'',password:current?current.password:"",adress:current?current.adress:[]})
    const handleChange=(e)=>{
      e.preventDefault()
        setuser({...user,[e.target.name]:e.target.value})
        
    }
    
         
    const handleEdit=()=>{
      current?dispatch(editprofile(current._id,user)):<h4>loading</h4>
      history.push("/dashboard")
    }



    const center = [
       33,
       10
    ]

    const [position, setPosition] = useState(center)

    


    function DraggableMarker() {
      const [draggable, setDraggable] = useState(false)
     
      const markerRef = useRef(null)
      const eventHandlers = useMemo(
        () => ({
          dragend() {
            const marker = markerRef.current
            if (marker != null) {
              setPosition(marker.getLatLng())
              //  setuser({...user,[user.adress]:[position.lat,position.lng]})
              console.log(`position${position.lat} user${user.adress}`)
            }
          },
        }),
        [],
      )
      const toggleDraggable = useCallback(() => {
        setDraggable((d) => !d)
      }, [])
    
      return (
        <Marker
          draggable={draggable}
          eventHandlers={eventHandlers}
          position={position}
          ref={markerRef}>
          <Popup minWidth={90}>
            <span onClick={toggleDraggable}>
              {draggable
                ? 'Marker is draggable'
                : 'Click here to make marker draggable'}
            </span>
          </Popup>
        </Marker>
      )
    }
    
              // setuser({...user,[user.adress]:[position.lat,position.lng]})
              // console.log(`pot${position.latlng}55555555${user.adress}`)
           
  
     
     
    
   
    return (
        <div>
            <div className="center">
  <h1>Edit your Profile</h1>
  <form>
    <Row>
    <Col>
    <div className="inputbox">
      <input type="text" name="name" placeholder={user.name}  onChange={handleChange}/>
      <span>Name</span>
    </div>
    <div className="inputbox">
      <input type="text"name="lastName" placeholder={user.lastName}  onChange={handleChange} />
      <span>Last Name</span>
    </div>
    <div className="inputbox">
      <input type="email"name="email" placeholder={user.email}   onChange={handleChange} />
      <span>Email</span>
    </div>
    <div className="inputbox">
      <input type="text" name="ville" placeholder={user.ville}   onChange={handleChange}/>
      <span>Ville</span>
    </div>
    <div className="inputbox">
      <input type="text" name="profession" placeholder={user.profession}  onChange={handleChange}/>
      <span>Profesion</span>
    </div>
    <div className="inputbox">
      <input type="text"  placeholder={user.specialité}   name="specialité" onChange={handleChange} />
      <span>Spécialité</span>
    </div>
    <div className="inputbox">
        
      <button onClick={handleEdit}>Submit</button>
      
    </div>
    </Col>
    <Col>
      
    {/* <Map/> */}
    <MapContainer center={center} zoom={5} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <DraggableMarker />
  </MapContainer>

    </Col>
    </Row>
  </form>
</div>

        </div>
    )
}

export default FormProfile