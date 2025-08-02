import { z } from 'zod';

export const emailSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(8, 'Telefone inválido'),
  message: z.string().min(5, 'Mensagem muito curta'),
});

export type EmailSchema = z.infer<typeof emailSchema>;
