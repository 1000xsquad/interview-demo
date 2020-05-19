import React from "react"
import { connect } from 'react-redux'
import moment from "moment"
import { Form, Input, Button, DatePicker, Row, Col } from "antd"
import { add_book_fun, update_book_submit } from '../../modules/book';
const dateFormat = 'YYYY/MM/DD';

class FormAddBook extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name_book: "",
            date_end: new Date(),
            name_author: "",
            date_for_read: "",
            imgUrl: "",
            id: undefined,
            newSub: false
        }


    }
    clear = () => {
        this.setState({
            ...this.state,
            name_book: "",
            date_end: new Date(),
            name_author: "",
            date_for_read: "",
            imgUrl: "",
            id: undefined,
        })
    }
    componentWillReceiveProps(nextProps) {

        nextProps.book.filter(b => b.editInfo).map(b => {
            this.setState({
                ...this.state,
                name_book: b.editInfo.name_book,
                date_end: new Date(b.editInfo.date_end),
                name_author: b.editInfo.name_author,
                date_for_read: b.editInfo.date_for_read,
                imgUrl: b.editInfo.imgUrl,
                id: b.editInfo.id
            })

        })


    }
    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.id !== undefined) {
            this.props.update_submit(this.state)

        } else {
            this.props.addBook(this.state)

        }

    }

    render() {

        return (
            <Form
                className="white-div mt pd"
                layout="inline" onSubmit={this.handleSubmit}>
                <Row>
                    <Col span={12}>
                        <Form.Item
                            label="ชื่อหนังสือ"
                            className="w-100"
                        >
                            <Input

                                value={this.state.name_book}
                                onChange={e => {
                                    const { value } = e.target
                                    this.setState({ ...this.state, name_book: value })
                                }} placeholder="กรุณาใส่รายชื่อหนังสือ" />
                        </Form.Item>
                        <Form.Item
                            className="w-100"

                            label="วันที่อ่านจบ"
                            name="name book"
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณาใส่วันที่อ่านจบ',
                                },
                            ]}
                        >
                            <DatePicker
                                onChange={e => {
                                    this.setState({ ...this.setState, date_end: e.format(dateFormat) })
                                }}
                                value={moment(this.state.date_end, dateFormat)} format={dateFormat} />
                            {/* <Input value={this.state.name_book} placeholder="กรุณาใส่วันที่อ่านจบ" /> */}
                        </Form.Item>
                        <Form.Item
                            className="w-100"

                            label="ชื่อคนเขียน"
                            name="name author book"
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณาใส่รายชื่อคนเขียน',
                                },
                            ]}
                        >
                            <Input value={this.state.name_author} onChange={e => {
                                const { value } = e.target
                                this.setState({ ...this.state, name_author: value })
                            }} placeholder="กรุณาใส่รายชื่อคนเขียน" />
                        </Form.Item></Col>
                    <Col span={12}><Form.Item
                        label="ระยะเวลาที่ให้ในการอ่าน"
                        name="date_for_read"
                        rules={[
                            {
                                required: true,
                                message: 'กรุณาใส่ระยะเวลาในการอ่าน',
                            },
                        ]}
                    >
                        <Input value={this.state.date_for_read} onChange={e => {
                            const { value } = e.target
                            this.setState({ ...this.state, date_for_read: value })
                        }} placeholder="กรุณาใส่ระยะเวลาในการอ่าน" />
                    </Form.Item>

                        <Form.Item
                            className="w-100"

                            label="รูปปกหนังสือ"
                            name="name book"
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณาใส่รูปปกหนังสือ',
                                },
                            ]}
                        >
                            <Input
                                value={this.state.imgUrl}
                                onChange={e => {
                                    const { value } = e.target
                                    this.setState({ ...this.state, imgUrl: value })
                                }} placeholder="รูปปกหนังสือ(url)" />
                        </Form.Item></Col>
                </Row>



                <Form.Item
                    className="w-100"
                >
                    <Button type="primary" htmlType="submit">Submit</Button>
                    <Button type="button" onClick={e => {
                        e.preventDefault()
                        this.clear()
                    }} htmlType="submit">Clear Input</Button>

                </Form.Item>
            </Form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBook: book => dispatch(add_book_fun(book)),
        update_submit: (book, index) => dispatch(update_book_submit(book, index))
    };
}

const mapState = (state) => ({
    book: state.book
})
const AddNewBookForm = connect(mapState, mapDispatchToProps)(FormAddBook)


export default AddNewBookForm