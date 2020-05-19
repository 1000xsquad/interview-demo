
import AddNewBookForm from "./add-new-book"
import React from 'react'

import { Layout } from 'antd';
import ListAllBook from './list-book';
const { Content } = Layout;






const BookPage = () => {
    return (
        <Layout className="layout">
            <Content style={{ width: "60%", margin: "auto" }}>
                <AddNewBookForm></AddNewBookForm>
                <ListAllBook></ListAllBook>
            </Content>
        </Layout>
    )
}



export default BookPage
