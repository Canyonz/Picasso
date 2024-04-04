import { MutableRefObject, useEffect } from "react";

interface UseInfiniteScrollOptions {
	triggerRef: MutableRefObject<HTMLElement>;
	wrapperRef: MutableRefObject<HTMLElement>;
	callback: () => void;
}

export const useInfiniteScroll = ({ callback, wrapperRef, triggerRef }: UseInfiniteScrollOptions) => {
	useEffect(() => {
		if (!triggerRef.current) {
			return;
		}

		const options = {
			root: wrapperRef.current,
			rootMargin: "0px",
			threshold: 1.0,
		};

		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				callback();
			}
		}, options);

		observer.observe(triggerRef.current);

		return () => {
			if (observer) {
				// eslint-disable-next-line react-hooks/exhaustive-deps
				observer.unobserve(triggerRef.current);
			}
		};
	}, [callback, triggerRef, wrapperRef]);
};
