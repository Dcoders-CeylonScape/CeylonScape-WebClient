import { interpolApi } from "./api"


// check user has any red notices

const redNoticeCheck = async (forename, lastName) => {
    try{

        const response = await interpolApi.get('/red', {
            params: {
                name: lastName,
                forename: forename,
            }
        })
        console.log("notices", response.data._embedded.notices)
        console.log("notices", response.data._embedded.notices.length > 0)
        return response.data._embedded.notices.length > 0

    }
    catch(error){
        console.error('Failed to fetch data:', error);
    }
}

// Check user has any yellow notices

const yellowNoticeCheck = async (forename, lastName) => {
    try{

        const response = await interpolApi.get('/yellow', {
            params: {
                name: lastName,
                forename: forename,
            }
        })
        
        return response.data._embedded.notices.length > 0

    }
    catch(error){
        console.error('Failed to fetch data:', error);
    }
}


export { redNoticeCheck, yellowNoticeCheck }