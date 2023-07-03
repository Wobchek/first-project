export const updateObjectInArray = (items, itemId, objPropsName, newObjProps) => {
    return items.map(u => {
        if (u[objPropsName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
};

//     users: state.users.map(u => {
//     if (u.id === action.userId) {
//         return {...u, followed: true}
//     }
//     return u;
// })