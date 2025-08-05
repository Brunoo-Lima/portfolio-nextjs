import { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  errors?: FieldError;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ label, placeholder, errors, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <label className="text-white font-semibold text-base">{label}</label>
        <input
          {...props}
          ref={ref}
          placeholder={placeholder}
          className="p-2 rounded-md border-[1px] border-primary-gray outline-none bg-[#121212] transition duration-300 focus-visible:border-second-green"
        />

        {errors && (
          <span className="text-red-500 text-sm">{errors.message}</span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
