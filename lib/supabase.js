import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://rqukcckrsrndqzfjfywk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxdWtjY2tyc3JuZHF6ZmpmeXdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY5MzUxNzMsImV4cCI6MjA1MjUxMTE3M30.fviQc7iEFiGaneRdTCm26u084eUte6bPz2qwCm_0BOQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
