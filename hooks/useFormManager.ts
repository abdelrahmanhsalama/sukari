import { useEffect, useState } from "react";

export const useFormManager = () => {
  const calculateCurrentTime = () => {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    return now.toISOString().slice(0, 16);
  };

  const [time, setTime] = useState<string>(calculateCurrentTime);
  const [fieldsDisabled, setFieldsDisabled] = useState<boolean>(false);
  const [success, setSuccess] = useState<string>("");
  const [error, setError] = useState<string>("");

  const runSequence = (
    type: "success" | "error",
    msg: string = "Saved!",
    setInputState: (emptyState: string) => void,
    setSelectState: (emptyState: string) => void,
  ) => {
    setFieldsDisabled(true);
    setInputState("");
    setSelectState("none");
    setTime(calculateCurrentTime);

    if (type === "success") {
      setSuccess(msg);
      setError("");
    } else {
      setError(msg);
      setSuccess("");
    }
  };

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess("");
        setError("");
        setFieldsDisabled(false);
        setTime(calculateCurrentTime());
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [success, error]);

  const valueInvalid = (value: string) => {
    if (Number(value) <= 0) {
      return true;
    }
    return false;
  };

  return {
    time,
    setTime,
    fieldsDisabled,
    success,
    error,
    runSequence,
    valueInvalid,
  };
};
