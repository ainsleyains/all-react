import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://jntaitnipgiuimjiijke.supabase.co';
const supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpudGFpdG5pcGdpdWltamlpamtlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ3NjExNTQsImV4cCI6MjAzMDMzNzE1NH0.xR1HwYnv_5xVYi5WIJhrj-2PkXdy2K-xu4nXWE3Vggk';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
