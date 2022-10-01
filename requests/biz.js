import axios from "axios"
import {
    createBiz,
    updateBizImage,
    getBizInfo,
    updateBizInfo,
    getBizUsers,
    getAllMyBiz,
    inviteUserToBiz,
    reAssignRole,
    deleteUserFromBiz,
    getUserPendingInvites,
    acceptBizInvitation,
    rejectBizInvitation,
    uploadDocFront,
    uploadDocBack,
    uploadAddressProof,
    tier1,
    tier2
    } from './endpoints'

    import useLocalStorage from '../hooks/useLocalStorage';

    const {getItem} = useLocalStorage()

    const accessToken = getItem('accessToken')

    let token=""
    
    if(Boolean(accessToken)){
        token =  accessToken.token
    }

    console.log(token)

    axios.interceptors.request.use((config) => {
        config.headers['Authorization'] = `Bearer ${token}`;
        return config;
    });

    export const createBizRequest = async(_data) =>{
        const response = await  axios({
              method: "post",
              url: createBiz,
              data: _data,
          })
        return response
    }

    export const updateBizImageRequest = async(bizId, _data) =>{
        const response = await  axios({
              method: "put",
              url: updateBizImage(bizId),
              data: _data,
          })
        return response
    }

    export const getBizInfoRequest = async(bizId) =>{
        const response = await  axios({
              method: "get",
              url: getBizInfo(bizId)
          })
        return response
    }

    export const updateBizInfoRequest = async(bizId, _data) =>{
        const response = await  axios({
              method: "put",
              url: updateBizInfo(bizId),
              data: _data,
          })
        return response
    }

    export const getBizUsersRequest = async(bizId) =>{
        const response = await  axios({
              method: "get",
              url: getBizUsers(bizId)
          })
        return response
    }

    export const getAllMyBizRequest = async(page, limit) =>{
        const response = await  axios({
              method: "get",
              url: getAllMyBiz(page, limit)
          })
        return response
    }


    export const inviteUserToBizRequest = async(bizId, _data) =>{
        const response = await  axios({
              method: "post",
              url: inviteUserToBiz(bizId),
              data: _data,
          })
        return response
    }

    export const reAssignRoleRequest = async(bizId, _data) =>{
        const response = await  axios({
              method: "put",
              url: reAssignRole(bizId),
              data: _data,
          })
        return response
    }

    export const deleteUserFromBizRequest = async(bizId, userId) =>{
        const response = await  axios({
              method: "delete",
              url: deleteUserFromBiz(bizId, userId),
          })
        return response
    }

    export const getUserPendingInvitesRequest = async(page, limit) =>{
        const response = await  axios({
              method: "get",
              url: getUserPendingInvites(page, limit)
          })
        return response
    }

    export const acceptBizInvitationRequest = async(bizId) =>{
        const response = await  axios({
              method: "put",
              url: acceptBizInvitation(bizId)
          })
        return response
    }

    export const rejectBizInvitationRequest = async(bizId) =>{
        const response = await  axios({
              method: "put",
              url: rejectBizInvitation(bizId)
          })
        return response
    }

    export const uploadDocFrontRequest = async(bizId, docType, _data) =>{
        const response = await  axios({
              method: "put",
              url: uploadDocFront(bizId, docType),
              data: _data,
          })
        return response
    }

    export const uploadDocBackRequest = async(bizId, docType, _data) =>{
        const response = await  axios({
              method: "put",
              url: uploadDocBack(bizId, docType),
              data: _data,
          })
        return response
    }

    export const uploadAddressProofRequest = async(bizId, _data) =>{
        const response = await  axios({
              method: "put",
              url: uploadAddressProof(bizId),
              data: _data,
          })
        return response
    }

    export const tier1Request = async(bizId, _data)=>{
        const response = await axios({
            method:"post",
            url:tier1(bizId),
            data:_data
        })
        return response
    }

    export const tier2Request = async(bizId, _data)=>{
        const response = await axios({
            method:"post",
            url:tier2(bizId),
            data:_data
        })
        return response
    }







