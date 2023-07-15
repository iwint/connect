/** @format */

import React from "react";

const WorkIcon = () => {
     return (
          <svg
               width="35"
               height="30"
               viewBox="0 0 35 30"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink">
               <rect
                    width="35"
                    height="30"
                    fill="url(#pattern0)"
               />
               <defs>
                    <pattern
                         id="pattern0"
                         patternContentUnits="objectBoundingBox"
                         width="1"
                         height="1">
                         <use
                              xlinkHref="#image0_64_35"
                              transform="matrix(0.00195312 0 0 0.00227865 0 -0.0833333)"
                         />
                    </pattern>
                    <image
                         id="image0_64_35"
                         width="512"
                         height="512"
                         xlinkHref="data:image/png;base64,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"
                    />
               </defs>
          </svg>
     );
};

export default WorkIcon;
