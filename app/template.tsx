'use client';

import MainHeader from '@/app/_components/MainHeader';

import { useState } from 'react';

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
