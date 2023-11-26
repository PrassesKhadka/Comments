import { useState } from "react";
import { Comment } from "../dummyData";
import CommentInput from "./CommentInput";

interface Props {
	comment: Comment;
}

const CommentBox = ({ comment }: Props) => {
	const [isReplying, setIsReplying] = useState(false);
	const [comments, setComments] = useState<Comment[]>(comment.comments);

	const onComment = (newComment: Comment) => {
		if (newComment.body != "") {
			setComments((prev) => [...prev, newComment]);
			setIsReplying(false);
		}
	};

	return (
		<div className="flex flex-col border-l-[1px] border-zinc-500 rounded-md p-6">
			<div>
				<div className="rounded-[50%] ml-[-40px] mt-[-25px] bg-black w-[30px] h-[30px]">
					<span className="ml-[40px] font-bold text-xl">Prasses</span>
				</div>
			</div>

			<span className="text-xl text-left p-2">{comment.body}</span>

			{isReplying && <CommentInput onComment={onComment} />}

			{isReplying ? (
				<button
					onClick={() => setIsReplying(false)}
					className="rounded-full  pt-1 pb-1 pr-4 pl-4 font-semibold text-white bg-red-600 hover:bg-red-500 w-20 mt-3">
					Cancel
				</button>
			) : (
				<button
					onClick={() => setIsReplying(true)}
					className="rounded-full  pt-1 pb-1 pr-4 pl-4 font-semibold text-white bg-green-600 hover:bg-green-500 w-20 mt-3">
					Reply
				</button>
			)}
			{comments.length != 0 && (
				<div className="flex flex-col my-3">
					{comments.map((comment,index) => (
						<CommentBox key={index} comment={comment} />
					))}
				</div>
			)}
		</div>
	);
};

export default CommentBox;
