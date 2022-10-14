const BASE_URL ="https://transfi.herokuapp.com/api/"


export const register = `${BASE_URL}auth/Register`

export const confirmOtp = `${BASE_URL}auth/register/otp`

export const resendOtp = `${BASE_URL}auth/resend-otp`

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


//USER

export const changePassword = `${BASE_URL}user/change-password`

export const changeEmail = `${BASE_URL}user/change-email` //Post

export const changeEmailOtp = `${BASE_URL}user/change-email/otp`

export const confirmEmailOtp = `${BASE_URL}user/change-email/confirm/otp`

export const getUserProfile = `${BASE_URL}user/profile` //get

export const updateUserProfile = `${BASE_URL}user/profile`  //put

export const updateUserProfilePicture = `${BASE_URL}user/profile-image`  //put

export const logout = `${BASE_URL}user/profile`  //put



//WALLET


export const getCoinList = `${BASE_URL}wallet/coin`

export const getCoinNetworks = (coinIdorSymbol) => `${BASE_URL}wallet/coin-network/${coinIdorSymbol}`

export const getSingleCoinById = (coinIdOrSymbol)=> `${BASE_URL}wallet/coin/${coinIdOrSymbol}`

export const getUserCoinBalance=()=>`${BASE_URL}wallet/balances`

export const getUserCoinBalanceById = (coinIdOrSymbol)=>`${BASE_URL}wallet/balance/${coinIdOrSymbol}`

export const getDepositAddress =(coinIdOrSymbol, blockChainNetwork)=>`${BASE_URL}wallet/deposit-address/${coinIdOrSymbol}/${blockChainNetwork}`

export const getDepositAddresses = (coinIdOrSymbol)=>`${BASE_URL}wallet/deposit-address/${coinIdOrSymbol}`

export const getDeposits = (page, limit)=>`${BASE_URL}wallet/deposits?page=${page}&limit=${limit}`

export const getDepositById = (id)=>`${BASE_URL}wallet/deposit/${id}`

export const Deposit = `${BASE_URL}wallet/deposit` //POST

export const getWithdrawals = (page, limit)=>`${BASE_URL}wallet/withdrawals?page=${page}&limit=${limit}`

export const getWithdrawalsById = (id)=>`${BASE_URL}wallet/withdrawal/${id}`

export const initiateWithdrawal = `${BASE_URL}wallet/initiate-withdrawal`

export const withdraw = `${BASE_URL}wallet/withdraw` //POST

export const withdrawNotification = `${BASE_URL}wallet/on-withdrawal-notification` //POST

export const withdrawFailed = `${BASE_URL}wallet/on-withdrawal-failed` //POST

export const initiateTransfer = `${BASE_URL}wallet/initiate-transfer` //POST

export const transfer = `${BASE_URL}wallet/transfer` //POST

export const getTransfers =(page, size) => `${BASE_URL}wallet/transfer?page=${page}&size=${size}`

export const getTransferById = (id)=>`${BASE_URL}wallet/transfer/${id}`

export const transactionByReference = (reference)=>`${BASE_URL}wallet/transfer/reference`

export const getTransactions = (type, status, limit)=>`${BASE_URL}wallet/transactions?type=${type}&status=${status}&limit=${limit}`

export const getTransactionById = (id)=>`${BASE}wallet/transactions/${id}`

export const swap = `${BASE_URL}wallet/swap` //POST

export const getTradeHistory = `${BASE_URL}wallet/trade-history`

export const getTradeHistoryById = (id)=> `${BASE_URL}wallet/trade-history/${id}`

export const getSwapRate = `${BASE_URL}wallet/swap-rate` //POST