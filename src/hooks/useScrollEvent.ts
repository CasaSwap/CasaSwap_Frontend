import { useCallback, useEffect } from "react";
import { useDebounce } from "./useDebounce";

export const useScrollEvent = (targetId, callback, delay = 300) => {
  const handleScroll = useCallback(() => {
    const wrapper = document.getElementById(targetId);
    if (!wrapper) return;
    const pos = wrapper.getBoundingClientRect().bottom - window.innerHeight;
    callback(pos);
  }, [callback, targetId]);

  const handleFetch = useDebounce(() => {
    handleScroll();
  }, delay);

  useEffect(() => {
    window.addEventListener("scroll", handleFetch);
    return () => window.removeEventListener("scroll", handleFetch);
  }, [handleFetch]);
};
