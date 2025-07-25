// ====================old 

// import React, { useState, useEffect } from 'react';
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
//   const navigate = useNavigate();

//   // 🩷 Set email from logged-in user
//   useEffect(() => {
//     const savedEmail = localStorage.getItem('userEmail');
//     if (savedEmail) {
//       setFormData(prev => ({ ...prev, email: savedEmail }));
//     }
//     const savedData = localStorage.getItem('editUser');
//   if (savedData) {
//     setFormData(JSON.parse(savedData));
//     localStorage.removeItem('editUser');
//   }

//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await axios.post('https://quickbackend-ca5r.onrender.com/api/generate-and-email', formData);

//       alert(res.data.message || 'QR Generated & Email Sent!');
//       navigate('/showdetail');
//     } catch (err) {
//       console.error(err);
//       alert('Failed to generate QR or send email.');
//     }

//     setLoading(false);
//   };

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
//           style={{ padding: "8px", marginBottom: "8px" }}
//         /><br />
//         <input
//           type="text"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           placeholder="Phone Number"
//           required
//           style={{ padding: "8px", marginBottom: "8px" }}
//         /><br />
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           readOnly
//           style={{ padding: "8px", marginBottom: "8px" }}
//         /><br />
//         <input
//           type="text"
//           name="bloodgroup"
//           value={formData.bloodgroup}
//           onChange={handleChange}
//           placeholder="Blood Group"
//           required
//           style={{ padding: "8px", marginBottom: "8px" }}
//         /><br />
//         <input
//           type="text"
//           name="allergies"
//           value={formData.allergies}
//           onChange={handleChange}
//           placeholder="Allergies"
//           style={{ padding: "8px", marginBottom: "8px" }}
//         /><br />
//         <input
//           type="text"
//           name="medicalcondition"
//           value={formData.medicalcondition}
//           onChange={handleChange}
//           placeholder="Medical Condition"
//           style={{ padding: "8px", marginBottom: "8px" }}
//         /><br />
//         <input
//           type="text"
//           name="dieses"
//           value={formData.dieses}
//           onChange={handleChange}
//           placeholder="Diseases"
//           style={{ padding: "8px", marginBottom: "8px" }}
//         /><br />
//         <input
//           type="text"
//           name="emergencycontact"
//           value={formData.emergencycontact}
//           onChange={handleChange}
//           placeholder="Emergency Contact"
//           required
//           style={{ padding: "8px", marginBottom: "8px" }}
//         /><br />

//         <button className='glass-shine-effect generate'
//           type="submit"
//           style={{
//             backgroundColor: "#1976d2",
//             width: "183px",
//             boxShadow: "0px 0px 5px black",
//             border: "0",
//             height: "35px",
//             marginTop: "9px",
//             color: "white"
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



//===========================newwwwww==============
import React, { useState, useEffect, useRef } from 'react';
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
  const [isEditMode, setIsEditMode] = useState(false);
  const buttonRef = useRef(null); // 👈 to directly access button

  useEffect(() => {
    const savedEmail = localStorage.getItem('userEmail');
    if (savedEmail) {
      setFormData(prev => ({ ...prev, email: savedEmail }));
    }

    const savedData = localStorage.getItem('editUser');
    if (savedData) {
      setFormData(JSON.parse(savedData));
      setIsEditMode(true);
      localStorage.removeItem('editUser');
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return; // 🔐 Block double click protection

    setLoading(true);
    buttonRef.current.disabled = true; // 👈 physically disable button

    try {
      const res = await axios.post('https://quickbackend-ca5r.onrender.com/api/generate-and-email', formData);

      if (isEditMode) {
        alert('QR updated and sent successfully!');
      } else {
        alert('QR sent successfully!');
      }

      navigate('/showdetail');
    } catch (err) {
      console.error(err);
      alert('Failed to generate QR or send email.');
      buttonRef.current.disabled = false; // ✅ re-enable in error
      setLoading(false);
      return;
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

        <button
          className='glass-shine-effect generate'
          type="submit"
          style={{
            backgroundColor: "#1976d2",
            width: "183px",
            boxShadow: "0px 0px 5px black",
            border: "0",
            height: "35px",
            marginTop: "9px",
            color: "white",
            cursor: loading ? "not-allowed" : "pointer"
          }}
          ref={buttonRef}
        >
          {loading ? 'Generating...' : 'Generate & Send QR'}
        </button>
      </form>
    </Box>
  );
}

export default QRForm;