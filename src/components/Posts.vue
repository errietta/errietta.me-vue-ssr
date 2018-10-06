<template>
  <div>
    <div  v-for='item in posts' :key='item.id'>
      <h4>
        <a :href="item.link">{{ item.title }}</a>
      </h4>
      <p v-html="item.content">
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Posts',
  props: ['posts'],
}
</script>
