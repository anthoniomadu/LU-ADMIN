// in src/MyPage.js
import * as React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { usePermissions } from 'react-admin';

const MyPage = () => {
    const { loaded, permissions } = usePermissions();
    return loaded ? (
        <Card>
            <CardContent>Lorem ipsum sic dolor amet...</CardContent>
            {permissions === 'admin' &&
                <CardContent>Sensitive data</CardContent>
            }
        </Card>
    ): null;
}

export default MyPage;