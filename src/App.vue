<script setup lang="ts"></script>

<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style lang="scss">
// @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap');

@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR&family=Noto+Sans+KR:wght@300&display=swap');

:root {
  --gray: #5f6061;
  --shadow: #d0d3d9;
  --primary: #9ac5f4;
  --accent: #a7ecee;
  --sub1: #b0daff;
  /* --sub1: #99dbf5; */
  --sub2: #ffeebb;
  --black: #303030;
  --white: #ffffff;
  // font-family: 'Noto Sans', sans-serif;
  font-family: 'IBM Plex Sans KR', sans-serif;
  // font-family: 'Noto Sans KR', sans-serif;
  -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
}

html,
body,
#root {
  height: 100%;
  width: 100%;
}

a {
  all: unset;
  display: block;
  height: 100%;
}
a:hover {
  cursor: pointer;
}
</style>
