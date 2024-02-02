<template>
  <div
    class="bg-white rounded d-flex flex-column h-100"
    :class="{ 'border-dashed': !isReady }"
    ref="component"
  >
    <transition name="fade" mode="out-in">
      <div v-if="isReady">
        <div ref="dataHeaders" class="px-3 headers">
          <bus-search v-if="enableSearch" />
          <h2 v-else class="my-4">{{ title }}</h2>
          <div class="d-flex gap-2 align-items-center mb-3">
            <h3 class="m-0">{{ label }}</h3>
            <sort-icon class="icon" v-if="enableSort" />
          </div>
        </div>
        <transition name="fade" mode="out-in">
          <ul
            class="list-group list-group-flush p-0 overflow-y-auto"
            :key="key"
          >
            <li
              v-for="item in list"
              class="list-group-item py-3"
              :class="{ interactive }"
              @click="emit('select', item)"
            >
              <slot :label="item" />
            </li>
          </ul>
        </transition>
      </div>
      <div class="position-relative flex-grow-1" v-else>
        <span class="placeholder">{{ emptyPlaceholder }}</span>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup generic="Data">
import BusSearch from '@/components/BusSearch.vue';
import SortIcon from '@/assets/SortIcon.vue';
import useStore from '@/store';
import { computed, ref } from 'vue';

interface BusDataBoxProps {
  title?: string;
  label?: string;
  enableSearch?: boolean;
  enableSort?: boolean;
  list?: Data[];
  isReady?: boolean;
  interactive?: boolean;
}

const props = defineProps<BusDataBoxProps>();

const emit = defineEmits<{
  select: [item: Data];
}>();

const clearPx = (str: string) => +str.replace('px', '');
const getHeight = (el: HTMLDivElement): number =>
  clearPx(getComputedStyle(el).height);

const key = computed(() => JSON.stringify(props.list));

const store = useStore();
const dataHeaders = ref<HTMLDivElement>();
const component = ref<HTMLDivElement>();
const listHeight = computed(
  () =>
    dataHeaders.value &&
    component.value &&
    `${getHeight(component.value) - getHeight(dataHeaders.value)}px`
);

const emptyPlaceholder = computed(
  () =>
    `Please select the bus ${store.state.selectedLine ? 'stop' : 'line'} first`
);
</script>

<style lang="scss" scoped>
.icon {
  font-size: $h3-font-size * 0.8;
  color: #9a9da4;
}
.headers {
  border-bottom: 2px solid $border-color;
}
.border-dashed {
  border: 2px dashed #9a9da4;
}
.placeholder {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.list-group {
  height: calc(v-bind(listHeight) - 1.5rem);
}
.list-group-item {
  background-color: transparent;
  &.interactive {
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: #f8f8fb;
      cursor: pointer;
    }
  }
}
</style>
