import { useEffect, useState } from "react";

export const useFormManager = () => {
  const calculateCurrentTime = () => {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    return now.toISOString().slice(0, 16);
  };

  const [time, setTime] = useState<string>(calculateCurrentTime);
  const [fieldsDisabled, setFieldsDisabled] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const runSequence = (
    type: "success" | "error",
    msg: string,
    setInputState: (emptyState: string) => void,
    setSelectState: (emptyState: string) => void,
  ) => {
    setFieldsDisabled(true);
    setInputState("");
    setSelectState("none");
    setTime(calculateCurrentTime);

    if (type === "success") {
      setSuccessMessage(msg);
      setErrorMessage("");
    } else {
      setErrorMessage(msg);
      setSuccessMessage("");
    }
  };

  useEffect(() => {
    if (successMessage || errorMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
        setFieldsDisabled(false);
        setTime(calculateCurrentTime());
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [successMessage, errorMessage]);

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
    successMessage,
    errorMessage,
    runSequence,
    valueInvalid,
  };
};
