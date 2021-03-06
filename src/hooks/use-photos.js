import { useState, useEffect, useContext } from 'react';
import UserContext from '../context/user';
import { getPhotos, getUserByUserId } from '../services/firebase';

const usePhotos = () => {
    const [photos, setPhotos ] = useState(null);
    const {
        user: { uid: userId}
    } = useContext(UserContext);


    useEffect(()=> {
        async function getTimeLinePhotos() {
            const {following} = await getUserByUserId(userId);
            let followedUserPhotos =[];

            if (following.length > 0){
                followedUserPhotos = await getPhotos(userId, following);
            }
        }   
        
        console.log(userId);

        if(userId) {
            getTimeLinePhotos();
        }
    }, []);


    return {}
    }
}

export default usePhotos;