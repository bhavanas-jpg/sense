export const initialAddressState = {
  addressList: [
    {
      id: new Date().getTime().toString(36) + new Date().getUTCMilliseconds(),
      name: "Bhavana",
      street: "#78, A block, Rathnagiri Nagar",
      city: "Shimoga",
      state: "Karnataka",
      country: "India",
      pincode: "512345",
      phone: "1234567890",
    },
  ],
  selectedId: null,
  selectedAddress: {
    id: new Date().getTime().toString(36) + new Date().getUTCMilliseconds(),
    name: "Bhavana",
    street: "#78, A block, Rathnagiri Nagar",
    city: "Shimoga",
    state: "Karnataka",
    country: "India",
    pincode: "512345",
    phone: "1234567890",
  },
  editIndex: null,
};

export const addressListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ADDRESS":
      if (state.editIndex !== null && state.addressList) {
        const editedAddress = state.addressList.map((item) =>
          item.id === state.editIndex ? action.payload : item
        );

        return {
          ...state,
          addressList: editedAddress,
          editIndex: null,
        };
      }
      return {
        ...state,
        addressList: [
          ...state.addressList,
          {
            id:
              new Date().getTime().toString(36) +
              new Date().getUTCMilliseconds(),
            ...action.payload,
          },
        ],
      };

    case "EDIT_ADDRESS":
      return {
        ...state,
        editIndex: action.payload,
      };

    case "DELETE_ADDRESS":
      const deletedAddress = state.addressList.filter(
        ({ id }) => id !== action.payload
      );
      return {
        ...state,
        addressList: [...deletedAddress],
      };
    case "SELECTED_ADDRESS":
      const selectedAddress = state.addressList.find(
        ({ id }) => id === action.payload
      );
      return {
        ...state,
        selectedAddress,
        selectedId: action.payload,
      };

    default:
      return state;
  }
};
