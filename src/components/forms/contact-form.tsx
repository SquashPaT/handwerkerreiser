import { useMemo, useState } from "react"
import type { TFunction } from "i18next"
import { useTranslation } from "react-i18next"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { SERVICE_IDS, services } from "@/lib/content"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const createContactSchema = (t: TFunction) =>
  z.object({
    name: z
      .string()
      .min(2, t("contactForm.name.error")),
    email: z.string().email(t("contactForm.email.error")),
    phone: z
      .string()
      .min(7, t("contactForm.phone.error"))
      .regex(/^[0-9+\/\s-]+$/, t("contactForm.phone.error")),
    service: z.enum(SERVICE_IDS),
    message: z
      .string()
      .min(10, t("contactForm.message.error")),
    terms: z.boolean().refine((value) => value === true, {
      message: t("contactForm.terms.error"),
    }),
  })

export type ContactFormValues = z.infer<ReturnType<typeof createContactSchema>>

type ContactFormProps = {
  onSubmitSuccess?: (values: ContactFormValues) => void
}

export function ContactForm({ onSubmitSuccess }: ContactFormProps) {
  const { t } = useTranslation()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const schema = useMemo(() => createContactSchema(t), [t])
  const resolver = useMemo(() => zodResolver(schema), [schema])

  const form = useForm<ContactFormValues>({
    resolver,
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: services[0]!.id,
      message: "",
      terms: false,
    },
    mode: "onBlur",
  })

  const selectedServiceId = form.watch("service")
  const selectedService = services.find(
    (service) => service.id === selectedServiceId,
  )

  const handleSubmit = (values: ContactFormValues) => {
    console.table(values)
    onSubmitSuccess?.(values)
    setIsSubmitted(true)
    form.reset({ ...values, message: "", terms: false })
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <Form {...form}>
      <form
        className="space-y-6"
        onSubmit={form.handleSubmit(handleSubmit)}
        noValidate
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("contactForm.name.label")}</FormLabel>
              <FormControl>
                <Input placeholder={t("contactForm.name.placeholder") ?? undefined} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("contactForm.email.label")}</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder={t("contactForm.email.placeholder") ?? undefined}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("contactForm.phone.label")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("contactForm.phone.placeholder") ?? undefined} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("contactForm.service.label")}</FormLabel>
              <FormControl>
                <select
                  {...field}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {t(service.titleKey)}
                    </option>
                  ))}
                </select>
              </FormControl>
              {selectedService ? (
                <FormDescription>{t(selectedService.descriptionKey)}</FormDescription>
              ) : null}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("contactForm.message.label")}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t("contactForm.message.placeholder") ?? undefined}
                  rows={5}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem className="space-y-0">
              <div className="flex items-center gap-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={(checked) => field.onChange(checked === true)}
                  />
                </FormControl>
                <div className="space-y-1 leading-tight">
                  <FormLabel className="font-normal text-sm">
                    {t("contactForm.terms.label")}
                  </FormLabel>
                </div>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full" size="lg" type="submit">
          {t("contactForm.submit")}
        </Button>

        {isSubmitted ? (
          <p className="text-center text-sm font-medium text-primary">
            {t("contactForm.success")}
          </p>
        ) : null}
      </form>
    </Form>
  )
}
