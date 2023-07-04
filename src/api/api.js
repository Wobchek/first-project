import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "4cc1e653-c370-4c56-adee-c15518149fc3"},
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const usersAPI = {
    async getUsers(currentPage = 1, pagesCount = 10) {
            let response = await instance.get(`users?page=${currentPage}&count=${pagesCount}`)
            return response.data;
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
    },
    follow(id) {
        return instance.post(`follow/${id}`)
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
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    },
};