export const useCountStore = defineStore('count', () => {
  const count = ref(0);
  const increase = () => {
    count.value += 1;
  };
  return {
    count,
    increase,
  };
});
