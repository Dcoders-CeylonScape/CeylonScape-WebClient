import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress'; 

import InterpolNotices from '../../components/officer/interpol';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Notices() {
    let { id } = useParams();
    const [applicant, setApplicant] = useState(null);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setLoading(true);
        axios.get(`/application/${id}`)
            .then(response => {
                try {
                    var res = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;

                    // filter and get the given id
                    var data = res
                
                    setApplicant({
                      id: data.id,
                      fullName: data.fullName,
                      forename: data.fullName.split(' ')[0],
                      name: data.fullName.split(' ')[1] || '',
                      nationality: data.nationality, // fixed spelling from "nationalilty"
                      gender: data.gender,
                      dob: data.dob,
                      pob: data.birthPlace,
                      cob: data.birthCountry,
                      civilStatus: data.civilStatus,
                      height: data.height + ' cm',
                      addressDomicile: data.domicleAddress, // fix spelling if needed
                      addressDuringStay: data.addressDuringSriLanka,
                      telephone: data.telephone,
                      mobile: data.mobile,
                      email: data.email,
                      profession: data.profession.nameOfWorkplace, // renamed as requested
                      workplace: {
                        name: data.profession.nameOfWorkplace,
                        address: data.profession.addressOfWorkplace,
                        email: data.profession.emailOfWorkplace,
                      },
                      imageURL: "data:image/png;base64," + data.image,
                    });


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
                <CircularProgress /> 
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
        
        ); 
    }


    return (
        <div className="ml-[350px] mr-[50px]">
            <div className="ml-5 text-2xl font-medium mt-10">
                Pending Applications
            </div>
            <div className="ml-5 text-lg font-light">
                Check the applications, Approve, Deny or Mark for Review
            </div>



            <div className="flex justify-between items-center mt-10 px-5 mb-10">
                {/* with id */}
                <Link to={`/officer/pending-application/${id}`} style={{ textDecoration: 'none' }}>

                <button className="border border-gray-300 text-gray-700 rounded-lg px-6 py-2 hover:bg-gray-100">
                    Back
                </button>
                </Link>
            
                {/* <Link to="notices" style={{ textDecoration: 'none' }}>
                <button className="bg-primary_pri50 text-white rounded-lg px-6 py-2 hover:bg-primary_pri60">
                    Next
                </button>
                </Link> */}
            </div>


            <div className="mt-10 ml-5 flex gap-6 w-full border-b-2 pb-5 border-gray-300">
                <div className="flex gap-6 w-full">
                    <div className="flex-shrink-0">
                        <img 
                            src={applicant.imageURL}
                            alt="Person" 
                            className="h-[240px] w-auto object-cover rounded-[20px] mb-3 border-2 border-primary_pri50" 
                        />                    
                    </div>

                    <div className="grid grid-cols-2 gap-4 flex-grow">
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


            <div style={{ overflow: 'auto', maxHeight: '90vh' }}> 
    <InterpolNotices applicant={applicant} />
</div>


        </div>
    );
}

export default Notices;
