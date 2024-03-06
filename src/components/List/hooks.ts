export type Props = {
  list: any[];
};
export const useList = (props: Props) => {
  const assistRef = ref<HTMLElement>();
  const renderCount = 100;
  const renderStartIndex = ref(0);
  const renderEndIndex = ref(renderStartIndex.value + renderCount);
  const listForRender = computed(() =>
    props.list.slice(renderStartIndex.value, renderEndIndex.value)
  );
  onMounted(() => {
    if (!assistRef.value) return;
    console.log(assistRef.value);
    const parentElement: HTMLElement = assistRef.value.parentElement;
    // const scrollParent = document.documentElement;
    const flagIndex = Math.floor(renderCount / 3);
    const flagItem = parentElement.children.item(flagIndex);
    console.log(flagItem);
    // const Muta
  });
  return {
    assistRef,
    listForRender,
  };
};
