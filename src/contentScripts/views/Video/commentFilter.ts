import { settings } from '~/logic'
import { runWhenIdle } from '~/utils/lazyLoad'
import { queryDomUntilFound } from '~/utils/main'

let observer: MutationObserver | null = null

export function setupCommentFilter() {
  runWhenIdle(() => {
    initCommentFilter()
  })

  watch(
    () => [
      settings.value.enableFilterByCommentUser,
      settings.value.filterByCommentUser,
      settings.value.enableFilterByCommentKeyword,
      settings.value.filterByCommentKeyword,
      settings.value.enableFilterByCommentLevel,
      settings.value.filterByCommentLevel,
      settings.value.enableFilterByCommentType,
      settings.value.filterByCommentType,
    ],
    () => {
      recheckAllComments()
    },
    { deep: true },
  )
}

async function initCommentFilter() {
  // Wait for comment container
  // Bilibili uses .comment-container or #comment or #commentapp
  // Check every 500ms
  const container = await queryDomUntilFound('.comment-container, #comment, #commentapp', 500)
  if (!container)
    return

  observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node instanceof HTMLElement) {
          checkNode(node)
          // Also check children if the node itself is a container
          const comments = node.querySelectorAll('.reply-item, .comment-item')
          comments.forEach((comment) => {
            if (comment instanceof HTMLElement)
              checkComment(comment)
          })
        }
      })
    })
  })

  observer.observe(container, { childList: true, subtree: true })
  
  // Initial check
  recheckAllComments()
}

function recheckAllComments() {
  const comments = document.querySelectorAll('.reply-item, .comment-item')
  comments.forEach((comment) => {
    if (comment instanceof HTMLElement)
      checkComment(comment)
  })
}

function checkNode(node: HTMLElement) {
  if (node.classList.contains('reply-item') || node.classList.contains('comment-item')) {
    checkComment(node)
  }
}

function checkComment(comment: HTMLElement) {
  // Reset display first
  comment.style.display = ''

  if (shouldFilter(comment)) {
    comment.style.display = 'none'
  }
}

function shouldFilter(comment: HTMLElement): boolean {
  // 1. Filter by User
  if (settings.value.enableFilterByCommentUser) {
    const userElement = comment.querySelector('.user-name, .name')
    if (userElement) {
      const username = userElement.textContent?.trim() || ''
      const userid = userElement.getAttribute('data-user-id') || ''
      
      for (const filter of settings.value.filterByCommentUser) {
        if (checkMatch(username, filter.keyword) || (userid && checkMatch(userid, filter.keyword))) {
          return true
        }
      }
    }
  }

  // 2. Filter by Keyword
  if (settings.value.enableFilterByCommentKeyword) {
    const contentElement = comment.querySelector('.reply-content, .text, .content')
    if (contentElement) {
      const content = contentElement.textContent?.trim() || ''
      for (const filter of settings.value.filterByCommentKeyword) {
        if (checkMatch(content, filter.keyword)) {
          return true
        }
      }
    }
  }

  // 3. Filter by Level
  if (settings.value.enableFilterByCommentLevel) {
    // Level is usually an icon class like .level-5 or i-level-5
    // We use querySelectorAll because querySelector might return an element with 'level-' in class (like level-bg) but not the actual level icon
    const levelIcons = comment.querySelectorAll('[class*="level-"]')
    for (const levelIcon of levelIcons) {
      const classList = Array.from(levelIcon.classList)
      const levelClass = classList.find(c => /level-(\d+)/.test(c))
      if (levelClass) {
        const match = levelClass.match(/level-(\d+)/)
        if (match) {
          const level = parseInt(match[1], 10)
          if (level < settings.value.filterByCommentLevel) {
            return true
          }
          // If we found a valid level icon, we stop checking other icons
          break
        }
      }
    }
  }

  // 4. Filter by Type
  if (settings.value.enableFilterByCommentType && settings.value.filterByCommentType.length > 0) {
    // Top comment
    if (settings.value.filterByCommentType.includes('top')) {
      if (comment.querySelector('.stick-top, .top-icon')) {
        return true
      }
    }
    // Hot comment
    if (settings.value.filterByCommentType.includes('hot')) {
      // Hot comments are usually in a separate list or marked
      // But sometimes they just have a "Hot" tag
      if (comment.querySelector('.hot-icon, .hot-tag')) {
        return true
      }
      // Or check if it is inside .hot-list
      if (comment.closest('.hot-list')) {
        return true
      }
    }
    // Note
    if (settings.value.filterByCommentType.includes('note')) {
      if (comment.querySelector('.note-icon')) {
        return true
      }
    }
    // Vote
    if (settings.value.filterByCommentType.includes('vote')) {
      if (comment.querySelector('.vote-icon')) {
        return true
      }
    }
  }

  return false
}

function checkMatch(text: string, keyword: string): boolean {
  if (!text || !keyword)
    return false
  
  // Regex check
  if (keyword.startsWith('/') && keyword.endsWith('/') && keyword.length > 2) {
    try {
      const regex = new RegExp(keyword.slice(1, -1), 'i')
      return regex.test(text)
    }
    catch (e) {
      // ignore invalid regex
    }
  }

  return text.toLowerCase().includes(keyword.toLowerCase())
}
