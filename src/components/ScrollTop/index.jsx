// ScrollToTop
import ScrollToTop from "react-scroll-to-top";

export default function ScrollTop() {
  return (
    <ScrollToTop
      smooth
      top="20"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "none",
        background: "#e50914",
        zIndex: "50",
      }}
      color="#080a18"
      width="20px"
      height="20px"
    />
  );
}
