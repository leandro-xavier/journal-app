import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { startSaveNote, startUploading } from '../../actions/notes'

export const NotesAppBar = () => {
    const dispatch = useDispatch()
    const {active} = useSelector(state => state.notes)

    const handleSave = () => {
      dispatch(startSaveNote(active)) 
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click()
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]

        if(file ){
            dispatch(startUploading(file))
        }else{
            console.log('error');
        }
    }
  
    return (
        <div className="notes__appbar">
            <span>28 de agosto del 2021</span>

            <input id='fileSelector' name='file' type="file" style={{display: 'none'}} onChange={handleFileChange}/>

            <div>
                <button className="btn"
                onClick={handlePictureClick}
                >
                    picture
                </button>
                <button className="btn"
                onClick={handleSave}
                >
                    save
                </button>
            </div>
        </div>
    )
}
