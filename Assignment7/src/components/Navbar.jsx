import React from 'react';

const Navbar = () => {
    return (
        <div className='flex py-[20px] shadow-2xl items-center justify-between '>
            <div className='2xl:ml-[30px] ml-[15px]'>
                <h1 className='xl:text-xl font-semibold'>CS-TICKET SYSTEM</h1>
            </div>

            <div className='flex 2xl:mr-[px] mr-[15px] gap-7'>
                <ul className=' hidden xl:flex gap-7  items-center list-none'>    
                <li className=''>Home</li>
                <li>Faq</li>
                <li>Changelog</li>
                <li>Blog</li>
                <li>Download</li>
                <li>Contact</li>
                </ul>
                
<button className="btn btn-primary lg:hidden relative left-5" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } }>
  Options
</button>

<ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
  popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */ }>
    
                <li className=''>Home</li>
                <li>Faq</li>
                <li>Changelog</li>
                <li>Blog</li>
                <li>Download</li>
                <li>Contact</li>
                </ul>

                <button class="btn text-white bg-[linear-gradient(125.07deg,#632EE3_0%,#9F62F2_100%)] hover:opacity-90 transition-opacity">
  + New Ticket
</button> 
            </div>
        </div>
    );
};

export default Navbar;