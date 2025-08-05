'use client';

import { IContact } from '@/@types/IContact';
import { Input } from '@/components/ui/input/input';
import { Textarea } from '@/components/ui/textarea/textarea';
import { formatPhone } from '@/utils/format-phone';
import { emailSchema, EmailSchema } from '@/validations/email-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';

interface IFormProps {
  t: any;
}

const Form = ({ t }: IFormProps) => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    control,
    reset,
  } = useForm<EmailSchema>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = async (data: EmailSchema) => {
    const allData: IContact = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    };

    const sendData = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(allData),
    };

    try {
      const response = await fetch('/api/send-email', sendData);

      if (response) {
        toast.success('Email enviado com sucesso!');
        reset();
      }
    } catch (error) {
      console.error(error);
      toast.error('Ocorreu um erro tente novamente mais tarde');
    }
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

      <Controller
        control={control}
        name="phone"
        render={({ field }) => (
          <Input
            label={t('phone')}
            placeholder={t('phone')}
            type="tel"
            {...field}
            value={formatPhone(field.value || '')}
            onChange={(e) => field.onChange(e.target.value)}
            inputMode="numeric"
            maxLength={15}
            errors={errors.phone}
          />
        )}
      />

      <Textarea
        label={t('message')}
        placeholder={t('message')}
        {...register('message')}
        errors={errors.message}
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

export default Form;
