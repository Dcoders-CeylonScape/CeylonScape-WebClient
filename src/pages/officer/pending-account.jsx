import React from "react";
import AccountPic from '../../assets/images/account.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FlagIcon from '@mui/icons-material/Flag'; // Importing the flag icon from MUI

function PendingAcc() {
    return (
        <div className="ml-[350px] mr-[50px]">
            {/* Title Section */}
            <div className="ml-5 text-2xl font-medium mt-10">
                Pending Applications
            </div>
            <div className="ml-5 text-lg font-light">
                Check the applications, Approve, Deny or Mark for Review
            </div>

            {/* Main Application Info Section */}
            <div className="mt-10 ml-5 flex gap-6 w-full">
                {/* Grid Layout */}
                <div className="grid grid-cols-12 gap-6 w-full">
                    {/* Profile Image */}
                    <div className="col-span-2">
                        <img 
                            src={AccountPic} 
                            alt="Person" 
                            className="h-full w-auto object-cover rounded-lg mb-3 border-2 border-primary_pri50" 
                            />                    
                    </div>

                    {/* Applicant Info and Actions */}
                    <div className="col-span-10">
                        {/* Name and Buttons */}
                        <div className="flex justify-between">
                            <div className="flex-col">
                                <div className="flex items-center">
                                    <div className="text-2xl font-medium">Emily Grace Johnson</div>
                                    <FlagIcon className="text-Warning_war50 ml-2" /> {/* Adding the flag icon next to the name */}
                                </div>
                                <div className="text-lg font-base text-primary_pri50">Russian</div>
                            </div>
                            <div className="flex gap-4">
                                {/* Flag Button */}
                                <button className="border border-Warning_war50 text-Warning_war50 rounded-lg px-8 h-[42px] hover:bg-orange-100">
                                    Flag
                                </button>

                                {/* Deny Button */}
                                <button className="border border-error_err70 text-error_err70 rounded-lg px-7 h-[42px] hover:bg-red-100">
                                    Deny
                                </button>

                                {/* Approve Button */}
                                <button className="bg-primary_pri50 text-white rounded-lg px-4 h-[42px] hover:text-primary_pri10">
                                    Approve
                                </button>
                            </div>
                        </div>

                        {/* Applicant Details Grid */}
                        <div className="grid grid-cols-2 gap-4 w-full mt-5">
                            {/* Row 1 */}
                            <div className="flex bg-primary_pri10 p-3 rounded-lg">
                                <span className="font-semibold">Full Name: </span>
                                <span className="ml-2">Emily Grace Johnson</span>
                            </div>
                            <div className="flex bg-primary_pri10 p-3 rounded-lg">
                                <span className="font-semibold">Nationality: </span>
                                <span className="ml-2">Canadian</span>
                            </div>

                            {/* Row 2 */}
                            <div className="flex bg-primary_pri10 p-3 rounded-lg">
                                <span className="font-semibold">Gender: </span>
                                <span className="ml-2">Female</span>
                            </div>
                            <div className="flex bg-primary_pri10 p-3 rounded-lg">
                                <span className="font-semibold">Date of Birth: </span>
                                <span className="ml-2">July 15, 1995</span>
                            </div>

                            {/* Row 3 */}
                            <div className="flex bg-primary_pri10 p-3 rounded-lg">
                                <span className="font-semibold">Place of Birth: </span>
                                <span className="ml-2">Toronto, Ontario</span>
                            </div>
                            <div className="flex bg-primary_pri10 p-3 rounded-lg">
                                <span className="font-semibold">Country of Birth: </span>
                                <span className="ml-2">Canada</span>
                            </div>

                            {/* Row 4 */}
                            <div className="flex bg-primary_pri10 p-3 rounded-lg">
                                <span className="font-semibold">Civil Status: </span>
                                <span className="ml-2">Single</span>
                            </div>
                            <div className="flex bg-primary_pri10 p-3 rounded-lg">
                                <span className="font-semibold">Height: </span>
                                <span className="ml-2">165 cm</span>
                            </div>                        
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Information Section */}
            <div className="ml-5 mt-10">
                <div className="text-lg font-semibold">Contact Information</div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="flex bg-primary_pri10 p-3 rounded-lg">
                        <span className="font-semibold">Address in the Country of Domicile: </span>
                        <span className="ml-2">123 Maple Avenue, Toronto, Ontario, M5H 2N2, Canada</span>
                    </div>
                    <div className="flex bg-primary_pri10 p-3 rounded-lg">
                        <span className="font-semibold">Address During Stay in Sri Lanka: </span>
                        <span className="ml-2">456 Galle Rd, Colombo, Sri Lanka</span>
                    </div>
                    <div className="flex bg-primary_pri10 p-3 rounded-lg">
                        <span className="font-semibold">Telephone: </span>
                        <span className="ml-2">+1-416-555-7890</span>
                    </div>
                    <div className="flex bg-primary_pri10 p-3 rounded-lg">
                        <span className="font-semibold">Mobile: </span>
                        <span className="ml-2">+1-416-987-6543</span>
                    </div>
                    <div className="flex bg-primary_pri10 p-3 rounded-lg">
                        <span className="font-semibold">Email: </span>
                        <span className="ml-2">emily.johnson@gmail.comm</span>
                    </div>
                </div>
            </div>

            {/* Professional Information Section */}
            <div className="ml-5 mt-10">
                <div className="text-lg font-semibold">Professional Information</div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="flex bg-primary_pri10 p-3 rounded-lg">
                        <span className="font-semibold">Profession: </span>
                        <span className="ml-2">Software Engineer</span>
                    </div>
                    <div className="flex bg-primary_pri10 p-3 rounded-lg">
                        <span className="font-semibold">Name and Address of Workplace: </span>
                        <span className="ml-2">Maple Media Inc.,
                        456 King Street, Suite 200, Toronto, Ontario, M5H 3J7, Canada</span>
                    </div>
                    <div className="flex bg-primary_pri10 p-3 rounded-lg">
                        <span className="font-semibold">Workplace Email: </span>
                        <span className="ml-2">emily.johnson@maplemedia.com</span>
                    </div>
                </div>
            </div>

            {/* Navigation Buttons Section */}
            <div className="flex justify-between items-center mt-10 px-5 mb-10">
                {/* Back Button */}
                <button className="border border-gray-300 text-gray-700 rounded-lg px-6 py-2 hover:bg-gray-100">
                    Back
                </button>

                {/* Dropdown Arrow */}
                <div className="flex justify-center items-center w-10 h-10 bg-primary_pri10 rounded-full cursor-pointer">
                    <ArrowDropDownIcon className="text-primary_pri50" />
                </div>

                {/* Next Button */}
                <button className="bg-primary_pri50 text-white rounded-lg px-6 py-2 hover:bg-primary_pri60">
                    Next
                </button>
            </div>
        </div>
    );
}

export default PendingAcc;
