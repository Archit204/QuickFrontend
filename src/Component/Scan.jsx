// import React, { useEffect, useRef, useState } from 'react';
// import { BrowserQRCodeReader } from '@zxing/browser';
// import { Box } from '@mui/material';
// import VaccinesIcon from '@mui/icons-material/Vaccines';
// import Navbar from './Navbar';
// import Footer from './Footer';

// const QRScanner = () => {
//   const videoRef = useRef(null);
//   const controlsRef = useRef(null);
//   const [result, setResult] = useState('');
//   const [cameraOpen, setCameraOpen] = useState(false);

//   useEffect(() => {
//     if (!cameraOpen) return;

//     const codeReader = new BrowserQRCodeReader();

//     codeReader.decodeFromVideoDevice(null, videoRef.current, (res, err) => {
//       if (res) {
//         setResult(res.getText());
//       }
//     }).then(controls => {
//       controlsRef.current = controls;
//     }).catch(err => {
//       console.error('Camera error:', err);
//       alert("Unable to access camera. Please allow permission or try another device.");
//       setCameraOpen(false);
//     });

//     return () => {
//       if (controlsRef.current) {
//         controlsRef.current.stop();
//         controlsRef.current = null;
//       }
//     };
//   }, [cameraOpen]);

//   const closeCamera = () => {
//     if (controlsRef.current) {
//       controlsRef.current.stop();
//       controlsRef.current = null;
//     }
//     setCameraOpen(false);
//   };

//   return (
//     <div style={styles.container}>
//       <Navbar></Navbar>
//       <Box sx={{paddingTop:"10px"}}>
//         <h1>Welcome Doctor <VaccinesIcon sx={{fontSize:"32px"}}></VaccinesIcon></h1>
//       </Box>
//       {!cameraOpen ? (
//         <button className='glass-shine-effect' style={styles.openButton} onClick={() => setCameraOpen(true)}>
//           📷 Scan Your QR
//         </button>
//       ) : (
//         <div style={styles.overlay}>
//           <div style={styles.cameraBox}>
//             <video ref={videoRef} style={styles.video} />
//             <div style={styles.scanner}></div>
//             <button style={styles.closeButton} onClick={closeCamera}>✖ Close</button>
//           </div>
//         </div>
//       )}
      
//       {/* {result && <p style={styles.result}>✅ Result: {result}</p>} */}
//       {result && (
//   <table style={styles.resultTable}>
//     <thead style={{textAlign:"center"}}>
//       <tr >
//         <th style={styles.th}>Field</th>
//         <th style={styles.th}>Details</th>
//       </tr>
//     </thead>
//     <tbody>
//       {result.split(',').map((item, index) => {
//         const [key, value] = item.split(':');
//         return (
//           <tr key={index}>
//             <td style={styles.td}>{key?.trim()?.replace(/["{}]/g, '')}</td>
//             <td style={styles.td}>{value?.trim()?.replace(/["{}]/g, '')}</td>
//           </tr>
//         );
//       })}
//     </tbody>
//   </table>
// )}
//   <Box className="scanimg hover">
//       </Box>
//       <Box sx={{margin:"auto",width:{lg:"800px",md:"800px",sm:"500px",xs:"350px"}}}>
//       <h2 style={{marginTop:"70px",fontSize:{md:"10px"}}}>"Effortless Healthcare Access Through QR Scanning"</h2>
//       <p style={{fontWeight:"bolder",textAlign:"justify"}}>Streamline your medical practice with our QR-based system that 
//         enhances doctor-patient interactions. This image captures a modern 
//         solution where a healthcare professional easily accesses patient 
//         records, prescriptions, appointments with single QR scan — 
//         making the process faster, secure, and paperless.</p>
//       </Box>
// <Footer></Footer>
//     </div>
//   );
// };

// const styles = {
//   resultTable: {
//   margin: '20px auto',
//   borderCollapse: 'collapse',
//   width: '80%',
//   maxWidth: '600px',
//   boxShadow: '0 0 10px rgba(0,0,0,0.1)',
//   fontSize: '16px',
// },

// th: {
//   backgroundColor: '#4caf50',
//   color: '#fff',
//   padding: '12px',
//   textAlign: 'left',
//   border: '1px solid #ddd',
// },

// td: {
//   padding: '12px',
//   border: '1px solid #ddd',
//   wordBreak: 'break-word',
// },
//   container: {
//     textAlign: 'center',
//     // marginTop: '50px',
//   },
//   openButton: {
//     padding: '10px 15px',
//     marginTop:"10px",
//     fontSize: '18px',
//     cursor: 'pointer',
//     borderRadius: '8px',
//     backgroundColor: '#1976d2',
//     color: '#fff',
//     border: 'none',
//     margin:"auto"
//   },
//   overlay: {
//     position: 'relative',
//     display: 'inline-block',
//     marginTop: '20px',
//   },
//   cameraBox: {
//     position: 'relative',
//     width: '300px',
//     height: '300px',
//     border: '4px solid #4caf50',
//     borderRadius: '12px',
//     overflow: 'hidden',
//   },
//   video: {
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover',
//   },
//   scanner: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     height: '4px',
//     width: '100%',
//     background: 'rgba(255, 0, 0, 0.8)',
//     animation: 'scanAnim 2s infinite ease-in-out',
//   },
//   closeButton: {
//     position: 'absolute',
//     bottom: '10px',
//     right: '10px',
//     padding: '5px 10px',
//     fontSize: '14px',
//     background: '#f44336',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   },
//   result: {
//     marginTop: '20px',
//     fontSize: '18px',
//     fontWeight: 'bold',
//     color: '#4caf50',
//   }
// };

