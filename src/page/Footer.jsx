import React from 'react'
import { FooterStyling,
    FooterMiddle,
    Deets,
    Copyright,
    Box,
    Zero,
    DownIcon,
    HoldText
  } from './FooterStyles'
  import { FaFacebookF } from "react-icons/fa";
  import { FaTwitter } from "react-icons/fa";
  import { MdFace3 } from "react-icons/md";
  import { RiLinkedinFill } from "react-icons/ri";
  import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterStyling>
        <FooterMiddle>
            <Deets>
                <Box><h3>Help & Advice</h3>
                        <div>
                            <p>Customer Service</p>
                            <p>Terms & Condition</p>
                            <p> Privacy</p>
                        </div>
                </Box>
                <Box><h3>Company</h3>
                    <div>
                        <p>About us</p>
                        <p>Pricing</p>
                        <p>Centers</p>
                    </div>
                </Box>
                <Box><h3>FAQ</h3>
                    <div>
                        <p>How much does your service cost?</p>
                        <p>Can I pay by cash or check?</p>
                        <p>How will I be billed?</p>
                    </div>
                </Box>
                <Box><h3>Get in Touch</h3>
                    <HoldText>
                        <p>Feel free to get in touch</p>
                        <strong>aquacleanersaretidy123@gmail.com</strong>
                        <DownIcon>
                            <Zero>
                                <FaFacebookF color='#2196F3' size={21}/>
                            </Zero>
                            <Zero>
                                <FaTwitter color='#2196F3' size={21}/>
                            </Zero>
                            <Zero>
                                <MdFace3 color='#2196F3' size={21}/>
                            </Zero>
                            <Zero>
                                <RiLinkedinFill color='#2196F3' size={21}/>
                            </Zero>
                            
                        </DownIcon>
                    </HoldText>
                </Box>
                
                
            </Deets>
            <Copyright>
                <p>2023-2024 <span><FaRegCopyright size={13}/></span> AquaClean Private Limited</p>
            </Copyright>
        </FooterMiddle>
    </FooterStyling>
  )
}

export default Footer