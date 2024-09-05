import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AccountPic from '../../assets/images/account.png';
import { useParams } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FlagIcon from '@mui/icons-material/Flag';
import CircularProgress from '@mui/material/CircularProgress'; // Importing MUI Circular Progress for the loading indicator


function PendingApp() {
    let { id } = useParams();
    const [applicant, setApplicant] = useState(null);
    const [loading, setLoading] = useState(true); // State to track loading status


    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5173/application/${id}`)
            .then(response => {
                try {
                    // Attempt to parse the response data as JSON
                    const data = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;
                    setApplicant(data); // Set data if successfully parsed
                } catch (error) {
                    console.error('Failed to parse data as JSON:', error);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('There was an error fetching the data:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className="ml-[350px] mr-[50px]">

            <div className="flex justify-center items-center h-screen">
                <CircularProgress /> {/* Displaying the loading spinner */}
            </div>
            </div>

        );
    }
    console.log(applicant);
    if (!applicant) {
        return (
            <div className="ml-[350px] mr-[50px]">
        <div>No data found for this applicant.</div>
    </div>
        
        ); // Displayed if no applicant data is found after loading
    }



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
                                    <div className="text-2xl font-medium">{applicant.fullName}</div>
                                    <FlagIcon className="text-Warning_war50 ml-2" /> {/* Flag icon next to the name */}
                                </div>
                                <div className="text-lg font-base text-primary_pri50">{applicant.nationality}</div>
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
                            {/* Dynamic Rows for Applicant Details */}
                            {Object.entries({
                                "Full Name": applicant.fullName,
                                "Nationality": applicant.nationality,
                                "Gender": applicant.gender,
                                "Date of Birth": applicant.dob,
                                "Place of Birth": applicant.pob,
                                "Country of Birth": applicant.cob,
                                "Civil Status": applicant.civilStatus,
                                "Height": applicant.height,
                            }).map(([key, value]) => (
                                <div className="flex bg-primary_pri10 p-3 rounded-lg" key={key}>
                                    <span className="font-semibold">{key}: </span>
                                    <span className="ml-2">{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Information Section */}
            <div className="ml-5 mt-10">
                <div className="text-lg font-semibold">Contact Information</div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    {/* Dynamic Rows for Contact Information */}
                    {Object.entries({
                        "Address in the Country of Domicile": applicant.addressDomicile,
                        "Address During Stay in Sri Lanka": applicant.addressDuringStay,
                        "Telephone": applicant.telephone,
                        "Mobile": applicant.mobile,
                        "Email": applicant.email,
                    }).map(([key, value]) => (
                        <div className="flex bg-primary_pri10 p-3 rounded-lg" key={key}>
                            <span className="font-semibold">{key}: </span>
                            <span className="ml-2">{value}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Professional Information Section */}
            <div className="ml-5 mt-10">
                <div className="text-lg font-semibold">Professional Information</div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                    {/* Dynamic Rows for Professional Information */}
                    {Object.entries({
                        "Profession": applicant.profession,
                        "Name and Address of Workplace": `${applicant.workplace.name}, ${applicant.workplace.address}`,
                        "Workplace Email": applicant.workplace.email,
                    }).map(([key, value]) => (
                        <div className="flex bg-primary_pri10 p-3 rounded-lg" key={key}>
                            <span className="font-semibold">{key}: </span>
                            <span className="ml-2">{value}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons Section */}
            <div className="flex justify-between items-center mt-10 px-5 mb-10">
                <button className="border border-gray-300 text-gray-700 rounded-lg px-6 py-2 hover:bg-gray-100">
                    Back
                </button>
                <div className="flex justify-center items-center w-10 h-10 bg-primary_pri10 rounded-full cursor-pointer">
                    <ArrowDropDownIcon className="text-primary_pri50" />
                </div>
                <button className="bg-primary_pri50 text-white rounded-lg px-6 py-2 hover:bg-primary_pri60">
                    Next
                </button>
            </div>
        </div>
    );
}

export default PendingApp;
