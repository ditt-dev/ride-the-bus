'use client';

import { useState } from 'react';
import { MainBody, MainHeader } from '@/components/index';

// interface GlobalStates {
// 	credit: number;
// 	setCredit: number;
// }

interface Props {
	children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
	const [credit, setCredit] = useState<number>(1000);

	const changeCredit = (n: number): void => setCredit(n < 0 ? 0 : n);

	return (
		<>
			<MainHeader credit={credit} />

			<MainBody>{children}</MainBody>
		</>
	);
}
