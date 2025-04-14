'use client';

import { useState } from 'react';
import { MainHeader } from '@/components/index';

// interface GlobalStates {
// 	credit: number;
// 	setCredit: number;
// }

export default function MainLayout() {
	const [credit, setCredit] = useState<number>(1000);

	const changeCredit = (n: number): void => setCredit(n < 0 ? 0 : n);

	return (
		<>
			<MainHeader credit={credit} />
		</>
	);
}
