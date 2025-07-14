// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { Box } from '@mui/material';

// function QRForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     bloodgroup: '',
//     allergies: '',
//     medicalcondition: '',
//     dieses: '',
//     emergencycontact: '',
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("val=>",e.preventDefault);
    
//     setLoading(true);  
    
//     try {
//       const response = await axios.post('http://localhost:3000/api/generate-and-email', formData);
//       alert('QR Generated & Email Sent!');
//       navigate('/showdetail' ,{state:formData});
//       setFormData({
//         name: '',
//         phone: '',
//         email: '',
//         bloodgroup: '',
//         allergies: '',
//         medicalcondition: '',
//         dieses: '',
//         emergencycontact: '',
//       });
//     } catch (err) {
//       alert('Failed to generate QR or send email.');
//       console.error(err);
//     }

//     setLoading(false);
//   };

//   return (
//     <Box>

//     <form onSubmit={handleSubmit}>
//       <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required style={{padding:"8px",marginBottom:"8px"}} /> <br />
//       <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required style={{padding:"8px",marginBottom:"8px"}}/><br />
//       <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required style={{padding:"8px",marginBottom:"8px"}}/><br />
//       <input type="text" name="bloodgroup" value={formData.bloodgroup} onChange={handleChange} placeholder="Blood Group" required style={{padding:"8px",marginBottom:"8px"}}/><br />
//       <input type="text" name="allergies" value={formData.allergies} onChange={handleChange} placeholder="Allergies" style={{padding:"8px",marginBottom:"8px"}}/><br />
//       <input type="text" name="medicalcondition" value={formData.medicalcondition} onChange={handleChange} placeholder="Medical Condition" style={{padding:"8px",marginBottom:"8px"}}/><br />
//       <input type="text" name="dieses" value={formData.dieses} onChange={handleChange} placeholder="Diseases" style={{padding:"8px",marginBottom:"8px"}}/><br />
//       <input type="text" name="emergencycontact" value={formData.emergencycontact} onChange={handleChange} placeholder="Emergency Contact" required style={{padding:"8px",marginBottom:"8px"}}/><br />

//       <button type="submit" style={{backgroundColor:"#1976d2",width:"183px",boxShadow:"0px 0px 5px black",border:"0",height:"35px",marginTop:"9px",color:"white"}} disabled={loading}>
//         {loading ? 'Generating...' : 'Generate & Send QR'}
//       </button>
//     </form>
//     </Box>
//   );
// }

// export default QRForm;


// ======================================old 

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { Box } from '@mui/material';

// function QRForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     bloodgroup: '',
//     allergies: '',
//     medicalcondition: '',
//     dieses: '',
//     emergencycontact: '',
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const navigate = useNavigate();

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   setLoading(true);

//   //   try {
//   //     const response = await axios.post(
//   //       'http://localhost:3000/api/generate-and-email',
//   //       formData
//   //     );

//   //     if (response.data.success) {
//   //       alert('QR Generated & Email Sent!');

//   //       // 👇 navigate with state including userId from backend
//   //       navigate('/showdetail', {
//   //         state: {
//   //           userId: response.data.userId,
//   //           email: response.data.email
//   //         }
//   //       });

//   //       setFormData({
//   //         name: '',
//   //         phone: '',
//   //         email: '',
//   //         bloodgroup: '',
//   //         allergies: '',
//   //         medicalcondition: '',
//   //         dieses: '',
//   //         emergencycontact: '',
//   //       });
//   //     } else {
//   //       alert('Failed to generate QR or save user.');
//   //     }
//   //   } catch (err) {
//   //     alert('Failed to generate QR or send email.');
//   //     console.error(err);
//   //   }

//   //   setLoading(false);
//   // };
//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   const email = localStorage.getItem('userEmail');
//   const fullFormData = { ...formData, email };

//   const res = await axios.post('http://localhost:3000/api/qr/save-qrform', fullFormData);
//   alert(res.data.message);
//   navigate(res.data.redirectTo);
// };

