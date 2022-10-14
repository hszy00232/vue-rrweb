import { defineStore } from "pinia";

export const useRecordStore = defineStore("record", {
  state: () => {
    return { records: [] };
  },
  getters: {
    getRecord(state) {
      if (this.getRecordLength > 2) {
        return state.records.map((record) => {
          if (record) {
            return JSON.parse(record);
          }
        });
      } else {
        return null;
      }
    },
    getRecordLength: (state) => {
      return state.records.length;
    },
  },
  actions: {
    add(event) {
      this.records.push(event);
    },
  },
});
