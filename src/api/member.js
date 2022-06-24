// 会员管理接口

import request from '@/utils/request'


export default {
    // 获取会员列表数据,page 当前页码。size，每页查询条数
    getList(token,size,page,searchMap){
        return request({
            url: `/member?page=${page}&size=${size}`,
            method: 'post',
            headers:{
                "Authorization":"JWT "+token
            },
            data:searchMap

        })
    },

    // 新增会员
    add(pojo,token){
        return request({
            url: '/addMember',
            method: 'post',
            data: pojo,
            headers:{
                "Authorization":"JWT "+token
            }
        })
    },

    // 根据会员 id 查询单条数据
    getById(id,token){
        return request({
            url:  `/getById?id=${id}`,
            method: 'get',
            headers:{
                "Authorization":"JWT "+token
            }
        })
    },

    // 修改数据
    update(pojo,token){
        return request({
            url: '/api/manage/member',
            method: 'put',
            data: pojo,
            headers:{
                "Authorization":"JWT "+token
            }
        })
    },

    // 删除数据
    deleteById(id,token){
        return request({
            url: `/deleteMember?id=${id}`,
            method: 'delete',
            headers:{
                "Authorization":"JWT "+token,
                "content-type": "application/json"
            }
        })
    }
}