import * as requests from '../../requests';

export function loginUser(user) {
    return (dispatch) => {
        dispatch({type: 'LOADING_USER'})
        requests.login(user)
        .then(obj => {
            if (obj.error) {
                
            }
        })
    }
}