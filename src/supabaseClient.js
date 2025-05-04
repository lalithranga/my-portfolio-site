import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vezjqissmzqqivnkgwxy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlempxaXNzbXpxcWl2bmtnd3h5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyNjQ3OTUsImV4cCI6MjA2MTg0MDc5NX0.BjPAnQKWgGtPcCUuouI_JuSKlzGKoo2kFAxzX0XhxiY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
