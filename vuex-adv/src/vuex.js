//自行实现Vuex
let Vue;

class Store {
    constructor(options = {}) {
        this.state = options.state;
        let getters = options.getters;

    }
}

// Vue导入模块时调用
const install = (_Vue) => {
    Vue = _Vue;
    console.log("install my vuex into " + Vue);
    Vue.mixin({                     //通过混入拓展模块功能    TODO ? 函数为何可以.mixin()
        beforeCreate() {
            if (this.$options && this.$options.store) {
                this.$store = this.$options.store;
            } else {
                this.$store = this.$parent && this.$parent.$store;
            }
        }
    });
}

// 默认导出一个和文件名同名的成员
export default {
    Store,
    install
}