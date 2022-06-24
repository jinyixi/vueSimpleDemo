<template>
    <div>
       <!-- 2.使用父组件里传来的值 -->
       <div>{{ content }}</div>
       <div>{{ msg }}</div>
       <div>{{ err }}</div>
       <input type="text" v-model="message" />
       <button @click="click">Send</button>
    </div>
</template>

<script>

export default {
    data() {
        return {
          // 默认
          message: ''
        }
    },
    // 接受父组件里传来的值，在 props 里接收
    // props:["content"]
     // 接受父组件里传来的值，在 props 里接收
    props:{
        content: String, // 期望的是个 Number 类型的，但传过来的是个 String 类型的，控制台会抛出错误
        msg: String, // 期望的是个 Number 类型的，但传过来的是个 String 类型的，控制台会抛出错误
        err: String, // 期望的是个 Number 类型的，但传过来的是个 String 类型的，控制台会抛出错误
    },
    methods:{
        click(){
            this.$emit('childFn', this.message = Math.random());
        },
        childMethods(text) {
        alert("I am child's methods"+text)
        }
    }
}
</script>