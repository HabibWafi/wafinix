-- Wafinix schema (Tahap 9b). Run once in Supabase SQL Editor (project feoodjbdwbnyzwffoqax).
-- RLS is enabled with NO policies => anon/authenticated are denied. The app talks
-- to the DB only from the server using the service-role key, which bypasses RLS.

create extension if not exists pgcrypto;

-- Orders ----------------------------------------------------------------------
create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  order_code text unique not null,
  locale text not null default 'id',
  name text not null,
  email text not null,
  whatsapp text not null,
  company text,
  package_slug text not null,
  package_snapshot jsonb,
  brief text,
  budget text,
  amount numeric,
  currency text not null default 'IDR',
  status text not null default 'pending_payment'
    check (status in ('pending_payment','paid','in_progress','review','completed','cancelled')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Payments --------------------------------------------------------------------
create table if not exists public.payments (
  id uuid primary key default gen_random_uuid(),
  order_id uuid references public.orders(id) on delete cascade,
  method text not null check (method in ('midtrans','crypto_manual')),
  provider_ref text,
  asset text,
  network text,
  tx_hash text,
  amount numeric,
  status text not null default 'pending'
    check (status in ('pending','awaiting_verification','confirmed','failed','expired')),
  raw_payload jsonb,
  verified_by text,
  verified_at timestamptz,
  created_at timestamptz not null default now()
);

-- Contact messages ------------------------------------------------------------
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  whatsapp text,
  message text not null,
  status text not null default 'new' check (status in ('new','replied','closed')),
  created_at timestamptz not null default now()
);

-- Crypto wallets (managed from /admin/settings later) -------------------------
create table if not exists public.crypto_wallets (
  id uuid primary key default gen_random_uuid(),
  network text not null,
  asset text not null,
  address text not null,
  is_active boolean not null default true,
  updated_at timestamptz not null default now()
);

-- Audit logs ------------------------------------------------------------------
create table if not exists public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  admin_id text,
  action text not null,
  entity text,
  entity_id text,
  old_value jsonb,
  new_value jsonb,
  created_at timestamptz not null default now()
);

create index if not exists orders_created_idx on public.orders (created_at desc);
create index if not exists orders_status_idx on public.orders (status);
create index if not exists payments_order_idx on public.payments (order_id);

-- Row Level Security: enable on all, add NO policies => deny-all to anon. -------
alter table public.orders enable row level security;
alter table public.payments enable row level security;
alter table public.contact_messages enable row level security;
alter table public.crypto_wallets enable row level security;
alter table public.audit_logs enable row level security;
