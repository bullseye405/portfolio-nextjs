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
      <div className="bg-secondary-light dark:bg-secondary-dark p-8 sm:p-10 rounded-2xl shadow-2xl max-w-xl mx-auto">
        {/* CTA Header */}
        <h2 className="text-3xl font-bold text-primary-dark dark:text-primary-light mb-2">
          Let’s Work Together
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Have a project or idea? Fill out the form below and I’ll get back to you as soon as possible.
        </p>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary-dark dark:text-primary-light">
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your Name"
                      aria-label="Name"
                      {...field}
                      className="focus:ring-indigo-400"
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
                <FormItem>
                  <FormLabel className="text-primary-dark dark:text-primary-light">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your Email"
                      aria-label="Email"
                      {...field}
                      className="focus:ring-indigo-400"
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
                <FormItem>
                  <FormLabel className="text-primary-dark dark:text-primary-light">
                    Subject
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Subject"
                      {...field}
                      className="focus:ring-indigo-400"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary-dark dark:text-primary-light">
                    Message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Message"
                      {...field}
                      rows={6}
                      className="focus:ring-indigo-400"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="pt-4">
              <IndigoButton className="w-full py-3 text-lg font-semibold hover:scale-105 transition-transform duration-300">
                Send Message
              </IndigoButton>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
