<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import * as rrweb from "rrweb";
import { onMounted, onUnmounted } from "vue";
import { useRecordStore } from "../stores/record.js";

onMounted(() => {
  startRecord();
});
onUnmounted(() => {
  stopRecord();
});
let timer;
const startRecord = () => {
  let events = [];
  rrweb.record({
    emit(event) {
      events.push(event);
    },
    recordCanvas: true,
  });
  timer = setInterval(() => {
    saveRecord(events);
    events = [];
  }, 1 * 1000);
};
const stopRecord = () => {
  clearInterval(timer);
};
const saveRecord = (events) => {
  const store = useRecordStore();
  const record = JSON.stringify(events[0]);
  // 存储录制数据
  store.add(record);
};
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
