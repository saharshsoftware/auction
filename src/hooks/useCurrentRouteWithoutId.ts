import { useLocation } from "react-router-dom";

export default function useCurrentRouteWithoutId() {
  const location = useLocation();
  const { pathname } = location;

  // Check if the pathname has an ID at the end
  const parts = pathname.split("/");
  const lastPart = parts[parts.length - 1];
  const hasId = !isNaN(parseInt(lastPart));

  // If there's an ID, return the pathname without the ID, else return the original pathname
  if (hasId) {
    return parts.slice(0, -1).join("/");
  } else {
    return pathname;
  }
}
