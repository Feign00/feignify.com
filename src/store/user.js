import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
    const username = ref('Traveler')
    const description = ref('Exploring the world, one step at a time.')

    function setUsername(name) {
        username.value = name
    }

    return { username, description, setUsername }
})
