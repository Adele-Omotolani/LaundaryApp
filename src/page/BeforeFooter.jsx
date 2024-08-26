import React from 'react'
import { BeforeFooterBody, 
    VisitUsText,
    HoldTheVisitAndMap,
    Map
 } from './FooterStyles'
 import map from '../assets/mapfile.jpg'

const BeforeFooter = () => {
  return (
    <BeforeFooterBody>
        <HoldTheVisitAndMap>
            <VisitUsText>
                <h1>Do you want to pay us a visit?</h1>
                <div>
                <p><span>Address:</span> 161/163 Muyibi street, off Wilmer Cresent, Ajeromi-Ifelodun,
                    
                 Lagos, Nigeria</p>
                <p><span>E-mail:</span> aquacleanersaretidy123@gmail.com</p>
                <p><span>Contact:</span> +234 706 464 5791 </p>
                <p><span>Opened:</span> 7:00am - 8:00pm, Monday - Sunday </p>
                </div>
            </VisitUsText>
            <Map>
              <img src={map} alt="" />
            </Map>
        </HoldTheVisitAndMap>

    </BeforeFooterBody>
  )
}

export default BeforeFooter