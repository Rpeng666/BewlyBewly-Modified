<script lang="ts" setup>
import { useToast } from 'vue-toastification'

import Button from '~/components/Button.vue'
import Radio from '~/components/Radio.vue'
import Slider from '~/components/Slider.vue'
import { settings } from '~/logic'

import SettingsItem from '../../components/SettingsItem.vue'
import SettingsItemGroup from '../../components/SettingsItemGroup.vue'
import FilterByCommentKeywordTable from './components/FilterByCommentKeywordTable.vue'
import FilterByCommentUserTable from './components/FilterByCommentUserTable.vue'

const toast = useToast()

function handleExport(filterType: 'user' | 'keyword') {
  const filters = filterType === 'user' ? settings.value.filterByCommentUser : settings.value.filterByCommentKeyword
  const blob = new Blob([JSON.stringify(filters, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `bewly_comment_filter_${filterType}_${new Date().toISOString().slice(0, 10)}.json`
  a.click()
  URL.revokeObjectURL(url)
}

function handleImport(event: Event, filterType: 'user' | 'keyword') {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file)
    return

  const reader = new FileReader()
  reader.onload = (e) => {
    try {
      const result = e.target?.result as string
      const importedFilters = JSON.parse(result)
      if (Array.isArray(importedFilters)) {
        if (filterType === 'user') {
          settings.value.filterByCommentUser = [...settings.value.filterByCommentUser, ...importedFilters]
          // Remove duplicates
          settings.value.filterByCommentUser = settings.value.filterByCommentUser.filter((item, index, self) =>
            index === self.findIndex(t => (
              t.keyword === item.keyword
            )),
          )
        }
        else {
          settings.value.filterByCommentKeyword = [...settings.value.filterByCommentKeyword, ...importedFilters]
          // Remove duplicates
          settings.value.filterByCommentKeyword = settings.value.filterByCommentKeyword.filter((item, index, self) =>
            index === self.findIndex(t => (
              t.keyword === item.keyword
            )),
          )
        }
        toast.success('Imported successfully')
      }
      else {
        toast.error('Invalid file format')
      }
    }
    catch (error) {
      console.error(error)
      toast.error('Failed to parse file')
    }
  }
  reader.readAsText(file)
  input.value = ''
}

const commentTypes = [
  { label: 'Top', value: 'top' },
  { label: 'Hot', value: 'hot' },
  { label: 'Note', value: 'note' },
  { label: 'Vote', value: 'vote' },
]

function toggleCommentType(type: string) {
  if (settings.value.filterByCommentType.includes(type)) {
    settings.value.filterByCommentType = settings.value.filterByCommentType.filter(t => t !== type)
  }
  else {
    settings.value.filterByCommentType.push(type)
  }
}
</script>

<template>
  <div>
    <SettingsItemGroup :title="$t('settings.group_comment_filter')">
      <SettingsItem :title="$t('settings.enable_filter_by_comment_user')">
        <template #desc>
          <span v-html="$t('settings.filter_by_comment_user_desc')" />
        </template>
        <Radio v-model="settings.enableFilterByCommentUser" />
      </SettingsItem>

      <div v-if="settings.enableFilterByCommentUser" class="settings-item-content">
        <FilterByCommentUserTable />
        <div flex="~ gap-2" mt-2>
          <Button size="small" type="secondary" @click="handleExport('user')">
            {{ $t('common.export') }}
          </Button>
          <label class="bew-button bew-button--secondary bew-button--small">
            {{ $t('common.import') }}
            <input type="file" accept=".json" hidden @change="handleImport($event, 'user')">
          </label>
        </div>
      </div>

      <SettingsItem :title="$t('settings.enable_filter_by_comment_keyword')">
        <template #desc>
          <span v-html="$t('settings.filter_by_comment_keyword_desc')" />
        </template>
        <Radio v-model="settings.enableFilterByCommentKeyword" />
      </SettingsItem>

      <div v-if="settings.enableFilterByCommentKeyword" class="settings-item-content">
        <FilterByCommentKeywordTable />
        <div flex="~ gap-2" mt-2>
          <Button size="small" type="secondary" @click="handleExport('keyword')">
            {{ $t('common.export') }}
          </Button>
          <label class="bew-button bew-button--secondary bew-button--small">
            {{ $t('common.import') }}
            <input type="file" accept=".json" hidden @change="handleImport($event, 'keyword')">
          </label>
        </div>
      </div>

      <SettingsItem :title="$t('settings.enable_filter_by_comment_level')">
        <template #desc>
          {{ $t('settings.filter_by_comment_level_desc') }}
        </template>
        <Radio v-model="settings.enableFilterByCommentLevel" />
      </SettingsItem>

      <div v-if="settings.enableFilterByCommentLevel" class="settings-item-content" flex="~ items-center gap-4">
        <span>{{ $t('settings.filter_level_below') }}</span>
        <Slider v-model="settings.filterByCommentLevel" :min="0" :max="6" :step="1" w-200px />
        <span>Lv{{ settings.filterByCommentLevel }}</span>
      </div>

      <SettingsItem :title="$t('settings.enable_filter_by_comment_type')">
        <template #desc>
          {{ $t('settings.filter_by_comment_type_desc') }}
        </template>
        <Radio v-model="settings.enableFilterByCommentType" />
      </SettingsItem>

      <div v-if="settings.enableFilterByCommentType" class="settings-item-content" flex="~ gap-4 wrap">
        <div
          v-for="type in commentTypes" :key="type.value"
          class="flex items-center gap-2 cursor-pointer"
          @click="toggleCommentType(type.value)"
        >
          <div
            class="w-4 h-4 rounded-sm border border-$bew-border-color flex items-center justify-center transition-colors"
            :class="{ 'bg-$bew-theme-color border-$bew-theme-color': settings.filterByCommentType.includes(type.value) }"
          >
            <div v-if="settings.filterByCommentType.includes(type.value)" class="i-mingcute:check-line text-white text-xs" />
          </div>
          <span>{{ type.label }}</span>
        </div>
      </div>
    </SettingsItemGroup>
  </div>
</template>

<style lang="scss" scoped>
.settings-item-content {
  --at-apply: bg-$bew-fill-1 p-4 rounded-$bew-radius mt-2 mb-4 ml-4;
}
</style>
