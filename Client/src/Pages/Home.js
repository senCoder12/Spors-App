import React, { useEffect } from 'react'
import {MDBCol,MDBRow,MDBContainer,MDBTypography} from "mdb-react-ui-kit"
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { getEvents } from '../Redux/Features/eventSlice';
import CardEvent from '../Components/eventCard';
import Spinner from '../Components/Spinner';

export default function Home() {
  const dispatch = useDispatch();
  const {events,loading} = useSelector((state)=> ({...state.event}));
  const location = useLocation();


  useEffect(()=>{
    dispatch(getEvents());
  },[])

  if(loading) {
    return <Spinner/>
  }
  return (
    <div style={{margin: "auto",padding: "15px", maxWidth: "1000px", alignContent: "center"}}>
      <MDBRow className='mt-5'>
        {
          events.length==0 && location.pathname==="/" && (
            <MDBTypography className='text-center mb-0' tag="h2">
              No Events Found
            </MDBTypography>
          )
        }
        <MDBCol>
          <MDBContainer>
            <MDBRow className='row-cols-1 row-cols-md-3 g-3'>
                {events && events.map((item)=> <CardEvent key={item._id} {...item} />)}
            </MDBRow>
          </MDBContainer>
        </MDBCol>
      </MDBRow>
    </div>
  )
}
