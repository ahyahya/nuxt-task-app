<template>
  <nuxt-link tag="div" :to="`/list/${lid}`" class="todo-search">
    <div class="todo-search-left">
      <div>{{name}}</div>
    </div>
    <div class="todo-search-middle">
      <div>リスト: {{listName}}</div>
    </div>
    <div class="todo-search-right">
      <div>登録日: {{parsedCreatedAt}}</div>
      <div>〆切: {{parsedDeadline}}</div>
    </div>
  </nuxt-link>
</template>

<style scoped>
.todo-search {
  cursor: pointer;
  color: white;
  padding: 20px 40px;
  border-top: 1px solid rgba(255,255,255,0.6);
  background: rgba(254,245,228,0.02);
  display: flex;
  justify-content: flex-start;
}
.todo-search-left {
  width: 330px;
  padding-right: 40px;
  display: flex;
  align-items: center;
  font-size: 24px;
  justify-content: flex-end;
}
.todo-search-middle {
  width: 200px;
  display: flex;
  align-items: center;
  font-size: 16px;
  border-right: 1px solid rgba(160,160,160,0.3);

}
.todo-search-right {
  padding-left: 50px;
  font-size: 14px;
}
</style>

<script>
import dateFormat from '~assets/js/date-format';

export default {
  computed: {
    parsedDeadline() {
      return dateFormat(this.deadline);
    },
    parsedCreatedAt() {
      return dateFormat(this.createdAt);
    }
  },
  props: {
    lid: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    listName: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      required: true
    },
    deadline: {
      type: Date,
      required: true
    }
  }
};

</script>
