import { useState, useEffect, useRef, RefObject } from 'react';

interface UseSimpleInViewOptions {
  triggerOnce?: boolean;
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
}

export const useSimpleInView = <T extends HTMLElement>(
  options?: UseSimpleInViewOptions
): [RefObject<T>, boolean] => {
  const [inView, setInView] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (options?.triggerOnce && currentRef) {
            observer.unobserve(currentRef);
          }
        } else {
          if (!options?.triggerOnce) {
            setInView(false);
          }
        }
      },
      {
        threshold: options?.threshold === undefined ? 0.1 : options.threshold, // Ensure threshold has a default
        root: options?.root,
        rootMargin: options?.rootMargin,
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options?.threshold, options?.triggerOnce, options?.root, options?.rootMargin]);

  return [ref, inView];
};