import axios from 'axios';

export const Feed = async () => {
    const HappyURL = 'http://localhost:8080/feed/list';
    return await axios.get(HappyURL);
};
