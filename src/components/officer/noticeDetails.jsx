import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { api, interpolApi } from '../../api/api';
import { CircularProgress, Box, Typography, IconButton, ImageListItem } from '@mui/material';

import SwipeableViews from 'react-swipeable-views';
import { virtualize } from 'react-swipeable-views-utils';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { redirect,useNavigate } from 'react-router-dom';

const VirtualizeSwipeableViews = virtualize(SwipeableViews);


NoticeDetails.propTypes = {
    noticeId: propTypes.string.isRequired,
    applicant: propTypes.object,
};

function NoticeDetails({ noticeId, applicant }) {
    const [notice, setNotice] = useState(null);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeStep, setActiveStep] = useState(0);
    const navigate = useNavigate(); // Hook for
    

    const denyApplication = () => {
        console.log("Deny Application");
        api.post(`/application/${applicant.id}/deny`,
            {
                noticeId: noticeId,
            })
            

            .then(response => {
                console.log(response);
                redirect('/officer/pending-applications');
            })
            .catch(error => {
                console.error('Failed to deny application:', error);
                navigate('/officer/pending-applications');

            });
        

    }

    useEffect(() => {
        setLoading(true);

        const fetchDetails = async () => {
            try {
                const response = await interpolApi.get(`/red/${encodeURIComponent(noticeId)}`);
                const data = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;
                setNotice(data);

                const imagesResponse = await interpolApi.get(`/red/${encodeURIComponent(noticeId)}/images`);
                const imagesData = typeof imagesResponse.data === 'string' ? JSON.parse(imagesResponse.data) : imagesResponse.data;
                setImages(imagesData._embedded.images);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchDetails();
    }, [noticeId]);


    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowRight') {
                handleNext();
            } else if (event.key === 'ArrowLeft') {
                handleBack();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [activeStep, images.length]); 


    const handleChangeIndex = index => {
        setActiveStep(index);
    };

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const slideRenderer = params => {
        const { index, key } = params;
        const realIndex = index % images.length;
        if (realIndex < 0 || realIndex >= images.length) return null;

        return (
            <Box key={key} display="flex" justifyContent="center" alignItems="center" height="100%">
                <img src={images[realIndex]._links.self.href} alt={`Notice Image ${realIndex}`} style={{ width: '100%', height: 'auto' }} />
            </Box>
        );
    };



    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress />
            </Box>
        );
    }

    return (

        <Box display="flex" flexDirection="column" gap={2} p={2}>
        <Box display="flex" p={2} gap={2}>

        <Box flex={1} height={500} position="relative" gap={2}> 
               {/* Image */}
               <img src={applicant.imageURL} alt="Person" className=" w-auto object-cover rounded-[20px] mb-3 border-2 border-primary_pri50" />
            </Box>

            <Box flex={1} height={500} position="relative" gap={2}> 
                <IconButton
                    onClick={handleBack}
                    disabled={activeStep === 0}
                    sx={{ position: 'absolute', left: 0, bottom: 0, transform: 'translateY(-50%)', zIndex: 1 }}
                >
                    <ArrowBackIosIcon />
                </IconButton>
                {/* Padding */}
                <div className="h-1/2">
                <VirtualizeSwipeableViews
                    index={activeStep}
                    onChangeIndex={handleChangeIndex}
                    slideRenderer={slideRenderer}
                    enableMouseEvents
                />
                </div>
                
                <IconButton
                    onClick={handleNext}
                    disabled={activeStep === images.length - 1}
                    sx={{ position: 'absolute', right: 0, bottom: 0, transform: 'translateY(-50%)', zIndex: 1 }}
                >
                    <ArrowForwardIosIcon />
                </IconButton>
            </Box>

            <Box flex={2} p={3}>
                <Typography variant="h6" component="h2">
                    Notice Details
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                    Name: {notice.forename} {notice.name}
                    <br />
                    Date of Birth: {notice.date_of_birth}
                    <br />
                    Place of Birth: {notice.place_of_birth}
                    <br />
                    Charges: {notice.arrest_warrants.map(warrant => warrant.charge).join(', ')}
                </Typography>
            </Box>
        </Box>
            <button className="border border-error_err70 text-error_err70 rounded-lg px-7 h-[42px] hover:bg-red-100" onClick={denyApplication}>
                                   Match & Deny Application
                                </button>
        </Box>
    );
}

export default NoticeDetails;
