<template>
    <div>
      <!-- 3.使用子组件，标签的格式就可以 -->
       <!-- 4.给子组件传值，content 为子组件声明的变量，name 为父组件里 data 声明的变量（你好，世界） -->
       <test 
       :content='name'
       :msg='msgaaa'
       :err='erraaa'
       @childFn="parentFn"
       ref="c1"
       /> 
       <br/> 
      子组件传来的值 : {{message}}
      <br/>
      <button @click="clickPar">父组件的button</button>
    </div>
</template>

<script>
import Test from './test1'  // 1.导入子组件
    export default {
      components:{ Test }, // 2.声明子组件
        data(){
            return{
                name:'',
                msgaaa:'没有共产党',
                erraaa:'就有了新中国',
                message: ''
            }
        },
        created() {
        // 调接口请求数据，将调接口定义一个方法，在created里调用这个方法
        
        this.fetchData()
        },
        methods:{
            fetchData(){
               return this.name = "父组件给子组件用content传值，子组件用props接收"+Math.random()
            },
            parentFn(payload) {
                this.message = payload;
            },
            clickPar(){
                console.log(this.$refs.c1)
                // this.$refs.c1.childMethods(this.erraaa);
                this.$children[0].childMethods(this.erraaa);
            }
        }
    }
</script>