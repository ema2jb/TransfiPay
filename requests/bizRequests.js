import * as bizEndpoints from './biz'
import { createBizSchema } from '../FormValidations/biz.validate'
import cogoToast from 'cogo-toast'
import useLocalStorage from '../hooks/useLocalStorage'



const {setItem} = useLocalStorage()

export const getAllMyBizFunc = (dispatch, bizActions, page, limit)=>{
    //dispatch(bizActions.changeBizRequestState(true))
    bizEndpoints.getAllMyBizRequest(page, limit).then(({data:{data, meta}})=>{
        console.log(data)
        dispatch(bizActions.setAllMyBiz(data.result))
        //dispatch(bizActions.changeBizRequestState(false))
        //cogoToast.success(meta.message, { position: 'top-center' })
    }).catch(err=>{
        console.log(err)
        //dispatch(bizActions.changeBizRequestState(false))
        //cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })  
}

export const setActiveBizFunc = (dispatch, bizActions, bizId, role)=>{
    dispatch(bizActions.changeBizRequestState(true))
    bizEndpoints.getBizInfoRequest(bizId).then(({data:{data, meta}})=>{
        console.log(data)
        dispatch(bizActions.setActiveBiz({...data, role}))
        dispatch(bizActions.setUpdateBizInfo({...data, role}))
        setItem('activeBiz', {...data, role})
        dispatch(bizActions.changeBizRequestState(false))
        //cogoToast.success(meta.message, { position: 'top-center' })
    }).catch(err=>{
        console.log(err)
        //dispatch(bizActions.changeBizRequestState(false))
        //cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })  
}

export const acceptBizInvitationFunc = (inviteId)=>{
    //dispatch(bizActions.changeBizRequestState(true))
    bizEndpoints.acceptBizInvitationRequest(inviteId).then(({data:{data, meta}})=>{
        console.log(data)
        //dispatch(bizActions.changeBizRequestState(false))
        cogoToast.success(meta.message, { position: 'top-center' })
    }).catch(err=>{
        console.log(err)
        //dispatch(bizActions.changeBizRequestState(false))
        //cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })  
}

export const getBizUsersFunc = (dispatch, bizActions, bizId)=>{
    bizEndpoints.getBizUsersRequest(bizId)
    .then(({data:{data, meta}})=>{
        console.log(data)
        dispatch(bizActions.setActiveBizUsers(data.result))
        //dispatch(bizActions.changeBizRequestState(false))
        //cogoToast.success(meta.message, { position: 'top-center' })
    }).catch(err=>{
        console.log(err)
        //dispatch(bizActions.changeBizRequestState(false))
        //cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })  
}

export const getUserPendingInvitesFunc = (dispatch, bizActions, page, limit)=>{
    bizEndpoints.getUserPendingInvitesRequest(page, limit)
    .then(({data:{data, meta}})=>{
        console.log(data)
        dispatch(bizActions.setAllMyInvites(data.result))
        //dispatch(bizActions.changeBizRequestState(false))
        //cogoToast.success(meta.message, { position: 'top-center' })
    }).catch(err=>{
        console.log(err)
        //dispatch(bizActions.changeBizRequestState(false))
        //cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })  
}

export const inviteUserFunc = (dispatch, bizActions, inviteeDetails, bizId)=>{
    dispatch(bizActions.changeBizRequestState(true))
    bizEndpoints.inviteUserToBizRequest(bizId, inviteeDetails)
        .then(({data:{data, meta}})=>{
            console.log(data)
            dispatch(bizActions.changeBizRequestState(false))
            cogoToast.success(meta.message, { position: 'top-center' })
    }).catch(err=>{
        console.log(err)
        dispatch(bizActions.changeBizRequestState(false))
        cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })
}

export const reAssignRoleFunc = (dispatch, bizActions, bizId, userDetails)=>{
    dispatch(bizActions.changeBizRequestState(true))
    bizEndpoints.reAssignRoleRequest(bizId, userDetails)
        .then(({data:{data, meta}})=>{
            console.log(data)
            dispatch(bizActions.changeBizRequestState(false))
            cogoToast.success(meta.message, { position: 'top-center' })
    }).catch(err=>{
        console.log(err)
        dispatch(bizActions.changeBizRequestState(false))
        cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })
}

export const deleteUserFromBizFunc = (dispatch, bizActions, bizId, userId)=>{
    dispatch(bizActions.changeBizRequestState(true))
    bizEndpoints.deleteUserFromBizRequest(bizId, userId)
    .then(({data:{data, meta}})=>{
        console.log(data)
        dispatch(bizActions.changeBizRequestState(false))
        cogoToast.success(meta.message, { position: 'top-center' })
        }).catch(err=>{
            console.log(err)
            dispatch(bizActions.changeBizRequestState(false))
            cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
        })
}

export const updateBizInfoFunc = (dispatch, bizActions, data) =>{
    dispatch(bizActions.changeBizRequestState(true))
    const bizId = data.id
    const {id, verified, tierVerification,createdAt, updatedAt, role, image, business_member, ...bizInfo} = data
    bizEndpoints.updateBizInfoRequest(bizId, bizInfo)
    .then(({data:{data, meta}})=>{
        console.log(data)
        dispatch(bizActions.changeBizRequestState(false))
        cogoToast.success(meta.message, { position: 'top-center' })
        bizEndpoints.getBizInfoRequest(bizId).then(({data:{data, meta}})=>{
            console.log(data)
            dispatch(bizActions.setActiveBiz({...data, role}))
            setItem('activeBiz', {...data, role})
            //dispatch(bizActions.changeBizRequestState(false))
            //cogoToast.success(meta.message, { position: 'top-center' })
        }).catch(err=>{
            console.log(err)
            //dispatch(bizActions.changeBizRequestState(false))
            //cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
        })  
    }).catch(err=>{
        console.log(err)
        dispatch(bizActions.changeBizRequestState(false))
        cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })
}


export const updateBizLogoFunc = (dispatch, bizActions, bizId, imagePreview)=>{
    const formData = new FormData()
    formData.append('image', imagePreview)
    bizEndpoints.updateBizImageRequest(bizId, formData)
    .then(({data:{data,meta}})=>{
        console.log(data)
        dispatch(bizActions.changeBizRequestState(false))
        cogoToast.success(meta.message, { position: 'top-center' })   
    })
    .catch(err=>{
        console.log(err)
        dispatch(bizActions.changeBizRequestState(false))
        cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })    
}

export const uploadDocFrontFunc = (dispatch, bizActions, bizId, docType, imagePreview)=>{
    const formData = new FormData()
    formData.append('document', imagePreview)
    bizEndpoints.uploadDocFrontRequest(bizId, docType, formData)
    .then(({data:{data,meta}})=>{
        console.log(data)
        dispatch(bizActions.changeBizRequestState(false))
        cogoToast.success(meta.message, { position: 'top-center' })   
    })
    .catch(err=>{
        console.log(err)
        dispatch(bizActions.changeBizRequestState(false))
        cogoToast.error(err.response.data.meta.message, { position: 'top-center'})
    })    
}


export const uploadDocBackFunc = (dispatch, bizActions, bizId, docType, imagePreview)=>{
    const formData = new FormData()
    formData.append('document', imagePreview)
    bizEndpoints.uploadDocBackRequest(bizId, docType, formData)
    .then(({data:{data,meta}})=>{
        console.log(data)
        dispatch(bizActions.changeBizRequestState(false))
        cogoToast.success(meta.message, { position: 'top-center' })   
    })
    .catch(err=>{
        console.log(err)
        dispatch(bizActions.changeBizRequestState(false))
        cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })    
}

export const uploadProofOfAddressFunc = (dispatch, bizActions, bizId, imagePreview)=>{
    const formData = new FormData()
    formData.append('document', imagePreview)
    bizEndpoints.uploadAddressProofRequest(bizId, formData)
    .then(({data:{data,meta}})=>{
        console.log(data)
        dispatch(bizActions.changeBizRequestState(false))
        cogoToast.success(meta.message, { position: 'top-center' })   
    })
    .catch(err=>{
        console.log(err)
        dispatch(bizActions.changeBizRequestState(false))
        cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })    
}

export const tier1Func = (dispatch, bizActions,bizId, data)=>{
    dispatch(bizActions.changeBizRequestState(true))
    bizEndpoints.tier1Request(bizId, data).then(({data:{data, meta}})=>{
        console.log(data)
        dispatch(bizActions.changeBizRequestState(false))
        cogoToast.success(meta.message, { position: 'top-center' })
        dispatch(bizActions.resetBizInfo())
        //getAllMyBizFunc(dispatch, bizActions, 1, 5)
    }).catch(err=>{
        console.log(err)
        dispatch(bizActions.changeBizRequestState(false))
        cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })
                
}

export const tier2Func = (dispatch, bizActions,bizId, data)=>{
    dispatch(bizActions.changeBizRequestState(true))
    bizEndpoints.tier2Request(bizId, data).then(({data:{data, meta}})=>{
        console.log(data)
        dispatch(bizActions.changeBizRequestState(false))
        cogoToast.success(meta.message, { position: 'top-center' })
        dispatch(bizActions.resetBizInfo())
        //getAllMyBizFunc(dispatch, bizActions, 1, 5)
    }).catch(err=>{
        console.log(err)
        dispatch(bizActions.changeBizRequestState(false))
        cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })
                
}


export const createBizFunc = (dispatch, bizActions, createBiz, UIActions)=>{
    dispatch(bizActions.changeBizRequestState(true))
    createBizSchema.validate(createBiz)
        .then((valid)=>{
            if(valid){
                dispatch(bizActions.changeBizRequestState(true))
                bizEndpoints.createBizRequest(createBiz).then(({data:{data, meta}})=>{
                    console.log(data)
                    dispatch(bizActions.changeBizRequestState(false))
                    cogoToast.success(meta.message, { position: 'top-center' })
                    dispatch(bizActions.resetBizInfo())
                    dispatch(UIActions.changeBizUiState('none'))
                    //getAllMyBizFunc(dispatch, bizActions, 1, 5)
                }).catch(err=>{
                   console.log(err)
                   dispatch(bizActions.changeBizRequestState(false))
                   cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
                })
                
            }
        })
        .catch((err) => {
			console.log(err);
            if(err.errors){
                cogoToast.error(err.errors[0], { position: 'top-center' });
            }
		  });
}

export const getAllInvites = ()=>{

}