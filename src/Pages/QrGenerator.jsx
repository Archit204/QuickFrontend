import React from 'react'
import QRForm from '../Component/QRForm';
const QrGenerator = () => {
  return (
    <div className="home-page" style={{ textAlign: 'center', marginTop: '30px' }}>
      <h1>🛡 QuickAid - Emergency QR Generator</h1>
      <QRForm />
    </div>
  )
}

export default QrGenerator
