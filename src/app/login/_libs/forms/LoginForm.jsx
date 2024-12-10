"use client";

import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";

import { Checkbox } from "@/components/ui/checkbox";
import { Toast, ToastAction } from "@/components/ui/toast";
import { FloatingLabelInput } from "@/components/ui/floating-label-input";
import Link from "next/link";
import { useTranslations } from "next-intl";



function LoginForm() {
  const [loading, setLoading] = useState(false);
  const TAuth = useTranslations('Auth');

  const { toast } = useToast();

  const formSchema = z.object({
    email: z
      .string()
      .email(TAuth("emailInvalid")) 
      .min(1, TAuth("emailRequired")), 
    password: z
      .string()
      .min(6, TAuth("passwordTooShort")) 
      .min(1, TAuth("passwordRequired")), 
  
  })

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values) {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      toast({
        title: (
          <pre className="mt-2 w-[250px] rounded-md bg-slate-950 p-2">
            <code className="text-green-400">{TAuth("LoginSuccessful")}</code>
          </pre>
        ),
      });
    }, 1000);
  }

  return (
    <div className="flex flex-col items-center justify-center py-3">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 max-w-sm w-full"
        >
          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FloatingLabelInput {...field} id="email" label={TAuth('email')} />
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password Field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FloatingLabelInput {...field} id="password" label={TAuth('password')} />
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Checkbox id="terms1" />
              <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {TAuth('rememberMe')}
              </label>
            </div>
            <Link href={"/forgot-password"}>
              <p className="text-sm font-medium text-primary leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              {TAuth('forgotPassword')}
              </p>
            </Link>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full" disabled={loading}>
          { loading ? TAuth('LoggingIn') : TAuth('login') }

          </Button>
        </form>
      </Form>
    </div>
  );
}

export default LoginForm;
