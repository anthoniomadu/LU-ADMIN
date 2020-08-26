// import React from 'react';
// import { Admin, Resource } from 'react-admin';
// import jsonServerProvider from 'ra-data-json-server';
// import { PostList, PostEdit, PostCreate } from './posts';
// import { UserList, UserEdit, UserCreate } from './users';
// import PostIcon from '@material-ui/icons/Book';
// import UserIcon from '@material-ui/icons/Group';
// import Dashboard from './Dashboard';
// import authProvider from './authProvider';
// import MyLoginPage from './MyLoginPage';
// import MyLogoutButton from './MyLogoutButton';
// // import dataProvider from './dataProvider';
// import myDataProvider from './dataProvider';

// import usersConfiguration from './users';

// import { Authenticated,fetchUtils } from 'react-admin';
// import { withRouter, Route } from 'react-router-dom';


// import simpleRestProvider from 'ra-data-simple-rest';
// import MyPage from './MyPage';

// // const dataProvider = myDataProvider('http://localhost:1337/users');

// // const httpClient = (url, options = {}) => {
// //     if (!options.headers) {
// //         options.headers = new Headers({ Accept: 'application/json' });
// //     }
// //     const token = localStorage.getItem('token');
// //     options.headers.set('Authorization', `Bearer ${token}`);
// //     return fetchUtils.fetchJson(url, options);
// // }
// // const dataProvider = simpleRestProvider('http://localhost:3000', httpClient);


// const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
// // const App = () => <Admin dataProvider={dataProvider} />;
// // const App = () => (
// //    <Admin customRoutes={customRoutes} loginPage={MyLoginPage} dashboard={Dashboard} logoutButton={MyLogoutButton} dataProvider={dataProvider} authProvider={authProvider}>
// //    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
// const App = () => (
//         <Admin dataProvider={dataProvider} >; 
//         <Resource name="users" list={UserList} />
//         <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
//         <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
//         <Resource name="users" list={UserList} icon={UserIcon} />
//         </Admin>
//         // <Admin
//         // dashboard={Dashboard}
//         // dataProvider={dataProvider}
//         // authProvider={authProvider}
//         // >
//         // {permissions => [
//         //     // Restrict access to the edit and remove views to admin only
//         //     <Resource
//         //         name="customers"
//         //         list={UserList}
//         //         edit={permissions === 'admin' ? UserEdit : null}
//         //         icon={PostIcon}
//         //     />,
//         //     // Only include the categories resource for admin users
//         //     permissions === 'admin'
//         //         ? <Resource name="categories" list={PostList} edit={PostEdit} icon={PostIcon} />
//         //         : null,
//         // ]}
//         // </Admin>

// );

// export default App;


// in src/App.js
import React from 'react';
import { Admin, Resource,ListGuesser } from 'react-admin';
import { UserList } from './users';
import jsonServerProvider from 'ra-data-json-server';
import { PostList, PostEdit, PostCreate } from './posts';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';


const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
       <Admin dataProvider={dataProvider}>
            <Resource name="users" list={UserList} icon={UserIcon}  />
            <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}  />
        </Admin>
    );
export default App;