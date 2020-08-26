import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';
import { Filter, TextInput,TabbedForm, FormTab, ShowButton, EditButton, Edit, SimpleForm, Create  } from 'react-admin';




export const UserCreate = ({ permissions, ...props }) =>
    <Create {...props}>
        <SimpleForm
            defaultValue={{ role: 'user' }}
        >
            <TextInput source="name" validate={[require()]} />
            {permissions === 'admin' &&
                <TextInput source="role" validate={[require()]} />}
        </SimpleForm>
    </Create>;

export const UserEdit = ({ permissions, ...props }) =>
<Edit  {...props}>
{/* title={<UserTitle />} */}
    <TabbedForm defaultValue={{ role: 'user' }}>
        <FormTab label="user.form.summary">
            {permissions === 'admin' && <TextInput disabled source="id" />}
            <TextInput source="name" validate={require()} />
        </FormTab>
        {permissions === 'admin' &&
            <FormTab label="user.form.security">
                <TextInput source="role" validate={require()} />
            </FormTab>}
    </TabbedForm>
</Edit>;
const UserFilter = ({ permissions, ...props }) =>
<Filter {...props}>
    <TextInput
        label="user.list.search"
        source="q"
        alwaysOn
    />
    <TextInput source="name" />
    {permissions === 'admin' && <TextInput source="role" />}
</Filter>;

export const UserList = ({ permissions, ...props }) =>
<List
    {...props}
    filters={props => <UserFilter permissions={permissions} {...props} />}
>
    <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        {permissions === 'admin' && <TextField source="role" />}
        {permissions === 'admin' && <EditButton />}
        <ShowButton />
    </Datagrid>
</List>;