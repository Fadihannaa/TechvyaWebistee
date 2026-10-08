-- Techvya website: stores contact/requirement form submissions.
-- Run once in Supabase dashboard -> SQL Editor -> New query -> Run.
-- Afterwards: submissions appear under Table Editor -> requirements.

create table if not exists public.requirements (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  service text not null,
  full_name text not null,
  company text,
  email text not null,
  phone text,
  country text not null,
  contact_method text not null default 'Email',
  title text not null,
  description text not null,
  current_system text,
  business_impact text,
  timeline text,
  budget text,
  consent boolean not null default false,
  source_url text
);

alter table public.requirements enable row level security;

-- Website visitors may INSERT only. No reading, updating or deleting.
drop policy if exists "Allow anonymous inserts" on public.requirements;
create policy "Allow anonymous inserts"
  on public.requirements for insert
  with check (true);
