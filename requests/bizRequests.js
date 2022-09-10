import * as bizEndpoints from './biz'
import { createBizSchema } from '../FormValidations/biz.validate'
import cogoToast from 'cogo-toast'
import { bizActions } from '../Store/biz-slice'

export const getAllMyBizFunc = (dispatch, bizActions, page, limit)=>{
    dispatch(bizActions.changeBizRequestState(true))
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

export const setActiveBizFunc = (dispatch, bizActions, bizId)=>{
    dispatch(bizActions.changeBizRequestState(true))
    bizEndpoints.getBizInfoRequest(bizId).then(({data:{data, meta}})=>{
        console.log(data)
        dispatch(bizActions.setActiveBiz(data))
        //dispatch(bizActions.changeBizRequestState(false))
        //cogoToast.success(meta.message, { position: 'top-center' })
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

export const inviteUserFunc = (dispatch, bizActions, inviteeDetails, bizId)=>{
    dispatch(bizActions.changeBizRequestState(true))
    bizEndpoints.inviteUserToBizRequest(bizId, {...inviteeDetails, invitedUserId:inviteeId})
        .then(({data:{data}})=>{
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
        .then(({data:{data}})=>{
            console.log(data)
            dispatch(bizActions.changeBizRequestState(false))
            cogoToast.success(meta.message, { position: 'top-center' })
    }).catch(err=>{
        console.log(err)
        dispatch(bizActions.changeBizRequestState(false))
        cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })
}


export const createBizFunc = (dispatch, bizActions, createBiz)=>{
    createBizSchema.validate(createBiz)
        .then((valid)=>{
            if(valid){
                dispatch(bizActions.changeBizRequestState(true))
                bizEndpoints.createBizRequest(createBiz).then(({data:{data, meta}})=>{
                    console.log(data)
                    dispatch(bizActions.changeBizRequestState(false))
                    cogoToast.success(meta.message, { position: 'top-center' })
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