// actions.js

export const bookRide = (bookingDetails) => {
  return {
      type: 'BOOK_RIDE',
      payload: {
          ...bookingDetails,
          selectedDate: bookingDetails.selectedDate.toISOString() // Ensure date is serialized
      }
  };
};
