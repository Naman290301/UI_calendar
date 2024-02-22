import React from 'react'
import Input from './Input'
import { Grid } from '@mui/material'

const PageHeader = () => {
  return (  
    <Grid container spacing={2} sx={{ width:"100%", marginTop:"2vh", justifyContent:"space-around", border:"1px solid"}}>
        <Input labelName='Region' optionList={['hello', 'naman']}/>
        <Input labelName='Region' optionList={['hello', 'naman']}/>
        <Grid item className='input-container'> <div style={{height:"10px", width:"10px", backgroundColor:"green", borderRadius:"50%"}}></div> <span className='input-container-span'>Overall MSR Submission</span></Grid>
        <Grid item className='input-container'> <div style={{height:"10px", width:"10px", backgroundColor:"#FAD02C", borderRadius:"50%"}}></div> <span className='input-container-span'>SPW Max Submission</span></Grid>
        <Grid item className='input-container'> <div style={{height:"10px", width:"10px", backgroundColor:"#ff7400", borderRadius:"50%"}}></div> <span className='input-container-span'>Auto Post Date</span></Grid>

    </Grid>
     
 
  )
}

export default PageHeader