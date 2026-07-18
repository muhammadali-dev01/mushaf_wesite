import { supabase } from "@/integrations/supabase/client";

const WHATSAPP_NUMBER = "923709076083";

export type FormPayload = {
  form_type: string;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  age?: number | null;
  course?: string | null;
  teacher_preference?: string | null;
  timezone?: string | null;
  subject?: string | null;
  message?: string | null;
  extra?: Record<string, unknown> | null;
};

function buildWhatsAppMessage(p: FormPayload): string {
  const lines: string[] = [];
  lines.push(`*New ${p.form_type} submission*`);
  if (p.name) lines.push(`*Name:* ${p.name}`);
  if (p.age) lines.push(`*Age:* ${p.age}`);
  if (p.email) lines.push(`*Email:* ${p.email}`);
  if (p.phone) lines.push(`*Phone:* ${p.phone}`);
  if (p.course) lines.push(`*Course:* ${p.course}`);
  if (p.teacher_preference) lines.push(`*Teacher:* ${p.teacher_preference}`);
  if (p.timezone) lines.push(`*Timezone:* ${p.timezone}`);
  if (p.subject) lines.push(`*Subject:* ${p.subject}`);
  if (p.message) lines.push(`*Message:* ${p.message}`);
  return lines.join("\n");
}

/**
 * Saves a form submission to the database and opens WhatsApp
 * with a pre-filled message to the academy number.
 */
export async function submitForm(payload: FormPayload) {
  const { error } = await supabase.from("form_submissions").insert([payload as any]);
  if (error) throw error;

  const text = encodeURIComponent(buildWhatsAppMessage(payload));
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  window.open(url, "_blank", "noopener,noreferrer");
}