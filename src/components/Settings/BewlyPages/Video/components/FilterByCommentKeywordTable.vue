<script lang="ts" setup>
import { onKeyStroke } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toastification'

import { settings } from '~/logic'

const { t } = useI18n()
const toast = useToast()

const addingFilter = ref<{ keyword: string, remark: string }>({ keyword: '', remark: '' })
const editingFilter = ref<{ keyword: string, remark: string }>({ keyword: '', remark: '' })
const editingIndex = ref<number>(-1) // -1: add new, >= 0: edit index
const keywordRef = ref<HTMLInputElement | null>(null)
const remarkRef = ref<HTMLInputElement | null>(null)

function handleAddFilter() {
  if (!addingFilter.value.keyword.trim())
    return

  const hasDuplicate = settings.value.filterByCommentKeyword.find(
    (item, itemIndex) => item.keyword === addingFilter.value.keyword.trim() && itemIndex !== editingIndex.value,
  )
  if (hasDuplicate) {
    toast.warning(t('settings.filter_item_already_exist'))
    return
  }
  settings.value.filterByCommentKeyword.unshift({ ...addingFilter.value })
  nextTick(() => {
    handleClearAddingFilter()
  })
}

function handleClearAddingFilter() {
  addingFilter.value = { keyword: '', remark: '' }
}

async function handleEditFilter(index: number, focusItem: 'keyword' | 'remark' = 'keyword') {
  editingIndex.value = index
  editingFilter.value = { ...settings.value.filterByCommentKeyword[index] }
  await nextTick()

  const inputElement = focusItem === 'keyword' ? keywordRef.value : remarkRef.value
  if (Array.isArray(inputElement)) {
    inputElement[0]?.focus()
  }
  else {
    inputElement?.focus()
  }
}

function handleConfirmFilter(index: number) {
  if (!editingFilter.value.keyword.trim())
    return

  const hasDuplicate = settings.value.filterByCommentKeyword.find(
    (item, itemIndex) => item.keyword === editingFilter.value.keyword.trim() && itemIndex !== index,
  )
  if (hasDuplicate) {
    toast.warning(t('settings.filter_item_already_exist'))
    return
  }
  addingFilter.value.keyword = addingFilter.value.keyword.trim()
  addingFilter.value.remark = addingFilter.value.remark.trim()
  settings.value.filterByCommentKeyword[index] = { ...editingFilter.value }
  if (index !== -1)
    editingIndex.value = -1
}

function handleDeleteFilter(index: number) {
  settings.value.filterByCommentKeyword.splice(index, 1)
}

onKeyStroke('Escape', (e: KeyboardEvent) => {
  e.preventDefault()
  editingIndex.value = -1
})
</script>

<template>
  <div>
    <div flex="~ gap-1" bg="$bew-fill-1" p-2 mb-2 rounded="$bew-radius">
      <Input
        v-model="addingFilter.keyword"
        size="small"
        :placeholder="$t('common.table.keyword')"
        w-full
        @click="editingIndex = -1"
        @enter="handleAddFilter"
      />
      <Input
        v-model="addingFilter.remark"
        size="small"
        :placeholder="$t('common.table.remark')"
        w-full
        @click="editingIndex = -1"
        @enter="handleAddFilter"
      />

      <Button
        size="small"
        type="primary"
        @click="handleAddFilter"
      >
        {{ $t('common.add') }}
      </Button>
    </div>

    <div
      v-if="settings.filterByCommentKeyword.length > 0"
      grid="~ cols-[1fr_1fr_80px] gap-2"
      bg="$bew-fill-1" p-2 rounded="$bew-radius"
    >
      <div text-center font-bold>
        {{ $t('common.table.keyword') }}
      </div>
      <div text-center font-bold>
        {{ $t('common.table.remark') }}
      </div>
      <div text-center font-bold>
        {{ $t('common.table.operation') }}
      </div>
    </div>

    <div
      v-if="settings.filterByCommentKeyword.length > 0"
      max-h-300px overflow-y-overlay
      bg="$bew-fill-1" p-2 mt-2 rounded="$bew-radius"
    >
      <div
        v-for="(item, index) in settings.filterByCommentKeyword"
        :key="index"
        grid="~ cols-[1fr_1fr_80px] gap-2"
        items-center
        p-2 rounded="$bew-radius"
        hover:bg="$bew-fill-2"
        transition="all duration-300"
      >
        <div
          v-if="editingIndex !== index"
          w-full overflow-hidden text-ellipsis whitespace-nowrap
          :title="item.keyword"
          @dblclick="handleEditFilter(index, 'keyword')"
        >
          {{ item.keyword }}
        </div>
        <Input
          v-else
          ref="keywordRef"
          v-model="editingFilter.keyword"
          size="small"
          w-full
          @enter="handleConfirmFilter(index)"
        />

        <div
          v-if="editingIndex !== index"
          w-full overflow-hidden text-ellipsis whitespace-nowrap
          :title="item.remark"
          @dblclick="handleEditFilter(index, 'remark')"
        >
          {{ item.remark }}
        </div>
        <Input
          v-else
          ref="remarkRef"
          v-model="editingFilter.remark"
          size="small"
          w-full
          @enter="handleConfirmFilter(index)"
        />

        <div flex="~ justify-center gap-1">
          <template v-if="editingIndex === index">
            <Button
              size="small"
              type="primary"
              @click="handleConfirmFilter(index)"
            >
              {{ $t('common.confirm') }}
            </Button>
            <Button
              size="small"
              type="secondary"
              @click="editingIndex = -1"
            >
              {{ $t('common.cancel') }}
            </Button>
          </template>
          <template v-else>
            <Button
              size="small"
              type="secondary"
              @click="handleEditFilter(index)"
            >
              {{ $t('common.edit') }}
            </Button>
            <Button
              size="small"
              type="error"
              @click="handleDeleteFilter(index)"
            >
              {{ $t('common.delete') }}
            </Button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
