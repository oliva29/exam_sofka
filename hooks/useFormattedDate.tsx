import { useMemo } from "react";

interface DateFormatOptions {
  year?: string | "numeric" | "2-digit";
  month?: string | "numeric" | "2-digit" | "long" | "short" | "narrow";
  day?: string | "numeric" | "2-digit";
  hour?: string | "numeric" | "2-digit";
  minute?: string | "numeric" | "2-digit";
  second?: string | "numeric" | "2-digit";
  timeZoneName?: string | "short" | "long";
}

interface UseFormattedDateProps {
  date?: string;
  options?: DateFormatOptions;
}

const useFormattedDate = ({ date, options }: UseFormattedDateProps) => {
  return useMemo(() => {
    try {
      if (!date) return null;
      const dateObject = new Date(date);
      const formatter = new Intl.DateTimeFormat("en-US", options);
      return formatter.format(dateObject);
    } catch (error) {
      console.error("Error formatting date:", error);
      return "";
    }
  }, [date, options]);
};

export default useFormattedDate;
