const initialState = {
    selectableUsers: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_USER':
            return state.selectableUsers.map(selectableUser => {
                return selectableUser.index === action.index
                    ? { ...selectableUser, isSelected: !selectableUser.isSelected }
                    : selectableUser
            });
        default:
            return state;
    }
}
