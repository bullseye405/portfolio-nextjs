'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import IndigoButton from '@/components/indigo-button';

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().min(1, { message: 'Email is required' }).email({
    message: 'Must be a valid email',
  }),
  subject: z.string(),
  message: z.string().optional(),
});

const defaultValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log({ data });
  }

  return (
    <div className="w-full lg:w-1/2">
      <div className="leading-loose">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="
            max-w-xl m-4 p-6 sm:p-10
            bg-secondary-light dark:bg-secondary-dark
            rounded-xl shadow-xl text-left
            "
          >
            <p className="font-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
              Contact Form
            </p>

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel className="block text-lg text-primary-dark dark:text-primary-light mb-1">
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your Name"
                      aria-label="Name"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel className="block text-lg text-primary-dark dark:text-primary-light mb-1">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your Email"
                      aria-label="Email"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel className="block text-lg text-primary-dark dark:text-primary-light mb-1">
                    Subject
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Subject" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel className="block text-lg text-primary-dark dark:text-primary-light mb-1">
                    Message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Message"
                      {...field}
                      cols={14}
                      rows={6}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <IndigoButton className="font-medium">Send message</IndigoButton>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
