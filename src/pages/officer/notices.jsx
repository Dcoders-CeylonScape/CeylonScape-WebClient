import { useEffect, useState } from 'react';
import axios from 'axios';
import AccountPic from '../../assets/images/account.png';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress'; // Importing MUI Circular Progress for the loading indicator

import InterpolNotices from '../../components/officer/interpol';

function Notices() {
    let { id } = useParams();
    const [applicant, setApplicant] = useState(null);
    const [loading, setLoading] = useState(true); // State to track loading status


    useEffect(() => {
        setLoading(true);
        axios.get(`/application/${id}`)
            .then(response => {
                try {
                    // Attempt to parse the response daSingle</span>ta as JSON
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
                                <span className="ml-2">{applicant.name}</span>
                            </div>
                            <div className="bg-primary_pri10 p-3 rounded-lg">
                                <span className="font-semibold">Gender: </span>
                                <span className="ml-2">{applicant.gender}</span>
                            </div>
                            <div className="bg-primary_pri10 p-3 rounded-lg">
                                <span className="font-semibold">Place of Birth: </span>
                                <span className="ml-2">{applicant.pob}</span>
                            </div>
                            <div className="bg-primary_pri10 p-3 rounded-lg">
                                <span className="font-semibold">Civil Status: </span>
                                <span className="ml-2">{applicant.civilStatus}</span>
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


<InterpolNotices applicant={applicant} />


        </div>
    );
}

export default Notices;
