ALTER TABLE public.token DROP COLUMN updated_at CASCADE;
DROP TRIGGER IF EXISTS set_current_timestamp_updated_at
  ON public.token
;