// // Add animation keyframes
// const styleTag = document.createElement('style');
// styleTag.innerHTML = `
// @keyframes scanAnim {
//   0% { top: 0; }
//   50% { top: 95%; }
//   100% { top: 0; }
// }`;
// document.head.appendChild(styleTag);

// export default QRScanner;

// ===============================
import React, { useEffect, useRef, useState } from 'react';
import { BrowserQRCodeReader } from '@zxing/browser';
import { Box } from '@mui/material';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import { Button } from '@mui/material';

import Navbar from './Navbar';
import Footer from './Footer';

const QRScanner = () => {
  const videoRef = useRef(null);
  const controlsRef = useRef(null);
  const [result, setResult] = useState('');
  const [cameraOpen, setCameraOpen] = useState(false);

  const closeCamera = () => {
    if (controlsRef.current) {
      controlsRef.current.stop();
      controlsRef.current = null;
    }
    setCameraOpen(false);
  };

  useEffect(() => {
    if (!cameraOpen) return;

    const codeReader = new BrowserQRCodeReader();

    codeReader.decodeFromVideoDevice(null, videoRef.current, (res, err) => {
      if (res) {
        setResult(res.getText());
        closeCamera(); // ✅ Result milte hi camera close
      }
    }).then(controls => {
      controlsRef.current = controls;
    }).catch(err => {
      console.error('Camera error:', err);
      alert("Unable to access camera. Please allow permission or try another device.");
      setCameraOpen(false);
    });

    return () => {
      if (controlsRef.current) {
        controlsRef.current.stop();
        controlsRef.current = null;
      }
    };
  }, [cameraOpen]);

  return (
    <>
      <Navbar />
      
    <div style={styles.container}>
      <Box sx={{ paddingTop: "10px" }}>
        <h1>Welcome Doctor <VaccinesIcon sx={{ fontSize: "32px" }} /></h1>
      </Box>

      {!cameraOpen ? (
        <button className='glass-shine-effect' style={styles.openButton} onClick={() => setCameraOpen(true)}>
          📷 Scan Your QR
        </button>
      ) : (
        <div style={styles.overlay}>
          <div style={styles.cameraBox}>
            <video ref={videoRef} style={styles.video} />
            <div style={styles.scanner}></div>
            <button style={styles.closeButton} onClick={closeCamera}>✖ Close</button>
          </div>
        </div>
      )}

      {result && (
        <table style={styles.resultTable}>
          <thead style={{ textAlign: "center" }}>
            <tr>
              <th style={styles.th}>Field</th>
              <th style={styles.th}>Details</th>
            </tr>
          </thead>
          <tbody>
            {result.split(',').map((item, index) => {
              const [key, value] = item.split(':');
              return (
                <tr key={index}>
                  <td style={styles.td}>{key?.trim()?.replace(/["{}]/g, '')}</td>
                  <td style={styles.td}>{value?.trim()?.replace(/["{}]/g, '')}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}


      <Button className='glass-shine-effect generate showdetail'
              href="/"
              variant="contained"
              color="primary"
              sx={{ mt: 4, width: { lg: "200px", md: "200px", sm: "150px" , xs:"179px" }, textAlign: "center", display: 'block', mx: 'auto' }}
            >
              Go to Home
            </Button>


      <Box className="scanimg hover">
              </Box>
            <Box sx={{margin:"auto",width:{lg:"800px",md:"800px",sm:"500px",xs:"350px"}}}>
              <h2 style={{marginTop:"70px",fontSize:{md:"10px"}}}>"Effortless Healthcare Access Through QR Scanning"</h2>
            <p style={{fontWeight:"bolder",textAlign:"justify"}}>Streamline your medical practice with our QR-based system that 
                enhances doctor-patient interactions. This image captures a modern 
                solution where a healthcare professional easily accesses patient 
                records, prescriptions, appointments with single QR scan — 
                making the process faster, secure, and paperless.</p>
            </Box>

      <Footer />
    </div>
  </>
  );
};

const styles = {
  resultTable: {
    margin: '20px auto',
    borderCollapse: 'collapse',
    width: '80%',
    maxWidth: '600px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    fontSize: '16px',
  },

  th: {
    backgroundColor: '#4caf50',
    color: '#fff',
    padding: '12px',
    textAlign: 'left',
    border: '1px solid #ddd',
  },

  td: {
    padding: '12px',
    border: '1px solid #ddd',
    wordBreak: 'break-word',
  },

  container: {
    textAlign: 'center',
  },
  openButton: {
    padding: '10px 15px',
    marginTop: "10px",
    fontSize: '18px',
    cursor: 'pointer',
    borderRadius: '8px',
    backgroundColor: '#1976d2',
    color: '#fff',
    border: 'none',
    margin: "auto"
  },
  overlay: {
    position: 'relative',
    display: 'inline-block',
    marginTop: '20px',
  },
  cameraBox: {
    position: 'relative',
    width: '300px',
    height: '300px',
    border: '4px solid #4caf50',
    borderRadius: '12px',
    overflow: 'hidden',
  },
  video: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  scanner: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '4px',
    width: '100%',
    background: 'rgba(255, 0, 0, 0.8)',
    animation: 'scanAnim 2s infinite ease-in-out',
  },
  closeButton: {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    padding: '5px 10px',
    fontSize: '14px',
    background: '#f44336',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

// Add animation keyframes
const styleTag = document.createElement('style');
styleTag.innerHTML = `
@keyframes scanAnim {
  0% { top: 0; }
  50% { top: 95%; }
  100% { top: 0; }
}`;
document.head.appendChild(styleTag);

export default QRScanner;