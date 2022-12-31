import { MDBCard, MDBCol, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
import { useSelector } from 'react-redux';

function EventStatus() {
    const { user } = useSelector((state) => ({ ...state.auth }));
    const {EventsConfirmed,EventsPending} = user?.result[0];
  return (
    <div style={{ margin: "auto", padding: "15px", maxWidth: "1000px", alignContent: "center", marginTop: "90px" }}>
        <MDBCard className='h-100 mt-2 d-sm-flex' style={{ maxWidth: "100rem", paddingBottom:"30px" }}>
            <h2>All Events Status</h2>
            {
                !EventsConfirmed.length && !EventsPending.length && (
                    <>No Events are going</>
                )
            }
            {
                EventsConfirmed.length > 0 &&
                EventsConfirmed.map(elm => {
                    return (
                        <MDBRow key={elm._id}>
                            <MDBCol md='6'>
                                {elm.eventName}
                            </MDBCol>
                            <MDBCol md='5'>
                                Accepted
                            </MDBCol>
                        </MDBRow>
                )})
            }
            {
                EventsPending.length > 0 &&
                EventsPending.map(elm => {
                    return (
                        <MDBRow key={elm._id}>
                            <MDBCol md='6'>
                                {elm.eventName}
                            </MDBCol>
                            <MDBCol md='5'>
                                Pending
                            </MDBCol>
                        </MDBRow>
                )})
            }
        </MDBCard>
    </div>
  )
}

export default EventStatus