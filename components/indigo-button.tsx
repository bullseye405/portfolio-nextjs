import { cn } from '@/lib/utils';
import { Button, ButtonProps } from './ui/button';

const IndigoButton = ({ className, ...rest }: ButtonProps) => {
  const defaultClassName =
    'text-white bg-indigo-500 hover:bg-indigo-600 rounded-md focus-ring-indigo-900 duration-500';

  return <Button className={cn(defaultClassName, className)} {...rest} />;
};

export default IndigoButton;
