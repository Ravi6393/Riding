// reducer.js

const initialState = {
    bookings: []
};

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOK_RIDE':
            return {
                ...state,
                bookings: [
                    ...state.bookings,
                    {
                        ...action.payload,
                        selectedDate: new Date(action.payload.selectedDate) // Deserialize date
                    }
                ]
            };
        default:
            return state;
    }
};

export default bookingReducer;
