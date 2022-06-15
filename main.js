import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vzewiomhfjzwiclztyog.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

await supabase
  .from('quiz')
  .select('*')
  .then((rows) => {
    console.log(rows)
  })

await supabase
  .from('question')
  .select('*')
  .then((rows) => {
    console.log(rows)
  })
