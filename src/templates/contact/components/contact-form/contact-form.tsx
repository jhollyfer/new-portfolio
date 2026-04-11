"use client";

import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { useActionState, useEffect, useId, useRef } from "react";

import { sendContactMessage } from "@/app/actions/contact";
import { cn, focusRing } from "@/lib/utils";
import type { ContactState } from "@/lib/types";

const INITIAL_STATE: ContactState = { status: "idle" };

interface FieldProps {
  id: string;
  name: "name" | "email" | "message";
  label: string;
  placeholder: string;
  error?: string;
  errorNamespace: ReturnType<typeof useTranslations>;
  defaultValue?: string;
  type?: "text" | "email";
  multiline?: boolean;
  autoComplete?: string;
  inputMode?: "text" | "email";
}

function Field({
  id,
  name,
  label,
  placeholder,
  error,
  errorNamespace,
  defaultValue,
  type = "text",
  multiline = false,
  autoComplete,
  inputMode,
}: FieldProps): React.JSX.Element {
  const errorId = `${id}-error`;
  const commonClasses = cn(
    "peer block w-full rounded-lg border border-border bg-[var(--bezel-shell-bg)] px-4 pt-6 pb-2 text-sm text-foreground placeholder-transparent transition-colors",
    "focus-visible:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
    error && "border-destructive/70",
  );

  return (
    <div className="relative">
      {multiline ? (
        <textarea
          id={id}
          name={name}
          rows={5}
          defaultValue={defaultValue}
          placeholder={placeholder}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className={cn(commonClasses, "resize-y min-h-[160px]")}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          defaultValue={defaultValue}
          placeholder={placeholder}
          autoComplete={autoComplete}
          inputMode={inputMode}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className={commonClasses}
        />
      )}
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-2 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-muted-foreground/70 peer-focus-visible:top-2 peer-focus-visible:text-[0.6875rem] peer-focus-visible:uppercase peer-focus-visible:tracking-[0.14em] peer-focus-visible:text-primary"
      >
        {label}
      </label>
      {error ? (
        <p
          id={errorId}
          className="mt-2 text-xs text-destructive"
          aria-live="polite"
        >
          {errorNamespace(error)}
        </p>
      ) : null}
    </div>
  );
}

export function ContactForm(): React.JSX.Element {
  const t = useTranslations("contact");
  const te = useTranslations("contact.errors");
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();
  const formRef = useRef<HTMLFormElement | null>(null);

  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    INITIAL_STATE,
  );

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div className="bezel-shell">
        <div className="bezel-core flex flex-col items-start gap-6 p-8 md:p-10">
          <span className="section-badge">
            <CheckCircle2 aria-hidden className="size-5" />
          </span>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold tracking-tight">
              {t("success.title")}
            </h2>
            <p className="max-w-md text-pretty text-sm text-muted-foreground">
              {t("success.description")}
            </p>
          </div>
          <form action={formAction}>
            <button
              type="submit"
              name="_reset"
              value="1"
              className={cn("cta-ghost", focusRing)}
            >
              {t("success.another")}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="bezel-shell">
      <div className="bezel-core p-8 md:p-10">
        <header className="mb-8 flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-tight">
            {t("formTitle")}
          </h2>
          <p className="text-sm text-muted-foreground">
            {t("formDescription")}
          </p>
        </header>

        <form ref={formRef} action={formAction} className="flex flex-col gap-5" noValidate>
          <Field
            id={nameId}
            name="name"
            label={t("nameLabel")}
            placeholder={t("namePlaceholder")}
            error={state.errors?.name}
            errorNamespace={te}
            defaultValue={state.values?.name}
            autoComplete="name"
          />
          <Field
            id={emailId}
            name="email"
            type="email"
            label={t("emailLabel")}
            placeholder={t("emailPlaceholder")}
            error={state.errors?.email}
            errorNamespace={te}
            defaultValue={state.values?.email}
            autoComplete="email"
            inputMode="email"
          />
          <Field
            id={messageId}
            name="message"
            label={t("messageLabel")}
            placeholder={t("messagePlaceholder")}
            error={state.errors?.message}
            errorNamespace={te}
            defaultValue={state.values?.message}
            multiline
          />

          {state.errors?.form ? (
            <p role="alert" className="text-sm text-destructive">
              {t("errors.form")}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={pending}
            className={cn(
              "cta-pill mt-2 w-full justify-center disabled:cursor-not-allowed disabled:opacity-70",
              focusRing,
            )}
          >
            {pending ? (
              <>
                <Loader2 aria-hidden className="size-4 animate-spin" />
                {t("submitting")}
              </>
            ) : (
              <>
                {t("submit")}
                <span className="cta-pill__icon">
                  <Send aria-hidden className="size-4" />
                </span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
