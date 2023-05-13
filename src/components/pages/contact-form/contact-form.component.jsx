import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { v4 } from "uuid"

export const ContactForm = ({ setUsers }) => {

     const navigate = useNavigate()

     let onBack = () => {
          navigate(-1)
     }

     let elName = useRef()
     let elMail = useRef()
     let elPhone = useRef()
     let elImg = useRef()

     let onAdd = (evt) => {
          evt.preventDefault()

          let newContact = {
               id: v4(),
               fullName: elName.current.value,
               email: elMail.current.value,
               phone: elPhone.current.value,
               img: elImg.current.value
          }
          setUsers(prev => [...prev, newContact])
          navigate(`/contact/${newContact.id}`)
     }

     return (
          <>
          <div className="d-flex align-items-center mb-4">
               <button onClick={onBack} className="btn btn-outline-primary me-4">Back</button>
               <h1>New contact</h1>
          </div>
          <form onSubmit={onAdd}>
               <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Full name</label>
                    <input ref={elName} type="text" className="form-control" id="fullName" required aria-describedby="emailHelp"/>
               </div>
               <div className="mb-3">
                    <label htmlFor="Email" className="form-label">Email address</label>
                    <input ref={elMail} type="email" className="form-control" required id="Email" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
               </div>
               <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input ref={elPhone} type="text" className="form-control" required id="phone"/>
               </div>
               <div className="mb-3">
                    <label htmlFor="ImgUrl" className="form-label">Img url</label>
                    <input ref={elImg} type="url" className="form-control" required id="ImgUrl"/>
               </div>
               <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          </>
     )
}