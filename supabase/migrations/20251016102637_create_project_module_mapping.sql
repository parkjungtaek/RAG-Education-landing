/*
  # Create project-module mapping tables

  1. New Tables
    - `projects`
      - `id` (text, primary key) - Project identifier
      - `title` (text) - Project title
      - `duration` (text) - Project duration
      - `team_size` (text) - Team size
      - `description` (text) - Short description
      - `detailed_description` (text) - Detailed project description
      - `created_at` (timestamptz) - Creation timestamp
      
    - `modules`
      - `id` (integer, primary key) - Module identifier
      - `title` (text) - Module title
      - `color` (text) - Module color theme
      - `icon_name` (text) - Icon identifier
      - `created_at` (timestamptz) - Creation timestamp
      
    - `project_modules`
      - `id` (uuid, primary key) - Unique identifier
      - `project_id` (text, foreign key) - Reference to projects
      - `module_id` (integer, foreign key) - Reference to modules
      - `created_at` (timestamptz) - Creation timestamp

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access (this is educational content)
*/

CREATE TABLE IF NOT EXISTS projects (
  id text PRIMARY KEY,
  title text NOT NULL,
  duration text NOT NULL,
  team_size text NOT NULL,
  description text NOT NULL,
  detailed_description text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS modules (
  id integer PRIMARY KEY,
  title text NOT NULL,
  color text NOT NULL,
  icon_name text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS project_modules (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id text NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  module_id integer NOT NULL REFERENCES modules(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  UNIQUE(project_id, module_id)
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_modules ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read projects"
  ON projects FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Public can read modules"
  ON modules FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Public can read project_modules"
  ON project_modules FOR SELECT
  TO public
  USING (true);

INSERT INTO projects (id, title, duration, team_size, description, detailed_description) VALUES
('project1', 'AI Meeting Agent', '120시간', '4-5명', '실시간 회의 전사 및 인사이트 도출 시스템', '실시간 음성인식(STT)을 활용한 회의 전사 시스템입니다. 화자 분리 및 감정 분석을 통해 회의 참여자별 발언을 정확하게 기록하고, GPT-4를 활용하여 Action Item을 자동으로 추출합니다. RAG 기반 검색 시스템으로 과거 회의록을 빠르게 검색할 수 있으며, Jira/Asana와 연동하여 즉시 태스크를 생성할 수 있습니다.'),
('project2', 'AI News Curation Platform', '200시간', '4-5명', '개인화된 AI 뉴스 큐레이션 및 요약 서비스', '자동 뉴스 크롤링 시스템을 통해 다양한 소스에서 뉴스를 수집하고, GPT-4와 Claude를 활용하여 AI 기반 요약 및 분류를 수행합니다. 사용자 행동 패턴을 분석하여 개인화된 추천 알고리즘을 제공하며, 실시간 트렌드 분석과 다국어 번역 지원을 통해 글로벌 뉴스를 쉽게 접할 수 있습니다.')
ON CONFLICT (id) DO NOTHING;

INSERT INTO modules (id, title, color, icon_name) VALUES
(1, '음성 데이터 처리 및 변환', 'cyan', 'Mic'),
(2, 'RAG 기반 AI 문서 검색 및 질의응답 시스템 개발', 'purple', 'FileSearch'),
(3, '클라우드 기반 AI 모델 배포 및 API 연동', 'blue', 'Cloud'),
(4, '실시간 데이터 스트리밍 및 AI 분석 시스템 구축', 'emerald', 'Activity')
ON CONFLICT (id) DO NOTHING;

INSERT INTO project_modules (project_id, module_id) VALUES
('project1', 1),
('project1', 2),
('project1', 3),
('project2', 1),
('project2', 3),
('project2', 4)
ON CONFLICT (project_id, module_id) DO NOTHING;
