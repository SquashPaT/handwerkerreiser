import { useState } from "react"
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

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Bitte gib deinen vollständigen Namen an."),
  email: z.string().email("Bitte gib eine gültige E-Mail-Adresse an."),
  phone: z
    .string()
    .min(7, "Bitte gib eine Telefonnummer mit mindestens 7 Zeichen an.")
    .regex(/^[0-9+\/\s-]+$/, "Bitte verwende nur Ziffern sowie +, -, / oder Leerzeichen."),
  service: z.enum(SERVICE_IDS),
  message: z
    .string()
    .min(10, "Beschreibe dein Projekt bitte etwas ausführlicher."),
  terms: z.boolean().refine((value) => value === true, {
    message: "Bitte bestätige die Datenschutzhinweise.",
  }),
})

export type ContactFormValues = z.infer<typeof contactSchema>

type ContactFormProps = {
  onSubmitSuccess?: (values: ContactFormValues) => void
}

export function ContactForm({ onSubmitSuccess }: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
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
              <FormLabel>Vor- und Nachname</FormLabel>
              <FormControl>
                <Input placeholder="Max Mustermann" {...field} />
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
                <FormLabel>E-Mail-Adresse</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="mail@handwerker.de" {...field} />
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
                <FormLabel>Telefonnummer</FormLabel>
                <FormControl>
                  <Input placeholder="+49 151 1234567" {...field} />
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
              <FormLabel>Gewünschte Leistung</FormLabel>
              <FormControl>
                <select
                  {...field}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </FormControl>
              {selectedService ? (
                <FormDescription>{selectedService.description}</FormDescription>
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
              <FormLabel>Projektbeschreibung</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Welche Räume sollen renoviert werden? Wunschtermin, Besonderheiten..."
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
                    Ich stimme der Verarbeitung meiner Angaben zum Zweck der Kontaktaufnahme zu.
                  </FormLabel>
                </div>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full" size="lg" type="submit">
          Anfrage senden
        </Button>

        {isSubmitted ? (
          <p className="text-center text-sm font-medium text-primary">
            Danke für deine Anfrage! Wir melden uns innerhalb eines Werktags.
          </p>
        ) : null}
      </form>
    </Form>
  )
}