//   return (
//     <Box>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Full Name"
//           required
//           style={{ padding: '8px', marginBottom: '8px' }}
//         />{' '}
//         <br />
//         <input
//           type="text"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           placeholder="Phone Number"
//           required
//           style={{ padding: '8px', marginBottom: '8px' }}
//         />
//         <br />
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Email"
//           required
//           style={{ padding: '8px', marginBottom: '8px' }}
//         />
//         <br />
//         <input
//           type="text"
//           name="bloodgroup"
//           value={formData.bloodgroup}
//           onChange={handleChange}
//           placeholder="Blood Group"
//           required
//           style={{ padding: '8px', marginBottom: '8px' }}
//         />
//         <br />
//         <input
//           type="text"
//           name="allergies"
//           value={formData.allergies}
//           onChange={handleChange}
//           placeholder="Allergies"
//           style={{ padding: '8px', marginBottom: '8px' }}
//         />
//         <br />
//         <input
//           type="text"
//           name="medicalcondition"
//           value={formData.medicalcondition}
//           onChange={handleChange}
//           placeholder="Medical Condition"
//           style={{ padding: '8px', marginBottom: '8px' }}
//         />
//         <br />
//         <input
//           type="text"
//           name="dieses"
//           value={formData.dieses}
//           onChange={handleChange}
//           placeholder="Diseases"
//           style={{ padding: '8px', marginBottom: '8px' }}
//         />
//         <br />
//         <input
//           type="text"
//           name="emergencycontact"
//           value={formData.emergencycontact}
//           onChange={handleChange}
//           placeholder="Emergency Contact"
//           required
//           style={{ padding: '8px', marginBottom: '8px' }}
//         />
//         <br />

//         <button
//           type="submit"
//           style={{
//             backgroundColor: '#1976d2',
//             width: '183px',
//             boxShadow: '0px 0px 5px black',
//             border: '0',
//             height: '35px',
//             marginTop: '9px',
//             color: 'white'
//           }}
//           disabled={loading}
//         >
//           {loading ? 'Generating...' : 'Generate & Send QR'}
//         </button>
//       </form>
//     </Box>
//   );
// }

// export default QRForm;








// ====================new 

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

function QRForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    bloodgroup: '',
    allergies: '',
    medicalcondition: '',
    dieses: '',
    emergencycontact: '',
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // 🩷 Set email from logged-in user
  useEffect(() => {
    const savedEmail = localStorage.getItem('userEmail');
    if (savedEmail) {
      setFormData(prev => ({ ...prev, email: savedEmail }));
    }
    const savedData = localStorage.getItem('editUser');
  if (savedData) {
    setFormData(JSON.parse(savedData));
    localStorage.removeItem('editUser');
  }

  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post('https://quickbackend-ca5r.onrender.com/api/generate-and-email', formData);

      alert(res.data.message || 'QR Generated & Email Sent!');
      navigate('/showdetail');
    } catch (err) {
      console.error(err);
      alert('Failed to generate QR or send email.');
    }

    setLoading(false);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
          style={{ padding: "8px", marginBottom: "8px" }}
        /><br />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          style={{ padding: "8px", marginBottom: "8px" }}
        /><br />
        <input
          type="email"
          name="email"
          value={formData.email}
          readOnly
          style={{ padding: "8px", marginBottom: "8px" }}
        /><br />
        <input
          type="text"
          name="bloodgroup"
          value={formData.bloodgroup}
          onChange={handleChange}
          placeholder="Blood Group"
          required
          style={{ padding: "8px", marginBottom: "8px" }}
        /><br />
        <input
          type="text"
          name="allergies"
          value={formData.allergies}
          onChange={handleChange}
          placeholder="Allergies"
          style={{ padding: "8px", marginBottom: "8px" }}
        /><br />
        <input
          type="text"
          name="medicalcondition"
          value={formData.medicalcondition}
          onChange={handleChange}
          placeholder="Medical Condition"
          style={{ padding: "8px", marginBottom: "8px" }}
        /><br />
        <input
          type="text"
          name="dieses"
          value={formData.dieses}
          onChange={handleChange}
          placeholder="Diseases"
          style={{ padding: "8px", marginBottom: "8px" }}
        /><br />
        <input
          type="text"
          name="emergencycontact"
          value={formData.emergencycontact}
          onChange={handleChange}
          placeholder="Emergency Contact"
          required
          style={{ padding: "8px", marginBottom: "8px" }}
        /><br />

        <button className='glass-shine-effect generate'
          type="submit"
          style={{
            backgroundColor: "#1976d2",
            width: "183px",
            boxShadow: "0px 0px 5px black",
            border: "0",
            height: "35px",
            marginTop: "9px",
            color: "white"
          }}
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate & Send QR'}
        </button>
      </form>
    </Box>
  );
}

export default QRForm;