import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers:{
            Authorization: 'Client-ID 2sXSCysDVMe_IqDjCkEulnCA-iukiMF7xtzMKdev97Q'
        },
        params:{
            query: term
        }
    });

    return response.data.results;
};

export default searchImages;