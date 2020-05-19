// ต้องมี field ดังต่อไปนี้ ชื่อ วันที่อ่านจบ ชื่อคนเขียน ระยะเวลาที่ให้ในการอ่าน รูปปก(อาจเก็บเป็น url)


const ADD_BOOK = "book/ADD_BOOK"
const DELETE_BOOK = "book/DELETE_BOOK"
const UPDATE_BOOK = "book/UPDATE_BOOK"
const UPDATE_BOOK_SUBMIT = "book/UPDATE_BOOK_SUBMIT"

const initialState = []
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOK:
            return [...state, action.payload]
        case DELETE_BOOK:
            state.splice(action.payload, 1)
            return [...state]
        case UPDATE_BOOK:

            return [...state, { editInfo: action.payload }]

        case UPDATE_BOOK_SUBMIT:
            state[action.payload.id] = {
                ...action.payload
            }
            return [...state]
        default:
            return state
    }
}

export const add_book_fun = (new_book) => dispatch => {
    dispatch({
        type: ADD_BOOK,
        payload: new_book
    })
}
export const delete_book = (index) => dispatch => {
    dispatch({
        type: DELETE_BOOK,
        payload: index
    })
}

export const update_book = (book, index) => dispatch => {
    dispatch({
        type: UPDATE_BOOK, payload: {
            ...book, id: index
        }
    })
}

export const update_book_submit = (book) => dispatch => {
    dispatch({
        type: UPDATE_BOOK_SUBMIT,
        payload: book
    })
}