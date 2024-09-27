import axios from "axios";

interface PermissionResponse {
    hasPermission: boolean;
}

const API_URL = 'http://localhost:5173/admin/permissions';

export const checkPermissions = async (userId: string, action: string): Promise<boolean> => {
    try {
        const response = await axios.get<PermissionResponse>(`${API_URL}`, {
            params: { userId, action },
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response.data.hasPermission;
    } catch (error) {
        console.error('Error checking permissions:', error);
        return false; 
    }
};