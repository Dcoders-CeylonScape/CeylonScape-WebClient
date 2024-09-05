import React from "react";
import AccountPic from '../../assets/images/account.png';

function PendingAccInterpol() {
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
            <div className="mt-10 ml-5 flex gap-6 w-full border-b-2 pb-5 border-gray-300">
                {/* Flex Layout */}
                <div className="flex gap-6 w-full">
                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                        <img 
                            src={AccountPic} 
                            alt="Person" 
                            className="h-[240px] w-auto object-cover rounded-[20px] mb-3 border-2 border-primary_pri50" 
                        />                    
                    </div>

                    {/* Applicant Info */}
                    <div className="grid grid-cols-2 gap-4 flex-grow">
                        {/* Left Column */}
                        <div className="flex flex-col gap-4">
                            <div className="bg-primary_pri10 p-3 rounded-lg">
                                <span className="font-semibold">Full Name: </span>
                                <span className="ml-2">Emily Grace Johnson</span>
                            </div>
                            <div className="bg-primary_pri10 p-3 rounded-lg">
                                <span className="font-semibold">Gender: </span>
                                <span className="ml-2">Female</span>
                            </div>
                            <div className="bg-primary_pri10 p-3 rounded-lg">
                                <span className="font-semibold">Place of Birth: </span>
                                <span className="ml-2">Toronto, Ontario</span>
                            </div>
                            <div className="bg-primary_pri10 p-3 rounded-lg">
                                <span className="font-semibold">Civil Status: </span>
                                <span className="ml-2">Single</span>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col gap-4">
                            <div className="bg-primary_pri10 p-3 rounded-lg">
                                <span className="font-semibold">Nationality: </span>
                                <span className="ml-2">Canadian</span>
                            </div>
                            <div className="bg-primary_pri10 p-3 rounded-lg">
                                <span className="font-semibold">Date of Birth: </span>
                                <span className="ml-2">July 15, 1995</span>
                            </div>
                            <div className="bg-primary_pri10 p-3 rounded-lg">
                                <span className="font-semibold">Country of Birth: </span>
                                <span className="ml-2">Canada</span>
                            </div>
                            <div className="bg-primary_pri10 p-3 rounded-lg">
                                <span className="font-semibold">Height: </span>
                                <span className="ml-2">165 cm</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Interpol Red Notices Section */}
            <div className="mt-10 ml-5">
                <div className="text-2xl font-medium mb-5">Interpol Red Notices</div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Red Notice Card 1 */}
                    <div className="border rounded-lg p-4 flex flex-col bg-gray-50">
                        <div className="flex items-start gap-4">
                            <img 
                                src={AccountPic} 
                                alt="Interpol Notice Person" 
                                className="h-[250px] w-auto object-cover rounded-[20px] mb-3 border-2 border-black_blk10" 
                            />
                            <div className="flex flex-col w-full">
                                <div className="text-lg font-semibold">Emily Grace Johnson</div>
                                <div className="text-gray-500 mb-5">Canada</div>
                                <div className="bg-black_blk10 p-3 rounded-lg w-full mb-3">
                                    <span className="font-semibold">Date of Birth: </span>
                                    <span className="ml-2">July 15, 1995</span>
                                </div>
                                <div className="bg-black_blk10 p-3 rounded-lg w-full mb-3">
                                    <span className="font-semibold">Nationalities: </span>
                                    <span className="ml-2">CA</span>
                                </div>
                                <div className="bg-black_blk10 p-3 rounded-lg w-full mb-3">
                                    <span className="font-semibold">Email: </span>
                                    <span className="ml-2">emily.johnson@example.com</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end mt-4">
                            <button className="bg-primary_pri50 text-white rounded-lg px-6 py-2 hover:bg-primary_pri60">
                                Match
                            </button>
                        </div>
                    </div>

                    {/* Red Notice Card 2 */}
                    <div className="border rounded-lg p-4 flex flex-col bg-gray-50">
                        <div className="flex items-start gap-4">
                            <img 
                                src={AccountPic} 
                                alt="Interpol Notice Person" 
                                className="h-[250px] w-auto object-cover rounded-[20px] mb-3 border-2 border-black_blk10" 
                            />
                            <div className="flex flex-col w-full">
                                <div className="text-lg font-semibold">Emil Johnson</div>
                                <div className="text-gray-500 mb-5">United States</div>
                                <div className="bg-black_blk10 p-3 rounded-lg w-full mb-3">
                                    <span className="font-semibold">Date of Birth: </span>
                                    <span className="ml-2">January 15, 1986</span>
                                </div>
                                <div className="bg-black_blk10 p-3 rounded-lg w-full mb-3">
                                    <span className="font-semibold">Nationalities: </span>
                                    <span className="ml-2">US</span>
                                </div>
                                <div className="bg-black_blk10 p-3 rounded-lg w-full mb-3">
                                    <span className="font-semibold">Email: </span>
                                    <span className="ml-2">emil.johnson@example.com</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end mt-4">
                            <button className="bg-primary_pri50 text-white rounded-lg px-6 py-2 hover:bg-primary_pri60">
                                Match
                            </button>
                        </div>
                    </div>

                    {/* Red Notice Card 3 */}
                    <div className="border rounded-lg p-4 flex flex-col bg-gray-50">
                        <div className="flex items-start gap-4">
                            <img 
                                src={AccountPic} 
                                alt="Interpol Notice Person" 
                                className="h-[250px] w-auto object-cover rounded-[20px] mb-3 border-2 border-black_blk10" 
                            />
                            <div className="flex flex-col w-full">
                                <div className="text-lg font-semibold">Emil John</div>
                                <div className="text-gray-500 mb-5">England</div>
                                <div className="bg-black_blk10 p-3 rounded-lg w-full mb-3">
                                    <span className="font-semibold">Date of Birth: </span>
                                    <span className="ml-2">March 10, 1987</span>
                                </div>
                                <div className="bg-black_blk10 p-3 rounded-lg w-full mb-3">
                                    <span className="font-semibold">Nationalities: </span>
                                    <span className="ml-2">UK</span>
                                </div>
                                <div className="bg-black_blk10 p-3 rounded-lg w-full mb-3">
                                    <span className="font-semibold">Email: </span>
                                    <span className="ml-2">emil.john@example.com</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end mt-4">
                            <button className="bg-primary_pri50 text-white rounded-lg px-6 py-2 hover:bg-primary_pri60">
                                Match
                            </button>
                        </div>
                    </div>

                    {/* Red Notice Card 4 */}
                    <div className="border rounded-lg p-4 flex flex-col bg-gray-50">
                        <div className="flex items-start gap-4">
                            <img 
                                src={AccountPic} 
                                alt="Interpol Notice Person" 
                                className="h-[250px] w-auto object-cover rounded-[20px] mb-3 border-2 border-black_blk10" 
                            />
                            <div className="flex flex-col w-full">
                                <div className="text-lg font-semibold">Emily Johns</div>
                                <div className="text-gray-500 mb-5">Australia</div>
                                <div className="bg-black_blk10 p-3 rounded-lg w-full mb-3">
                                    <span className="font-semibold">Date of Birth: </span>
                                    <span className="ml-2">August 22, 1990</span>
                                </div>
                                <div className="bg-black_blk10 p-3 rounded-lg w-full mb-3">
                                    <span className="font-semibold">Nationalities: </span>
                                    <span className="ml-2">AU</span>
                                </div>
                                <div className="bg-black_blk10 p-3 rounded-lg w-full mb-3">
                                    <span className="font-semibold">Email: </span>
                                    <span className="ml-2">emily.johns@example.com</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end mt-4">
                            <button className="bg-primary_pri50 text-white rounded-lg px-6 py-2 hover:bg-primary_pri60">
                                Match
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PendingAccInterpol;
