import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const url = (import.meta.env.VITE_SUPABASE_URL as string | undefined)?.trim()
const anonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined)?.trim()

export const isSupabaseConfigured = Boolean(url && anonKey)

let client: SupabaseClient | null = null

// Returns null when Supabase is not configured. Never throws for missing config.
export function getSupabase(): SupabaseClient | null {
  if (!url || !anonKey) return null
  if (!client) client = createClient(url, anonKey)
  return client
}

export type RequirementRow = {
  service: string
  full_name: string
  company: string | null
  email: string
  phone: string | null
  country: string
  contact_method: string
  title: string
  description: string
  current_system: string | null
  business_impact: string | null
  timeline: string
  budget: string | null
  consent: boolean
  source_url: string | null
}
