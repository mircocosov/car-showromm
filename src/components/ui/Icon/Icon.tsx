import { useMemo } from "react";
import classNames from "classnames";
import styles from "./Icon.module.scss";

interface Props {
  className?: string;
  icon:
    | "times"
    | "check"
    | "chevronRight"
    | "chevronLeft"
    | "chevronUp"
    | "chevronDown"
    | "loading"
    | "clock"
    | "calendar";
}

export default function Icon({ icon, className }: Props) {
  const Icon = useMemo(() => {
    switch (icon) {
      case "times":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6.5L6 18.5"
              stroke="#4F4F4F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 6.5L18 18.5"
              stroke="#4F4F4F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        );
      case "check":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.2249 5.86963L9.22485 16.8696L4.22485 11.8696"
              stroke="#1A1230"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        );
      case "chevronRight":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="#4F4F4F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        );
      case "chevronLeft":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 6L9 12L15 18"
              stroke="#4F4F4F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        );
      case "chevronUp":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 15L12 9L6 15"
              stroke="#4F4F4F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        );
      case "chevronDown":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="#4F4F4F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        );
      case "loading":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2V6"
              stroke="#1A1230"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 18V22"
              stroke="#1A1230"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.92999 4.92993L7.75999 7.75993"
              stroke="#1A1230"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.24 16.24L19.07 19.07"
              stroke="#1A1230"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2 12H6"
              stroke="#1A1230"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18 12H22"
              stroke="#1A1230"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.92999 19.07L7.75999 16.24"
              stroke="#1A1230"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.24 7.75993L19.07 4.92993"
              stroke="#1A1230"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        );
      case "clock":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="#1A1230"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 6V12L16 14"
              stroke="#1A1230"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        );
      case "calendar":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
              stroke="#1A1230"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 2V6"
              stroke="#1A1230"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 2V6"
              stroke="#1A1230"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 10H21"
              stroke="#1A1230"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        );
      default:
        return null;
    }
  }, [icon]);

  if (!Icon) {
    return null;
  }

  return "";

  // <div className={classNames(styles.container, className, "icon")}>
  //   <Icon />
  // </div>
}
