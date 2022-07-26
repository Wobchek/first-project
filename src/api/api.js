import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "4cc1e653-c370-4c56-adee-c15518149fc3"},
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const usersAPI = {
    getUsers(currentPage = 1, pagesCount = 10) {
        return instance.get(`users?page=${currentPage}&count=${pagesCount}`)
            .then(response => {
                return response.data;
            });
    },

    unfollow(id) {
        return instance.delete(`follow/${id}`)
    },

    follow(id) {
        return instance.post(`follow/${id}`)
    },

    getUserProfile(userId) {
        console.log('Obsolete method. Please use profileAPI object.')
        return profileAPI.getUserProfile(userId)
    },
};

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatusProfile(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatusProfile(status) {
        return instance.put(`profile/status`, {
            status: status,
        })
    },
};

export const authAPI = {

    getAuth() {
        return instance.get(`auth/me`)
    },
};