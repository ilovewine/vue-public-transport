<template>
  <div
    class="bg-white rounded d-flex flex-column h-100 data-list"
    ref="component"
  >
    <transition name="fade" mode="out-in">
      <div v-if="isReady">
        <div ref="dataHeaders" class="px-3 header">
          <slot name="header" />
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
      <div v-else>
        <stroked-border />

        <div class="placeholder flex-grow-1">
          <span>{{ emptyPlaceholder }}</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup generic="Data">
import useStore from '@/store';
import StrokedBorder from '@/assets/StrokedBorder.vue';
import { computed, ref } from 'vue';
import Sortable from '@/class/sort';

interface BusDataBoxProps {
  title?: string;
  sortable?: Sortable<Data>;
  isReady?: boolean;
  interactive?: boolean;
}

const props = defineProps<BusDataBoxProps>();

const emit = defineEmits<{
  select: [item: Data];
}>();

const list = computed(() => props.sortable?.list);

const clearPx = (str: string) => +str.replace('px', '');
const getHeight = (el: HTMLDivElement): number =>
  clearPx(getComputedStyle(el).height);

const key = computed(() => JSON.stringify(list.value));

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
.data-list {
  position: relative;
}

.header {
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
