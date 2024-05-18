import { React, useState, useParams } from 'react'

const ContactDetail = ({ updateContact, updateImage}) => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        title: '',
        status: '',
        photoUrl: ''
    });

    const { id } = useParams();
    console.log(id);
    
  return (
    <div>ContactDetail</div>
  )
}

export default ContactDetail