// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://atglxeeqrilljdjlyahj.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0Z2x4ZWVxcmlsbGpkamx5YWhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3NDQ5MzIsImV4cCI6MjA1OTMyMDkzMn0.CcF61_SvTLcqEg0hIOufFnFcZ8jTKL6O1v8W_uyISD0";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);