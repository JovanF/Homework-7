import { createClient } from '@supabase/supabase-js'

const URL = 'https://qxrpzrxuabwthwjwmhja.supabase.co';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4cnB6cnh1YWJ3dGh3andtaGphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM5ODQ2ODEsImV4cCI6MjAyOTU2MDY4MX0._EdFBwuqIPG-HVJQh8t2SsHVPq9AjuyjLLjVFN6mb7A' ;

export const supabase = createClient(URL,API_KEY);