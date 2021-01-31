import React from 'react';

const navbar = () => {
    return (

         <nav>
         <div class="nav-wrapper">
           <a href="/" class="brand-logo">Chris Kim</a>
           <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li ><a href="/about">About</a></li>
                     <li ><a href="/portfolio">Portfolio</a></li>
                     <li ><a href="/contact">Contact</a></li>
           </ul>
         </div>
       </nav>
    );
};

export default navbar;