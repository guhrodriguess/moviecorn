// React Hooks
import { useState, useEffect } from "react";

// Styles
import { LoadingContainer, LoadingLogo } from "./styles";

// TypeWriter
import TypeWriter from "typewriter-effect";

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
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingContainer>
          <LoadingLogo>
            <span>
              <TypeWriter
                options={{
                  strings: ["MovieCorn"],
                  autoStart: true,
                }}
              />
            </span>
          </LoadingLogo>
        </LoadingContainer>
      ) : (
        ""
      )}
    </>
  );
}
