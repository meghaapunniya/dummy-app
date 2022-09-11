import React from 'react';
import styles from './style.scss';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded'; 
import Avatar from '@mui/material/Avatar';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

export default function List(){

  const [status, setStatus] = React.useState('');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  
  function statusCode(status){
    switch(status){
        case "New":
            <div className='statusCode'>
                  <CheckBoxOutlineBlankIcon/>  
            </div>
         break;   
    }
  }

  return(
    <div className="list">
      <div className="listHeader"><h2>Applicants List</h2> 
      <FormControl sx={{ m: 0, minWidth: 120 }}>
        <Select
          value={status}
          onChange={handleChange}
          displayEmpty
          
        >
          <MenuItem value="">
            <em>Select</em>
          </MenuItem>
          <MenuItem value="new">New</MenuItem>
          <MenuItem value="rejected">Rejected</MenuItem>
          <MenuItem value="employed">Employed</MenuItem>
        </Select>
      </FormControl>
      </div>
      <div className='applicantDetails'>
        
      
          <table>
          
            <tr>
              <th><h5>Sl.No</h5></th>
              <th><h5 style={{paddingLeft:'15px'}}>Candidate Name</h5></th>
              <th><h5 style={{paddingRight:'45px'}}>Job Title</h5></th>
              <th><h5>Applied Date</h5></th>
              <th><h5 style={{paddingLeft:'30px'}}>Resume</h5></th>
              <th><h5>Status</h5></th> 
            </tr>
           
            {candidates.map((user,key)=>{
              return(
                
                <tr key={key}>
                  <td>{user.id}</td>
                  <td><div className='AvatarMain'><Avatar/><div className='UserNameMain'>{user.name}</div></div></td>
                  <td>{user.jobTitle}</td>
                  <td>{user.appliedDate}</td>
                  <td style={{paddingLeft:'45px'}}>{user.resume}</td>
                  <td><div className='status'><div className='statusCode' style={{backgroundColor:(user.color)}}></div> <span>{user.status}</span> </div> </td>
                  <hr/>
                </tr>
              
                
              )
            })}
            
          </table>
          
          </div> 
        </div>  
     
  )
} 



const candidates = [
  { id:1, name: "Jenny wilson",jobTitle:"UI Desinger",appliedDate:"Aug 16,2022",resume: <UploadFileRoundedIcon/>,icon:<CheckBoxOutlineBlankIcon/>,status:"New",color:"yellowgreen" },
  { id:2, name: "James", jobTitle:"React Developer",appliedDate:"Aug 17,2022",resume: <UploadFileRoundedIcon/>,icon:<CheckBoxOutlineBlankIcon/>,status:"Rejected",color:"orange"  },
  { id:3, name: "Subham", jobTitle:"Full-stack Developer",appliedDate:"Sept 02,2022",resume: <UploadFileRoundedIcon/>,icon:<CheckBoxOutlineBlankIcon/>,status:"Employed",color:"#B5A3FF" },
]