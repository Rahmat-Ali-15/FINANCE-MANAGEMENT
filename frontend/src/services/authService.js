import { api } from './api';

export const authService = {
    signupUser(userData){
        return api.post("/user/signup", userData);
    }
}