import React, { useEffect } from 'react'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardGroup, MDBCardText, MDBIcon, MDBTooltip, MDBBtn } from "mdb-react-ui-kit"
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getEvent, updateEvent } from '../Redux/Features/eventSlice';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { updateRequestPending } from '../Redux/Features/authSlice';

function SingleEvent() {
    const { event } = useSelector((state) => ({ ...state.event }));
    const { user, loading } = useSelector((state) => ({ ...state.auth }));
    const dispatch = useDispatch();
    const { title, description, _id, maximumNoOfPlayers, img, players, ownerId, eventTime, Requestplayers } = event;
    const { eventId } = useParams();

    useEffect(() => {
        dispatch(getEvent(eventId));
    }, [])

    const sendRequestHandler = ()=> {
        let updateEvent = {...event};
        if(!updateEvent.Requestplayers) {
            updateEvent.Requestplayers=[];
        }
        updateEvent.Requestplayers.push({
            playerName: user?.result[0].name,
            playerId: user?.result[0]._id
        })
        dispatch(updateEvent({eventId:_id,updateEvent}));
        let updateUser = {...user};
        updateUser.result[0].EventsPending.push(_id);
        dispatch(updateRequestPending(updateUser));
    }

    // const getFormatTime = (event)=> {}
    return (
        <>
            <div style={{ margin: "auto", padding: "15px", maxWidth: "1000px", alignContent: "center", marginTop: "90px" }}>
                <MDBCard className='h-100 mt-2 d-sm-flex' style={{ maxWidth: "100rem" }}>
                    <MDBRow >
                        <MDBCol md='4'>
                            <MDBCardImage
                                src={img}
                                alt={title}
                                position="top"
                                style={{ maxWidth: "100%", height: "100%" }}
                            />
                        </MDBCol>
                        <MDBCol md='8'>
                            <MDBCardBody>
                                <MDBCardText className='text-start'>{title}</MDBCardText>
                                <MDBCardText className='text-start'>
                                    {description}
                                </MDBCardText>
                                <MDBCardText className='text-start'>
                                    No. of Players:  {players?.length || 0}/{maximumNoOfPlayers}
                                </MDBCardText>
                                <MDBCardText className='text-start'>
                                    <MDBRow >
                                        <MDBCol md='8'>
                                            Event Timing: {eventTime}
                                        </MDBCol>
                                        {
                                            user?.result[0]?._id != ownerId && (
                                                <MDBCol md='4'>
                                                    <MDBBtn onClick={()=>sendRequestHandler()}>Send Request</MDBBtn>
                                                </MDBCol>
                                            )
                                        }
                                        {
                                            user?.result[0]?._id == ownerId && (
                                                <MDBCol md='4'>
                                                    <MDBBtn color='info'>Own Event</MDBBtn>
                                                </MDBCol>
                                            )
                                        }
                                    </MDBRow>
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </div>
            {
                user?.result[0]?._id == ownerId && (
                    <>
                        <div style={{ margin: "auto", padding: "15px", maxWidth: "500px", alignContent: "center", marginTop: "30px" }}>
                            <h2>Event Players</h2>
                            {
                                !players  && (
                                    <>No player is Accepted yet</>
                                )
                            }
                            <MDBTable>
                                {
                                    players && players?.length > 0 && (
                                        players.map(player => {
                                            return (
                                                <MDBTableBody>
                                                    <tr>
                                                        <th scope='row' className='mt-2'>{player.playerName}</th>
                                                        <td><MDBBtn color='success'>Accept</MDBBtn></td>
                                                        <td><MDBBtn color='danger'>Reject</MDBBtn></td>
                                                    </tr>
                                                </MDBTableBody>
                                            )
                                        })

                                    )
                                }
                            </MDBTable>
                        </div>
                        <div style={{ margin: "auto", padding: "15px", maxWidth: "500px", alignContent: "center", marginTop: "30px" }}>
                            <h2>Requested Players</h2>
                            {
                                !Requestplayers && (
                                    <>No player register yet</>
                                )
                            }
                            <MDBTable>
                                {
                                    Requestplayers && Requestplayers.length > 0 && (
                                        Requestplayers.map(player => {
                                            return (
                                                <MDBTableBody>
                                                    <tr>
                                                        <th scope='row' className='mt-2'>{player.playerName}</th>
                                                        <td><MDBBtn color='success'>Accept</MDBBtn></td>
                                                        <td><MDBBtn color='danger'>Reject</MDBBtn></td>
                                                    </tr>
                                                </MDBTableBody>
                                            )
                                        })

                                    )
                                }
                            </MDBTable>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default SingleEvent;