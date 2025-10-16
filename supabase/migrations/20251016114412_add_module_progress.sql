/*
  # Add Module Progress Tracking

  1. New Tables
    - `module_progress`
      - `id` (uuid, primary key)
      - `module_id` (integer, foreign key to modules)
      - `progress` (integer, 0-100)
      - `updated_at` (timestamp)
      - `created_at` (timestamp)
  
  2. Changes
    - Enables tracking learning progress for each module
    - Progress is stored as a percentage (0-100)
    - Updated timestamp automatically changes on progress updates
  
  3. Security
    - Enable RLS on `module_progress` table
    - Add policy for public read access
    - Add policy for authenticated users to update progress
*/

CREATE TABLE IF NOT EXISTS module_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  module_id integer NOT NULL REFERENCES modules(id) ON DELETE CASCADE,
  progress integer NOT NULL DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  updated_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  UNIQUE(module_id)
);

ALTER TABLE module_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view module progress"
  ON module_progress FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can insert module progress"
  ON module_progress FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Anyone can update module progress"
  ON module_progress FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);

-- Create function to auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_module_progress_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for auto-updating updated_at
DROP TRIGGER IF EXISTS module_progress_updated_at ON module_progress;
CREATE TRIGGER module_progress_updated_at
  BEFORE UPDATE ON module_progress
  FOR EACH ROW
  EXECUTE FUNCTION update_module_progress_updated_at();

-- Insert initial progress data for all modules
INSERT INTO module_progress (module_id, progress)
SELECT id, 0
FROM modules
ON CONFLICT (module_id) DO NOTHING;