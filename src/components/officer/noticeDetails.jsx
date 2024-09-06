import  { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { api, interpolApi } from '../../api/api';
import { CircularProgress, Box, Typography, IconButton } from '@mui/material';

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
    const navigate = useNavigate();
    

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
            <div className={"overflow-hidden"}>
                <img src={images[realIndex]._links.self.href} alt={`Notice Image ${realIndex}`} className={"w-full h-[25em] object-cover overflow-hidden"} />
            </div>
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

        <div>
            <div className={"flex gap-10 items-center"}>
                <div className={"w-[50%] flex flex-col justify-center items-center"}>
                    <div className={"text-xl font-semibold mb-5"}>Visa Applicant</div>
                    <img src={applicant.imageURL} alt="Person" className="w-[20em] h-[25em] object-cover rounded-[20px]  border-2 border-primary_pri50" />
                </div>

                <div className={"w-[50%] flex flex-col justify-center items-center"}>
                    <div className={"text-xl font-semibold mb-5"}>Noticed Person</div>
                    <div className={"flex items-center"}>
                        <IconButton
                            onClick={handleBack}
                            disabled={activeStep === 0}
                            className={"!rounded-full !bg-primary_pri10 h-[2em] w-[2em] flex items-center justify-center"}
                        >
                            <ArrowBackIosIcon />
                        </IconButton>
                        <VirtualizeSwipeableViews
                            index={activeStep}
                            onChangeIndex={handleChangeIndex}
                            slideRenderer={slideRenderer}
                            enableMouseEvents
                            className={"rounded-[20px] border-2 border-primary_pri50 mx-2 w-[20em] h-[25em] overflow-hidden"}
                        />
                        <IconButton
                            onClick={handleNext}
                            disabled={activeStep === images.length - 1}
                            className={"!rounded-full !bg-primary_pri10 h-[2em] w-[2em] flex items-center justify-center"}
                        >
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
            <Box flex={2} p={3}>
                <Typography className={"!text-xl !font-semibold !my-5"}>
                    Notice Details
                </Typography>
                <div className={"flex gap-10 px-5"}>
                    <div className={"flex flex-col w-[50%] gap-y-5"}>
                        <div className={"space-y-2"}>
                            <div className={"font-semibold"}>Name:</div>
                            <div className={"ms-10"}>{notice.forename} {notice.name}</div>
                        </div>
                        <div className={"space-y-2"}>
                            <div className={"font-semibold"}>Charges:</div>
                            <div className={"ms-10 text-justify"}>{notice.arrest_warrants.map(warrant => warrant.charge).join(', ')}</div>
                        </div>
                    </div>
                    <div className={"flex flex-col w-[50%] gap-y-5"}>
                        <div className={"space-y-2"}>
                            <div className={"font-semibold"}>Place of Birth:</div>
                            <div className={"ms-10"}>{notice.place_of_birth}</div>
                        </div>
                        <div className={"space-y-2"}>
                            <div className={"font-semibold"}>Date of Birth:</div>
                            <div className={"ms-10"}>{notice.date_of_birth}</div>
                        </div>
                    </div>
                </div>
            </Box>
            <div className={"mt-5 flex justify-center"}>
                <button className="border border-error_err70 text-error_err70 rounded-lg px-7 h-[42px] hover:bg-red-100" onClick={denyApplication}>
                    Match & Deny Application
                </button>
            </div>

        </div>
    );
}

export default NoticeDetails;
