import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Row,Col } from 'react-bootstrap';

function Addproject() {
  //to hold the value of the image url
  const[preview,Setpreview] = useState("")

  const[projectdetails,Setprojectdetails]=useState({
    title:"",
    language:"",
    github:"",
    website:"",
    overview:"",
    projectimage:""
  })

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(projectdetails);
  
  const handleClose1 = ()=>{
    Setprojectdetails({
      title:"",
      language:"",
      github:"",
      website:"",
      overview:"",
      projectimage:""

    })
    Setpreview("")
  }

  useEffect(()=>{
   if(projectdetails.projectimage)
   {(Setpreview(URL.createObjectURL(projectdetails.projectimage)))}

  },[projectdetails.projectimage])


  console.log(preview);

  const handleAdd= async(e)=>{
    e.preventDefault()
    const{title,language,github,website,overview,projectimage} = projectdetails
    if(!title||!language||!github||!website||!overview||!projectimage){
      alert('please fill the details completely')
    }
    else{
      //reqbody
      //1)create object forformdata since we hve uploaded content
      const reqbody = new FormData()
      //2)add data to formdata - append()
      reqbody.append('title',title)
      reqbody.append('title',language)
      reqbody.append('title',github)
      reqbody.append('title',website)
      reqbody.append('title',overview)
      reqbody.append('title',projectimage)

      const result = await Addproject(reqbody,reqHeader)
      console.log(result);
    }

  }

  return (
    <>
     <>
      <Button variant="success" onClick={handleShow}>
        Add project
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Project details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
            <label className='text-center'>
            <input  type="file" style={{ display: "none" }} onChange={(e)=>Setprojectdetails({...projectdetails,projectimage:e.target.files[0]})}/>
            <img
              width={'100%'}
              height={'200px'}
              src={preview?preview:"data:image/png;base64,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"}
              alt="no image"
            />
          </label>
            
            </Col>
            <Col md={6}>
              <div className='d-flex justify-content-center align-items center flex-column w-100'>
              <div className='mb-3 w-100'>
               <input type="text" className='form-control' placeholder='project title' value={projectdetails.title}onChange={(e)=>Setprojectdetails({...projectdetails,title:e.target.value})} />
               </div>
               <div className='mb-3 w-100'>
               <input type="text" className='form-control' placeholder='project language' value={projectdetails.language}onChange={(e)=>Setprojectdetails({...projectdetails,language:e.target.value})} />
               </div>
               <div className='mb-3 w-100'>
               <input type="text" className='form-control' placeholder='project github link' value={projectdetails.github}onChange={(e)=>Setprojectdetails({...projectdetails,github:e.target.value})} />
               </div>
               <div className='mb-3 w-100'>
               <input type="text" className='form-control' placeholder='project website link' value={projectdetails.website}onChange={(e)=>Setprojectdetails({...projectdetails,website:e.target.value})} />
               </div>
               <div className='mb-3 w-100'>
               <textarea type="text" className='form-control' placeholder='project overview' value={projectdetails.overview}onChange={(e)=>Setprojectdetails({...projectdetails,overview:e.target.value})} />
               </div>
                
              </div>
                
            
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose1}>
            Clear
          </Button>
          <Button variant="success"onClick={handleAdd}>ADD</Button>
        </Modal.Footer>
      </Modal>
    </>
    </>
  )
}

export default Addproject