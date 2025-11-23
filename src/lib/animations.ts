import { browser } from '$app/environment';

const prefersReducedMotion = () => {
	if (!browser) return false;
	return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

interface AnimateOnMountOptions {
	delay?: number;
	stagger?: number;
	duration?: number;
}

interface AnimateOnScrollOptions {
	delay?: number;
	stagger?: number;
	duration?: number;
	start?: string;
	once?: boolean;
}

export function animateOnMount(
	node: HTMLElement,
	options: AnimateOnMountOptions = {}
) {
	if (!browser) return {};

	const { delay = 0, stagger = 0.1, duration = 0.8 } = options;

	if (prefersReducedMotion()) {
		return {};
	}

	// Dynamically import GSAP only on the client
	import('gsap').then(({ default: gsap }) => {
		const children = node.children;
		const elements = children.length > 0 ? Array.from(children) : [node];

		gsap.set(elements, {
			opacity: 0,
			y: 30,
		});

		gsap.to(elements, {
			opacity: 1,
			y: 0,
			duration,
			delay,
			stagger,
			ease: 'power3.out',
		});
	});

	return {
		destroy() {
			import('gsap').then(({ default: gsap }) => {
				const children = node.children;
				const elements = children.length > 0 ? Array.from(children) : [node];
				gsap.killTweensOf(elements);
			});
		},
	};
}

export function animateOnScroll(
	node: HTMLElement,
	options: AnimateOnScrollOptions = {}
) {
	if (!browser) return {};

	const {
		delay = 0,
		stagger = 0.1,
		duration = 0.8,
		start = 'top 85%',
		once = true,
	} = options;

	if (prefersReducedMotion()) {
		return {};
	}

	let timeline: any;

	// Dynamically import GSAP and ScrollTrigger only on the client
	Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(
		([{ default: gsap }, { ScrollTrigger }]) => {
			gsap.registerPlugin(ScrollTrigger);

			const children = node.children;
			const elements = children.length > 0 ? Array.from(children) : [node];

			gsap.set(elements, {
				opacity: 0,
				y: 30,
			});

			timeline = gsap.timeline({
				scrollTrigger: {
					trigger: node,
					start,
					once,
				},
			});

			timeline.to(elements, {
				opacity: 1,
				y: 0,
				duration,
				delay,
				stagger,
				ease: 'power3.out',
			});
		}
	);

	return {
		destroy() {
			if (timeline) {
				timeline.kill();
			}
			import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
				ScrollTrigger.getAll().forEach((st: any) => {
					if (st.trigger === node) {
						st.kill();
					}
				});
			});
		},
	};
}

