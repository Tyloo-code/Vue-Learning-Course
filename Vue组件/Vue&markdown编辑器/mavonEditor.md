# **一、介绍**

Markdown是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本内容具有一定的格式。mavonEditor是国人开源的一款比较好用的markdown编辑器，GitHub地址：[https://github.com/hinesboy/mavonEditor](https://github.com/hinesboy/mavonEditor)

# **二、安装**

~~~ js

npm install mavon-editor --save

~~~

# **三、使用**

## **方法一：**

main.js:

~~~ js
 // 全局注册

​    // import with ES6

​    import Vue from 'vue'

​    import mavonEditor from 'mavon-editor'

​    import 'mavon-editor/dist/css/index.css'

​    // use

​    Vue.use(mavonEditor)

​    new Vue({

​        'el': '#main',

​        data() {

​            return { value: '' }

​        }

​    })

~~~

index.html

~~~ html

<div id="main">

​    <mavon-editor v-model="value"/>

</div>

~~~

## **方法二：**

editor.vue:

~~~ vue

 <template>

        <div id="editor">

​            <mavon-editor style="height: 100%"></mavon-editor>

​        </div>

​    </template>

    <script>

​    // Local Registration

​    import { mavonEditor } from 'mavon-editor'

​    import 'mavon-editor/dist/css/index.css'

​    export default {

​        name: 'editor',

​        components: {

​            mavonEditor

​            // or 'mavon-editor': mavonEditor

​        }

​    }

​    </script>

    <style>

​    #editor {

​        margin: auto;

​        width: 80%;

​        height: 580px;

​    }

​    </style>

~~~

index.js:

~~~ vue

// 下同

​    import Vue from 'vue';

​    var editor = require('./editor.vue');

​    new Vue({

​        el: '#main',

​        render: h => h(editor)

​    });

~~~

index.html:

~~~ html

// 下同 

<div id="main">

</div>

~~~

# **四、图片上传**

~~~ vue

<template>

​    <mavon-editor ref=md @imgAdd="$imgAdd" @imgDel="$imgDel"></mavon-editor>

</template>

exports default {

​    methods: {

​        // 绑定@imgAdd event

​        $imgAdd(pos, $file){

​            // 第一步.将图片上传到服务器.

​           var formdata = new FormData();

​           formdata.append('image', $file);

​           axios({

​               url: 'server url',

​               method: 'post',

​               data: formdata,

​               headers: { 'Content-Type': 'multipart/form-data' },

​           }).then((url) => {

​               // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)

​               /**

​               \* $vm 指为mavonEditor实例，可以通过如下两种方式获取

​               \* 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`

​               \* 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`

​               */

​               $vm.$img2Url(pos, url);

​           })

​        }

​    }

}

~~~

**注:**

**默认大小样式为 min-height: 300px , min-width: 300px 可自行覆盖**

**基础z-index: 1500**

**仅用作展示可以设置props: toolbarsFlag: false , subfield: false, defaultOpen: "preview"**