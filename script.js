import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qgvqxailuvflfmmndjol.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFndnF4YWlsdXZmbGZtbW5kam9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIzMzI5MDAsImV4cCI6MjA1NzkwODkwMH0.b8pRD70M5iffuS74fB7YvcaISuC2gftT_ZLfpcCgXwo';
const supabase = createClient(supabaseUrl, supabaseKey');

async function getUsers() {
    const { data, error } = await supabase.from('users').select('*');
    console.log(data);
}

getUsers();
