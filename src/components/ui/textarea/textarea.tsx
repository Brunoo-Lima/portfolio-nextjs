import { forwardRef } from 'react';

interface ITextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  placeholder: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, ITextareaProps>(
  ({ label, placeholder, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <label className="text-white font-semibold text-base">{label}</label>
        <textarea
          {...props}
          ref={ref}
          placeholder={placeholder}
          className="p-2 rounded-md border-[1px] border-primary-gray outline-none bg-[#121212] transition duration-300 focus-visible:border-second-green"
        />
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
