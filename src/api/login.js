import request from '@/utils/request'


// 导出的是普通成员函数

// 登录
export function login(username,password){
    return request({
        url: '/login',
        method: 'post',
        data: {
            username,
            password
        }
    })
}

// 获取用户信息
export function getUserInfo(token){
    return request({
        url: `/userInfo/${token}`, // 反单引号，动态获取token值
        method: 'get'
    })
}

// 退出登录
export function logout(token){
    return request({
        url: '/logout', 
        method: 'post',
        headers:{
            "Authorization":"JWT "+token  // 请求头
        }
    })
}