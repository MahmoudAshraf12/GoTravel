import axios from "axios";

// https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary

export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
    try {
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
        {
            params: {
                bl_latitude: bl_lat ? bl_lat : "25.15543993776612",
                tr_latitude: tr_lat ? tr_lat : "25.41257834546226",
                bl_longitude: bl_lng ? bl_lng : "51.39587210719369",
                tr_longitude: tr_lng ? tr_lng : "51.62812119686502",
                restaurant_tagcategory_standalone: '10591',
                restaurant_tagcategory: '10591',
                limit: '30',
                currency: 'USD',
                open_now: 'false',
                lunit: 'km',
                lang: 'en_US'
            },
            headers: {
                'X-RapidAPI-Key': 'YOUR_API_KEY',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        }
        )
        return data; 
    } catch (error) {
        return null
    }
}