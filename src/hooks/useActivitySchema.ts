import useSWR from 'swr'
import { FormField } from '@/types/contact-schema'

export function useActivitySchema(userId: string) {
  const { data, error, isLoading } = useSWR<FormField[]>(
    userId ? `/api/schema/activities/${userId}` : null,
    async (url: string) => {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      
      if (!response.ok) {
        throw new Error('Failed to fetch activity schema')
      }
      
      return response.json()
    }
  )

  return {
    fields: data,
    isLoading,
    error,
  }
} 