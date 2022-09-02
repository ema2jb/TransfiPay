import {useSelector} from 'react-redux'

import Collaborate from './collaborate'
import Invite from './invite'
import ReAssign from './reassign'



const TeamsIndex = ()=>{

        const {teamsUI} =useSelector(state=>state.UI)

    return<>
        <div className={!teamsUI.collaborate && 'd-none'}>
            <Collaborate />
        </div>
        <div className={!teamsUI.invite && 'd-none'}>
            <Invite />
        </div>
    </>
}

export default TeamsIndex