"use client";
import { useState } from "react";
import CommentInput from "./Components/CommentInput";
import CommentBox from "./Components/CommentBox";
import { Comment } from "./dummyData";
import { dummyComments } from "./dummyData";

export default function Home() {
	const [comments, setComments] = useState(dummyComments);

	const onComment = (newComment: Comment) => {
		if (newComment.body != "") {
			setComments((prev) => [...prev, newComment]);
			console.log(comments);
		}
	};

	return (
		<div className="h-screen flex flex-col  px-6 m-4">
			<CommentInput onComment={onComment} />

			<div className="flex flex-col  mt-10">
				{comments.map((comment,index) => (
					<CommentBox key={index} comment={comment} />
				))}
			</div>
		</div>
	);
}
