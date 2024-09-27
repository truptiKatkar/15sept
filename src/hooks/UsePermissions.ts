
import { useEffect, useState } from 'react';
import { checkPermissions } from '../utils/PermissionsUtils';

const permissionsCache: { [key: string]: boolean | null } = {};

const usePermissions = (userId: string, action: string) => {
    const [hasPermission, setHasPermission] = useState<boolean | null>(() => {
        const cacheKey = `${userId}-${action}`;
        return permissionsCache[cacheKey] ?? null;
    });
    const [loading, setLoading] = useState<boolean>(hasPermission === null);

    useEffect(() => {
        const fetchPermissions = async () => {
            const cacheKey = `${userId}-${action}`;

            if (permissionsCache[cacheKey] !== undefined) {
                setHasPermission(permissionsCache[cacheKey]);
                setLoading(false);
                return;
            }

            const permissionGranted = await checkPermissions(userId, action);
            permissionsCache[cacheKey] = permissionGranted;
            setHasPermission(permissionGranted);
            setLoading(false);
        };

        fetchPermissions();
    }, [userId, action]);

    return { hasPermission, loading };
};

export default usePermissions;
