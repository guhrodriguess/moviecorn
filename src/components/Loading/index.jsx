// React Hooks
import { useState, useEffect } from "react";

// Styles
import { LoadingContainer, LoadingLogo } from "./styles";

// Icon
import { CircleNotch } from "phosphor-react";

export default function Loading() {
  const [loading, setLoading] = useState(true);

  const loadingScroll = () => {
    if (!loading) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  useEffect(() => {
    loadingScroll();

    const timeoutId = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto";
    }, 1700);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingContainer>
          <LoadingLogo>
            <h1>
              Movie<span>Corn</span>
            </h1>
            <CircleNotch weight="bold" size={32} className="icon" />
          </LoadingLogo>
        </LoadingContainer>
      ) : (
        ""
      )}
    </>
  );
}
