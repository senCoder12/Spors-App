import React, { useEffect, useState } from 'react'
import { MDBCard, MDBCardFooter, MDBCardBody, MDBValidation, MDBBtn, MDBSpinner, MDBAccordionItem,MDBValidationItem, MDBInput, MDBTextArea } from "mdb-react-ui-kit"
import FileBase from "react-file-base64"
import { toast } from "react-toastify"
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createEvent } from '../Redux/Features/eventSlice'

let initialState = {
    title: "",
    description: "",
    maximumNoOfPlayers: 5,
    eventTime: "",
    img: ""
}

export default function AddEventPage() {
    const [eventData, seteventData] = useState(initialState);
    const [noError, setnoError] = useState(null);
    let { title, description, maximumNoOfPlayers, eventTime, img } = eventData;
    const {user} = useSelector((state)=>({...state.auth}))
    const {error,loading,userTours} = useSelector((state)=>({...state.event}))
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        error && toast.error(error);
    }, [error])

    const handleInputChange= (e) => {
        const {name,value} = e.target;
        seteventData({...eventData,[name]:value});
        
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(img=="") {
            toast.error("Select a image");
            return;
        }
        if(!maximumNoOfPlayers) {
            setnoError("Please increase the number of players");
        }
        if(title && description && maximumNoOfPlayers && eventTime && img) {
            const updatedeventData = {...eventData}
            dispatch(createEvent({updatedeventData,navigate,toast}))
        }
    }
    const handleClear = () => {
        seteventData({title:"",description:"",eventTime: "", maximumNoOfPlayers: 5})
    }
    

    return (
        <div style={{ margin: "auto", padding: "15px", maxWidth: "450px", alignContent: "center", marginTop: "120px" }} className="container">
            <MDBCard alignment='center'>
                <h5>Add Event</h5>
                <MDBCardBody>
                <MDBValidation onSubmit={handleSubmit} className="row g-3" noValidate>
                    <div className='col-md-12'>
                    <MDBValidationItem feedback='Please provide a title' invalid>
                        <MDBInput
                            label='Enter Title'
                            type="text"
                            name="title"
                            value={title}
                            onChange={handleInputChange}
                            className='form-control'
                            required
                        />
                    </MDBValidationItem>
                    </div>
                    <div className='col-md-12'>    
                        <MDBValidationItem feedback='Please provide the description' invalid>
                            <MDBTextArea
                                label='Enter Description'
                                type="text"
                                name="description"
                                value={description}
                                onChange={handleInputChange}
                                className='form-control'
                                required
                                rows={4}
                            />
                        </MDBValidationItem>
                    </div>

                    <div className="d-flex justify-content-start">
                        <FileBase
                            type="file"
                            multiple={false}
                            onDone={({base64})=> seteventData({...eventData,img:base64})}
                        />
                    </div> 
                    <div className='col-md-12'>
                        <MDBInput
                            label='Maximum number of players'
                            type="number"
                            name="maximumNoOfPlayers"
                            value={maximumNoOfPlayers}
                            onChange={handleInputChange}
                            className='form-control'
                            required
                        />
                    </div>
                    {
                        noError && <div className='tagErrMsg'>{noError}</div>
                    }
                    <div className='col-md-12'>
                    <MDBValidationItem feedback='Select date and time' invalid>
                        <input
                            placeholder="Select date and time"
                            type="datetime-local"
                            name="eventTime"
                            value={eventTime}
                            onChange={(e)=> seteventData({...eventData,eventTime:e.target.value})}
                            className='form-control'
                            required
                        />
                    </MDBValidationItem>
                    </div>
                    <div className='col-md-12'>
                        <MDBBtn style={{width:"100%"}}>
                                {
                                    loading && (
                                        <MDBSpinner
                                            size='sm'
                                            role="status"
                                            tag="span"
                                            className="me-2"
                                        />
                                    )
                                }Submit
                                </MDBBtn>
                        <MDBBtn style={{width:"100%",marginTop:"10px"}} color='danger' onClick={handleClear}>Cancel</MDBBtn>
                    </div>
                </MDBValidation>
                </MDBCardBody>
            </MDBCard>
        </div>
    )
}
