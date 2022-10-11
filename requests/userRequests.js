import * as userEndpoints from './user'
import cogoToast from 'cogo-toast'
import useLocalStorage from '../hooks/useLocalStorage'



const {setItem} = useLocalStorage()

export const getUserDetailsFunc = (dispatch, userActions)=>{
    userEndpoints.getUserProfileRequest().then(({data:{data, meta}})=>{
        console.log(data)
        dispatch(userActions.setUserDetails(data))
        //cogoToast.success(meta.message, { position: 'top-center' })
    }).catch(err=>{
        console.log(err)
        //cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })  
}

export const updateUserInfoFunc = (dispatch, userActions, userDetails) =>{
    dispatch(userActions.changeUserRequestState(true))
    const {email, id, userId, ...userInfo} = userDetails
    userEndpoints.updateUserProfileRequest(userInfo)
    .then(({data:{data, meta}})=>{
        dispatch(userActions.changeUserRequestState(false))
        dispatch(userActions.setUserDetails(data.result))
        cogoToast.success(meta.message, { position: 'top-center' })
    }).catch(err=>{
        console.log(err)
        dispatch(userActions.changeUserRequestState(false))
        cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })
}


export const changeEmailFuncs = (dispatch, userActions, value, otpId, otpIdHandler, emailStepHandler, valueHandler)=>{
    dispatch(userActions.changeUserRequestState(true))
    userEndpoints.changeEmailRequest({email:value})
    .then(({data:{data, meta}})=>{
        dispatch(userActions.changeUserRequestState(false))
        otpIdHandler(data.otpId)
        emailStepHandler("step2")
        valueHandler()
        cogoToast.success(meta.message, { position: 'top-center' })
    }).catch(err=>{
        console.log(err)
        dispatch(userActions.changeUserRequestState(false))
        cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })
}

export const changeEmailOtpFunc = (dispatch, userActions, value, otpId, otpIdHandler, emailStepHandler, valueHandler)=>{
    dispatch(userActions.changeUserRequestState(true))
    userEndpoints.changeEmailOtpRequest({otpId:otpId, otpCode:value})
    .then(({data:{data, meta}})=>{
        dispatch(userActions.changeUserRequestState(false))
        otpIdHandler(data.otpId)
        emailStepHandler("step3")
        valueHandler()
        cogoToast.success(meta.message, { position: 'top-center' })
    }).catch(err=>{
        console.log(err)
        dispatch(userActions.changeUserRequestState(false))
        cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })
}

export const confirmEmailOtpFunc = (dispatch, userActions, value, otpId, otpIdHandler, emailStepHandler, valueHandler)=>{
    dispatch(userActions.changeUserRequestState(true))
    userEndpoints.confirmEmailOtpRequest({otpId:otpId, otpCode:value})
    .then(({data:{data, meta}})=>{
        dispatch(userActions.changeUserRequestState(true))
        otpIdHandler(data.otpId)
        emailStepHandler('step4')
        valueHandler()
        cogoToast.success(meta.message, { position: 'top-center' })
    }).catch(err=>{
        console.log(err)
        dispatch(userActions.changeUserRequestState(false))
        cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })
}

export const changePasswordFunc = (dispatch, userActions, data, closeModal) =>{
    dispatch(userActions.changeUserRequestState(true))
    userEndpoints.changePasswordRequest(data)
    .then(({data:{data, meta}})=>{
        dispatch(userActions.changeUserRequestState(false))
        closeModal()
        cogoToast.success(meta.message, { position: 'top-center' })
    }).catch(err=>{
        console.log(err)
        dispatch(userActions.changeUserRequestState(false))
        cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })
}

export const logoutFunc = () =>{
    userEndpoints.logoutRequest()
    .then(({data:{data, meta}})=>{
        cogoToast.success(meta.message, { position: 'top-center' })
    }).catch(err=>{
        console.log(err)
        cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })
}

