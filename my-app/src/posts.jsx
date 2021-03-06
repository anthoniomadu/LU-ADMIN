import React from 'react';
// import { List, Datagrid, TextField, ReferenceField } from 'react-admin';
import {  Datagrid, TextField, ReferenceField, EditButton, SimpleList } from 'react-admin';
import { Filter, ReferenceInput, SelectInput, TextInput, List, Responsive } from 'react-admin';
import { Edit, SimpleForm, Create } from 'react-admin';

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
 };


 const PostFilter = (props) => (
     
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const PostList = props => (
    <List filters={<PostFilter />} {...props}>
       {/* <Datagrid rowClick="edit"> */}
       {/* <Datagrid>
          <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
           <TextField source="id" />
            <TextField source="title" /> */}
           {/* <TextField source="body" /> */}
          {/* <EditButton />
        </Datagrid> */}
        {/* <SimpleList
            primaryText={record => record.title}
            secondaryText={record => `${record.views} views`}
            tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
        /> */}
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => `${record.views} views`}
                    tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="id" />
                    <ReferenceField label="User" source="userId" reference="users">
                        <TextField source="name" />
                    </ReferenceField>
                    <TextField source="title" />
                    <TextField source="body" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

export const PostEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
           {/* <DisabledInput source="id" /> */}
            <ReferenceInput source="userId" reference="users">
{/*                <SelectInput optionText="id" /> */}
               <SelectInput optionText="name" />
            </ReferenceInput>
           <TextInput source="id" />
            <TextInput source="title" />
           <TextInput source="body" />
           {/* <LongTextInput source="body" /> */}
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            {/* <LongTextInput source="body" /> */}
        </SimpleForm>
    </Create>
);

