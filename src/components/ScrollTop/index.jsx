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
        background: "#010735",
        zIndex: "1",
      }}
      color="#e50914"
      width="20px"
      height="20px"
    />
  );
}
