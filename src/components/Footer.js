import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export const Footer = () => {
  return (
    <div className='fixed bottom-0 p-4 w-full'>
      <a href="https://github.com/deeppomal" target={'_blank'}><GitHubIcon style={{fontSize:35,color:'#f3f3f4',marginInline:15,cursor:'pointer'}}   /></a>
      <a href="https://www.linkedin.com/in/deep-pomal-87751099/" target={'_blank'}><LinkedInIcon style={{fontSize:35,color:'#f3f3f4',marginInline:15,cursor:'pointer'}}  /> </a>
      <a href="https://twitter.com/deeppomal98" target={'_blank'}><TwitterIcon style={{fontSize:35,color:'#f3f3f4',marginInline:15,cursor:'pointer'}}  /> </a>
      <a href='mailto:deeppomal98@gmail.com' target={'_blank'}><MailOutlineIcon style={{fontSize:35,color:'#f3f3f4',marginInline:15,cursor:'pointer'}}  /></a>
    </div>
  )
}
