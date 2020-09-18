import React from 'react';
import { useGoogleMaps } from "react-hook-google-maps";

const LocationMap = ({place}) => {
   let Src="";
if (place ==="cox-bazar") {
  Src = "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d202210.4008211359!2d91.956349!3d21.57489!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1600435174612!5m2!1sen!2sus";
  }
else if(place ==="sreemongol") {
  Src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14544.586176152054!2d91.71628938333505!3d24.30652298908208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37517a7a9ac91745%3A0x50f827893a88c955!2sSreemangal!5e0!3m2!1sen!2sbd!4v1600421766236!5m2!1sen!2sbd";
}
else{
  Src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d946898.4175736089!2d88.72647497751944!3d22.01813241262384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a004caac2c7b315%3A0x4716abcfbb16c93c!2sSundarbans!5e0!3m2!1sen!2sbd!4v1600422133648!5m2!1sen!2sbd";
}

    return (
      <div>
        <iframe src={Src} 
        width="100%" height="450" frameborder="0" style={{border:"0"}} allowfullscreen="" aria-hidden="false" tabindex="0">

        </iframe>
      </div>
    );
};

export default LocationMap;