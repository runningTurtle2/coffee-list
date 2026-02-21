import React from 'react'
import ReactDom from 'react-dom'

/** Styling */
const Modal_Styles: React.CSSProperties = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '50px',
    zIndex: 1000
}
const Overlay_Styles: React.CSSProperties = {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0,0,0,.7)',
    zIndex: 1000
}
export default function Modal({open, children, onClose}:any) {
    if(!open) return null
  return ReactDom.createPortal(
    <>
        <div style={Overlay_Styles} />
        <div style={Modal_Styles}>
            <button onClick={onClose}>Close Modal</button>
        {children}
        </div>
    </>,
    document.body
  )
}
