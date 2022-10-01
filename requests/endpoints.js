const BASE_URL ="https://transfi.herokuapp.com/api/"


export const register = `${BASE_URL}auth/Register`

export const confirmOtp = `${BASE_URL}auth/register/otp`

export const resendOtp = `${BASE_URL}auth/register/resend-otp`

export const login = `${BASE_URL}auth/login`

export const forgotPassword = `${BASE_URL}auth/login/forgot-password`

export const resetPassword = `${BASE_URL}auth/login/forgot-password/otp`




//Business

export const createBiz = `${BASE_URL}business`

export const updateBizImage = (bizId) => `${BASE_URL}business/${bizId}/image` // put request

export const getBizInfo = (bizId)  => `${BASE_URL}business/${bizId}`

export const updateBizInfo =(bizId)  => `${BASE_URL}business/${bizId}` // put request

export const getBizUsers = (bizId) => `${BASE_URL}business/${bizId}/users`

export const getAllMyBiz =(page, limit)=> `${BASE_URL}business/all-businesses?page=${page}&limit=${limit}`

export const inviteUserToBiz = (bizId) => `${BASE_URL}business/${bizId}/invite-user` //post request

export const reAssignRole = (bizId) => `${BASE_URL}business/${bizId}/role/assignment` //put request

export const deleteUserFromBiz = (bizId, userId) => `${BASE_URL}business/${bizId}/user/${userId}`

export const getUserPendingInvites = (limit, page) => `${BASE_URL}business/pending-invites?limit=${limit}&page=${page}`

export const acceptBizInvitation = (invitationId) => `${BASE_URL}business/user/invitation/${invitationId}/accept`

export const rejectBizInvitation = (invitationId) => `${BASE_URL}business/user/invitation/${invitationId}/reject`

export const uploadDocFront = (bizId, docType) => `${BASE_URL}business/${bizId}/kyc/upload/document/${docType}/front`  //put request

export const uploadDocBack = (bizId, docType) => `${BASE_URL}business/${bizId}/kyc/upload/document/${docType}/back`    //put request

export const uploadAddressProof = (bizId) => `${BASE_URL}business/${bizId}/kyc/upload/proof-of-address` //put request

export const tier1 = (bizId) =>`${BASE_URL}business/${bizId}/kyc/tier-1/submit`

export const tier2 = (bizId) =>`${BASE_URL}business/${bizId}/kyc/tier-2/submit`



