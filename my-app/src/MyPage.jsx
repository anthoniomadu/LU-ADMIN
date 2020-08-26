import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title, WithPermissions } from 'react-admin';
import { withRouter } from 'react-router-dom';
import { route } from 'react-dom';

const MyPage = ({ permissions }) => (
    <Card>
        <Title title="My custom page" />
        <CardContent>Lorem ipsum sic dolor amet...</CardContent>
        {permissions === 'admin'
            ? <CardContent>Sensitive data</CardContent>
            : null
        }
    </Card>
)
const MyPageWithPermissions = ({ location, match }) => (
    <WithPermissions
        authParams={{ key: match.path, params: route.params }}
        // location is not required but it will trigger a new permissions check if specified when it changes
        location={location}
        render={({ permissions }) => <MyPage permissions={permissions} /> }
    />
);

export default MyPageWithPermissions;

