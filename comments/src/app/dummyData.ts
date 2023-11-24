export interface Comment {
	body: string;
	comments: Comment[];
}

export const dummyComments: Comment[] = [
	{
		body: "This is reply 1",
		comments: [
			{ body: "This is reply to reply 1", comments: [] },
			{
				body: "This is another reply to reply 1",
				comments: [
					{ body: "This is reply to second reply of reply 1", comments: [] },
				],
			},
		],
	},
	{
		body: "This is reply 2",
		comments: [],
	},
];
