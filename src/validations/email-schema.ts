import { z } from 'zod';

export const emailSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('E-mail é obrigatório'),
  phone: z.string().min(11, 'Telefone é obrigatório'),
  message: z.string().min(1, 'Mensagem é obrigatório'),
});

export type EmailSchema = z.infer<typeof emailSchema>;
