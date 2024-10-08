import  { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams,Link } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FlagIcon from '@mui/icons-material/Flag';
import CircularProgress from '@mui/material/CircularProgress'; 

import RedFlagIcon from "../../assets/images/flag_red.png";
import YellowFlagIcon from "../../assets/images/flag_yellow.png";
import GreenFlagIcon from "../../assets/images/flag_green.png"; 

import { redNoticeCheck, yellowNoticeCheck } from '../../api/interpol';
import { interpolApi } from '../../api/api';
import { useNavigate } from 'react-router-dom';

function PendingApp() {
    let { id } = useParams();
    const [applicant, setApplicant] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true); 
    const [NoticeState, setNoticeState] = useState('green');


    const navigate = useNavigate();

    const approve = () => {
        interpolApi.get(`/application/${id}/approve`)
            .then(response => {
                console.log(response);
                navigate('/officer/pending-applications');
                
            })
            .catch(error => {
                console.error('There was an error approving the application:', error);
                navigate('/officer/pending-applications');

            });
    };

    const deny = () => {
        interpolApi.get(`/application/${id}/deny`)
            .then(response => {
                console.log(response);
                navigate('/officer/pending-applications');

            })
            .catch(error => {   
                console.error('There was an error denying the application:', error);
                navigate('/officer/pending-applications');

            });
    };

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
                      nationality: data.nationality, 
                      gender: data.gender,
                      dob: data.dob,
                      pob: data.birthPlace,
                      cob: data.birthCountry,
                      civilStatus: data.civilStatus,
                      height: data.height + ' cm',
                      addressDomicile: data.domicileAddress, 
                      addressDuringStay: data.addressDuringSriLanka,
                      telephone: data.telephone,
                      mobile: data.mobile,
                      email: data.email,
                      profession: data.profession.nameOfWorkplace, 
                      workplace: {
                        name: data.profession.nameOfWorkplace,
                        address: data.profession.addressOfWorkplace,
                        email: data.profession.email,
                      },
                      imageURL:  data.image,
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

    useEffect(() => {
        if (applicant && applicant.forename && applicant.name) {
            redNoticeCheck(applicant.forename, applicant.name)
                .then(hasRedNotice => {
                    if (hasRedNotice) {
                        console.log("Red notice found.");
                        setNoticeState('red');
                    } else {
                        yellowNoticeCheck(applicant.forename, applicant.name)
                            .then(hasYellowNotice => {
                                if (hasYellowNotice) {
                                    console.log("Yellow notice found.");
                                    setNoticeState('yellow');
                                } else {
                                    console.log("No notices found.");
                                    setNoticeState('green');
                                }
                            });
                    }
                })
                .catch(error => {
                    console.error("Error checking notices:", error);
                    // Handle errors or set default state as needed
                });
        }
    }, [applicant]); // Ensure this is the correct dependency






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

            <div className="mt-10 ml-5 flex gap-6 w-full">
                <div className="grid grid-cols-12 gap-6 w-full">
                    <div className="col-span-2">
                        <img 
                            src={applicant.imageURL}
                            alt="Person" 
                            className="h-full w-auto object-cover rounded-lg mb-3 border-2 border-primary_pri50" 
                            />                    
                    </div>

                    <div className="col-span-10">
                        <div className="flex justify-between">
                            <div className="flex-col">
                                <div className="flex items-center">
                                    <div className="text-2xl font-medium">{applicant.fullName}</div>
                                    {/* <FlagIcon className="text-Warning_war50 ml-2" /> Flag icon next to the name */}
                                    {NoticeState === 'red' && <img src={RedFlagIcon} alt="Red Flag" className="h-6 ml-2" />}
                                    {NoticeState === 'yellow' && <img src={YellowFlagIcon} alt="Yellow Flag" className="h-6 ml-2" />}
                                    {NoticeState === 'green' && <img src={GreenFlagIcon} alt="Green Flag" className="h-6 ml-2" />}
                                </div>
                                <div className="text-lg font-base text-primary_pri50">{applicant.nationality}</div>
                            </div>
                            <div className="flex gap-4">

                                {/* View notices button */}
                                {NoticeState === 'red' && (                 <Link to="notices" style={{ textDecoration: 'none' }}>
                                    <button className="border border-Warning_war50 text-Warning_war50 rounded-lg px-8 h-[42px] hover:bg-orange-100">
                                    View Notices
                                </button> 
                                </Link>
                                )}


                                {/* <button className="border border-Warning_war50 text-Warning_war50 rounded-lg px-8 h-[42px] hover:bg-orange-100">
                                    Flag
                                </button> */}

                                <button className="border border-error_err70 text-error_err70 rounded-lg px-7 h-[42px] hover:bg-red-100" onClick={deny}>
                                    Deny
                                </button>

                                <button className="bg-primary_pri50 text-white rounded-lg px-4 h-[42px] hover:text-primary_pri10" onClick={approve}>
                                    Approve
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 w-full mt-5">
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


            {/* <div className="ml-5 mt-10">
                <div className="text-lg font-semibold">C</div>
                <div className="grid grid-cols-2 gap-4 mt-4">
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
            </div> */}



            <div className="ml-5 mt-10">
                <div className="text-lg font-semibold">Contact Information</div>
                <div className="grid grid-cols-2 gap-4 mt-4">
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

            <div className="ml-5 mt-10">
                <div className="text-lg font-semibold">Professional Information</div>
                <div className="grid grid-cols-3 gap-4 mt-4">
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

            <div className="flex justify-between items-center mt-10 px-5 mb-10">
                <Link to="/officer/pending-applications" style={{ textDecoration: 'none' }}>
                <button className="border border-gray-300 text-gray-700 rounded-lg px-6 py-2 hover:bg-gray-100">
                    Back
                </button>
                </Link>
                <div className="flex justify-center items-center w-10 h-10 bg-primary_pri10 rounded-full cursor-pointer">
                    <ArrowDropDownIcon className="text-primary_pri50" />
                </div>
                <Link to="notices" style={{ textDecoration: 'none' }}>
                <button className="bg-primary_pri50 text-white rounded-lg px-6 py-2 hover:bg-primary_pri60">
                    Next
                </button>
                </Link>
            </div>
        </div>
    );
}

export default PendingApp;
