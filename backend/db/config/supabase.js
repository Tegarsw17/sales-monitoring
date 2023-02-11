const createClient = require('@supabase/supabase-js')

const url = 'https://djtgmcrfsuqyowkksrmi.supabase.co'
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqdGdtY3Jmc3VxeW93a2tzcm1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU4NjE4NDgsImV4cCI6MTk5MTQzNzg0OH0.gDfSCshibWDWcEaT1jjR7j536wsp0Plt8Zcdx1wegRs'



const supabase = createClient(url, key)

module.exports = supabase