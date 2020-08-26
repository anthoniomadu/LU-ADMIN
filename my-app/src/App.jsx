import React from 'react';
import { Admin, Resource,  } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { PostList, PostEdit, PostCreate } from './posts';
import { UserList, UserEdit, UserCreate } from './users';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import MyLoginPage from './MyLoginPage';
import MyLogoutButton from './MyLogoutButton';

import myDataProvider from './dataProvider';

import usersConfiguration from './users';

import { Authenticated,fetchUtils } from 'react-admin';
import { withRouter, Route } from 'react-router-dom';


import simpleRestProvider from 'ra-data-simple-rest';
import MyPage from './MyPage';

// const dataProvider = myDataProvider('http://localhost:1337/users');

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
// const App = () => <Admin dataProvider={dataProvider} />;
const App = () => (
//    <Admin customRoutes={customRoutes} loginPage={MyLoginPage} dashboard={Dashboard} logoutButton={MyLogoutButton} dataProvider={dataProvider} authProvider={authProvider}>
//   {/* <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}> */}
//         <Resource name="users" list={UserList} />
//         <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
//         <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
//         <Resource name="users" list={UserList} icon={UserIcon} />
//    </Admin>
        <Admin
        dataProvider={dataProvider}
        authProvider={authProvider}
        >
        {permissions => [
            // Restrict access to the edit and remove views to admin only
            <Resource
                name="customers"
                list={UserList}
                edit={permissions === 'admin' ? UserEdit : null}
                icon={PostIcon}
            />,
            // Only include the categories resource for admin users
            permissions === 'admin'
                ? <Resource name="categories" list={PostList} edit={PostEdit} icon={PostIcon} />
                : null,
        ]}
        </Admin>

);

export default App;
