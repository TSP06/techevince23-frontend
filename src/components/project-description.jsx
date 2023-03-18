import React from "react"
export default function ProjectDescription({isVisible, onClose, data}) {
    if(!isVisible) return null;
    const handleClose = (e) =>{
        if(e.target.id === 'wrapper')onClose();
    }
    return(
        <div className="fixed inset-0 bg-black bg-opacity-25
        backdrop-blur-sm flex justify-center items-center" id="wrapper"
        onClick={handleClose} style={{transition: "right 1s ease-in-out"}}>
            <div className="w-11/12">
                <div className="bg-white p-2 rounded">{data.project_name}</div>
            </div>
        </div>
    )
}