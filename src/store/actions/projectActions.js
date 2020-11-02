export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        const profile = getState().firebase.profile
        const userUid =  getState().firebase.auth.uid

        firestore.collection('projects').add({
            ...project,
            authorFirtsName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: userUid,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_PROJECT', project})
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err})
        })
    }
}