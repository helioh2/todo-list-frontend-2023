import { useState } from 'react';

/**
 * Hook que permite recuperar e armazenar dados do usuario (incluindo token de acesso) 
 * no localStorage (no browser)
 * @returns 
 */
function useUserData() {

    function getUserData() {
        const userData = JSON.parse(localStorage.getItem('userData'));
        return userData
    }

    const [userData, setUserData] = useState(getUserData());

    function saveUserData(userData) {
        localStorage.setItem('userData', JSON.stringify(userData));
        setUserData(userData);
    };

    function removeUserData() {
        localStorage.removeItem("userData");
        setUserData(null);
    }

    return {
        setUserData: saveUserData,
        userData,
        removeUserData
    }

}

export default useUserData;