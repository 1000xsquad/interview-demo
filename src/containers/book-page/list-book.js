import React from 'react'
import { connect } from 'react-redux'
import { Avatar, List, Icon } from "antd";
import { delete_book, update_book } from '../../modules/book';
class ListBook extends React.Component {
    constructor(props) {
        super(props)

    }
    deleteThisElement = (item) => {
        this.props.deleteFunc(item)
    }
    render() {
        return <div className="white-div mt">
            <div className="scroll">
                <List
                    dataSource={this.props.books}
                    renderItem={(item, ind) => (!item.editInfo ? <List.Item key={ind}>

                        <List.Item.Meta
                            avatar={
                                <Avatar src={item.imgUrl} />
                            }
                            title={<a href="https://ant.design">{`ช่อหนังสือ: ${item.name_book}`}</a>}
                            description={`แต่งโดย: ${item.name_author} เวลาที่อ่ารได้: ${item.date_for_read} อ่านได้ถึง: ${item.date_end}`}
                        />
                        <div>

                            <Icon type="edit" style={{ "cursor": "pointer", marginRight: "10px" }} onClick={e => {
                                e.preventDefault()
                                this.props.editFunc(item, ind)
                            }} />

                            <Icon style={{ "cursor": "pointer", marginRight: "10px" }} onClick={e => {
                                e.preventDefault()
                                this.deleteThisElement(ind)
                            }} type="close" />

                        </div>
                    </List.Item> : <></>
                    )}
                >

                </List>
            </div>
        </div>
    }
}

const mapStateToProps = state => {
    return { books: state.book };
};

function mapDispatchToProps(dispatch) {
    return {
        deleteFunc: index => dispatch(delete_book(index)),
        editFunc: (book, index) => dispatch(update_book(book, index))
    };
}

const ListAllBook = connect(mapStateToProps, mapDispatchToProps)(ListBook)

export default ListAllBook