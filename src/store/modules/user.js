import { createSlice } from '@reduxjs/toolkit'
import { http } from '@/utils'

const userStore = createSlice({
    name: 'user',
    // 数据状态
    initialState: {
        token:'',
        userInfo: {}
    },
    // 同步修改方法
    reducers: {
        setUserInfo (state, action) {
            state.userInfo = action.payload
        }
    }
})

const { setUserInfo } = userStore.actions

// 获取reducer函数
const userReducer = userStore.reducer

const  fetchLogin = (loginForm) => {
    return async (dispatch) => {
        const res = await http.post('/authorizations', loginForm)
        dispatch(setUserInfo(res.data.token))
    }
}

export { fetchLogin }

export default userReducer