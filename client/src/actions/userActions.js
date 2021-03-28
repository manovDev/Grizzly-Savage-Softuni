
import { signUp as singUpService } from '../services/userService';

export const signUp = async (data) => {
    
    const response = await singUpService(data);
    const responseJSON = await response.json();

    if (responseJSON.error) {
        return { error: responseJSON.error };
    } else {
        return responseJSON;
    }
}
