import React from 'react';

const Footermob = () => {
    // Array of section data to map over for clean, maintainable code
    const sections = [
        {
            title: 'CS-Ticket System',
            content: (
                <p className='text-white text-base leading-relaxed'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            ),
            isPrimary: true, // Used to keep the main description open by default
        },
        {
            title: 'Company',
            content: (
                <ul className='list-none space-y-3 text-white text-base'>
                    <li>About us</li>
                    <li>Our Misson</li>
                    <li>Contact Sales</li>
                </ul>
            ),
        },
        {
            title: 'Services',
            content: (
                <ul className='list-none space-y-3 text-white text-base'>
                    <li>Customer Services</li>
                    <li>Sales services</li>
                    <li>Download Apps</li>
                </ul>
            ),
        },
        {
            title: 'Information',
            content: (
                <ul className='list-none space-y-3 text-white text-base'>
                    <li>Privacy Policy</li>
                    <li>Terms and condition</li>
                    <li>What?</li>
                </ul>
            ),
        },
        {
            title: 'Social Links',
            content: (
                <ul className='list-none space-y-3 text-white text-base'>
                    <li>@CS-System</li>
                    <li>@CS-System</li>
                    <li>@CS-System</li>
                    <li>@CS-System</li>
                    <li>@CS-System</li>
                </ul>
            ),
        },
    ];

    return (
        <div className='bg-black p-4 min-h-screen md:min-h-0 md:p-8'>
            <div className='max-w-[425px] mx-auto space-y-4'>
                {sections.map((section, index) => (
                    <div key={index} className="dropdown w-full">
                        {/* The 'Button' - using a button-like div for the dropdown toggle */}
                        <div tabIndex={0} role="button" className={`w-full py-4 text-left border-b border-gray-700 hover:border-white transition-colors duration-200 ${section.isPrimary ? 'font-extrabold text-white cursor-default' : 'font-bold text-white cursor-pointer'}`}>
                            <h1 className='text-2xl'>{section.title}</h1>
                        </div>
                        
                        {/* The 'Dropdown Menu' - this acts as the collapsible content */}
                        {/* We use 'menu' class structure for the content */}
                        <div tabIndex={0} className="w-full mt-2 p-0 text-white">
                            {/* Instead of a list, we wrap the content directly */}
                            <div className='py-2 px-0'>
                                {section.content}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Footermob;