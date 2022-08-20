<template>
  <div>
    <h1>{{ name }}--{{ age }}</h1>
  </div>
</template>

<script>
    // 直接暴露组件的配置对象
    export default {
        name: "Student",
        data() {
            return { name: '西索', age: 20 }
        },
    };
</script>