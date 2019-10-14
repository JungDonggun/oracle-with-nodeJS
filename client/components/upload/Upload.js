// @ts-nocheck
import React, { useState, useCallback } from 'react';
import {useDropzone} from 'react-dropzone';
import { Button } from '@material-ui/core';
import API_CONFIG from '../../api/config'

const Upload = () => {
  const initialMessage = '엑셀 또는 ico 파일을 업로드 해주세요.'
  const [message, setMessage] = useState(initialMessage)
  const [selectedFiles, setSelectedFiles] = useState([])

  const onDrop = useCallback(acceptedFiles => {
    console.log('hihi')
    const data = new FormData();

    for (let i = 0; i < acceptedFiles.length; i += 1) {
      data.append('file', acceptedFiles[i]);
    }
  }, [])
  
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  const onChangeHandler = (event) => {
    try {
      setMessage(initialMessage)

      setSelectedFiles(event.target.files)
    } catch (err) {
      console.log('onChangeHandler Error', err)
    }
  }

  const submitExcelFile = () => {
    console.log('selectedFiles', selectedFiles)
    if (selectedFiles.length === 0) {
      return setMessage('파일을 찾을 수 없습니다.')
    }

    console.log('selectedFiles', selectedFiles.length)

    const options = {
      method: 'POST',
      body: selectedFiles,
    }

    fetch(`${API_CONFIG.url}/api/donggun_demo_server`, options)
  }

  	
  const onImageDrop = (acceptedFiles) => {
    const data = new FormData();
    
    for (let i = 0; i < acceptedFiles.length; i += 1) {
      data.append('file', acceptedFiles[i]);
    }

    console.log('data =>', data)
  }

  return (
    <div>
      <div>
        {message}
      </div>
	
      <div>
      <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
        </div>
        <div>
          <input
            accept=".xlsx, .xls, .csv"
            multiple
            type="file"
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <Button variant="contained" color="primary" type="submit" onClick={() => submitExcelFile()}>
            sssssssstttttaaaarrrrrrrrrt
          </Button>
        </div>
    </div>
  )
}

export default Upload