import { MDBCard, MDBCardBody, MDBCardImage, MDBCardGroup, MDBCardText, MDBIcon, MDBTooltip, MDBBtn } from "mdb-react-ui-kit"
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'


export default function CardEvent({ img, description, title, _id }) {
    const { user } = useSelector((state) => ({ ...state.auth }))
    const excerpt = (str) => {
        if (str.length > 45) {
            str = str.substring(0, 45) + "...";
        }
        return str;
    }


    return (
        <MDBCardGroup>
            <Link to={`event/${_id}`}>
                <MDBCard className='h-100 mt-2 d-sm-flex' style={{ maxWidth: "20rem" }}>
                    <MDBCardImage
                        src={img}
                        alt={title}
                        position="top"
                        style={{ maxWidth: "100%", height: "100%" }}
                    />
                    <MDBCardBody>
                        <MDBCardText className='text-start'>{title}</MDBCardText>
                        <MDBCardText className='text-start'>
                            {excerpt(description)}
                            {/* <Link to={`tour/${_id}`}>Read More</Link> */}
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </Link>
        </MDBCardGroup>
    )
}
