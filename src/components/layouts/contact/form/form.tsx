'use client';

import { Input } from '@/components/ui/input/input';
import { Textarea } from '@/components/ui/textarea/textarea';
import { emailSchema, EmailSchema } from '@/validations/email-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

interface IFormProps {
  t: any;
}

export const Form = ({ t }: IFormProps) => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<EmailSchema>({
    resolver: zodResolver(emailSchema),
  });

  const onSubmit = (data: EmailSchema) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-6">
      <Input
        label={t('name')}
        placeholder={t('name')}
        type="text"
        {...register('name')}
        errors={errors.name}
      />
      <Input
        label={t('email')}
        placeholder={t('email')}
        type="email"
        {...register('email')}
        errors={errors.email}
      />
      <Input
        label={t('phone')}
        placeholder={t('phone')}
        type="text"
        {...register('phone')}
        errors={errors.phone}
      />
      <Textarea
        label={t('message')}
        placeholder={t('message')}
        {...register('message')}
      />

      <button
        type="submit"
        className="bg-gradient-to-br from-primary-green via-second-green to-tertiary-green px-1 py-2 sm:w-44 w-full border-none rounded-full transition duration-300 flex items-center justify-center hover:from-tertiary-green hover:via-second-green hover:to-primary-green mt-8"
      >
        <p className="text-primary-black font-semibold text-base">
          {isSubmitting ? t('sending') : t('button_send')}
        </p>
      </button>
    </form>
  );
};
