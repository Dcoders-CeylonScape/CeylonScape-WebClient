import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress'; 
import PropTypes from 'prop-types';

import { interpolApi } from '../../api/api';
import NoticeDetails from './noticeDetails';

import { Modal,Box,IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { countries } from '../../data/country';

InterpolNotices.propTypes = {
    applicant: PropTypes.object,
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function InterpolNotices({applicant}) {
    let { id } = useParams();
    const [notices, setNotices] = useState([]);
    const [selectedNotice, setSelectedNotice] = useState(null);
    const [loading, setLoading] = useState(true); 

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    console.log("name" , applicant.name);


    const getCountryName = (code) => {
        const country = countries.find(country => country['alpha-2'] === code);
        // console.log("country" , country.name);
        return country ? country.name : code;
    };

    // July 15, 1995
    const formatDate = (date) => {
        const d = new Date(date);
        return `${d.getDate()} ${d.toLocaleString('default', { month: 'long' })} ${d.getFullYear()}`;
    };


    useEffect(() => {
        console.log("name" , applicant.name);

        setLoading(true);
        interpolApi.get('/red', {
            params: {
                name: applicant.name,
                forename: applicant.forename,
            }
        })
            .then(response => {
                try {
                    const data = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;
                    console.log(data._embedded.notices);
                    setNotices(data._embedded.notices); 
                } catch (error) {
                    console.error('Failed to parse data as JSON:', error);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('There was an error fetching the data:', error);
                setLoading(false);
            });
    }, [applicant]);




        
        


    if (loading) {
        return (

            <div className="flex justify-center items-center h-screen">
                <CircularProgress /> 
            </div>

        );
    }
    console.log(applicant);
    if (!notices.length) {
        return (
        <div>No data found for this applicant.</div>
        
        ); 
    }


    return (
      
        <div>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[500],
                            }}
                        >
                            <CloseIcon />
                        </IconButton>


                    <NoticeDetails noticeId={selectedNotice} applicant={applicant} />
                    </Box>
                </Modal>




            <div className="mt-10 ml-5">
                <div className="text-2xl font-medium mb-5">Interpol Red Notices</div>


              

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Red Notice Card 1 */}
                    {/* <div className="border rounded-lg p-4 flex flex-col bg-gray-50">
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
                    </div> */}

                    {notices.map((notice, index) => (
                        <div className="border rounded-lg p-4 flex flex-col bg-gray-50 cursor-pointer" key={index} onClick={() => {setSelectedNotice(notice.entity_id); handleOpen()}} >
                            <div className="flex items-start gap-4">
                                <img
                                src={notice._links.thumbnail.href}
                                alt="Interpol Notice Person"
                                className="h-[250px] w-auto object-cover rounded-[20px] mb-3 border-2 border-black_blk10"
                                />
                                <div className="flex flex-col w-full">
                                <div className="text-lg font-semibold">{notice.name} {notice.forename}</div>
                                <div className="text-gray-500 mb-5">{notice.nationalities.map((item, index) => (
                                    <span key={index}>{getCountryName(item)}</span>
                                ))}</div>

                                    


                                <div className="bg-black_blk10 p-3 rounded-lg w-full mb-3">
                                    <span className="font-semibold">Date of Birth: </span>
                                    <span className="ml-2">{formatDate(notice.date_of_birth)}</span>
                                </div>
                                <div className="bg-black_blk10 p-3 rounded-lg w-full mb-3">
                                    <span className="font-semibold">Nationalities: </span>
                                    <span className="ml-2">
                                        {notice.nationalities.map((item, index) => (
                                    <span key={index}>{getCountryName(item)+ " "}</span> 
                                    
                                ))}
                                </span>
                                </div>
                                <div className="bg-black_blk10 p-3 rounded-lg w-full mb-3">
                                    <span className="font-semibold">Notice Id: </span>
                                    <span className="ml-2">{notice.entity_id}</span>
                                </div>
                                </div>
                                </div>
                        <div className="flex justify-end mt-4">
                            <button className="bg-primary_pri50 text-white rounded-lg px-6 py-2 hover:bg-primary_pri60">
                                Match
                            </button>
                        </div>
                    </div>
                    ))}


                


                </div>
            </div>
        </div>

    );
}

export default InterpolNotices;
