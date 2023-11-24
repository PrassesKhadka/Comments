import { useState } from "react";
import { Comment } from "../dummyData";

interface Props {
	onComment: (newComment: Comment) => void;
}

const CommentInput = ({ onComment }: Props) => {
	const [commentBody, setCommentBody] = useState<string>("");

	return (
		<div className="flex flex-col mt-4 outline-1 w-3/4  focus:border-black focuss:border-[1px]">
			<textarea
				value={commentBody}
				onChange={(event) => setCommentBody(event.target.value)}
				placeholder="What are your thoughts?"
				className="border-t-[1px] border-l-[1px] border-r-[1px] border-slate-300 rounded-sm p-4"
			/>
			<div className="bg-zinc-100 p-2 border-[1px] border-slate-300">
				{commentBody ? (
					<button
						type="submit"
						onClick={() => {
							onComment({ body: commentBody, comments: [] });
							setCommentBody("");
						}}
						className=" rounded-full  pt-1 pb-1 pr-4 pl-4 font-semibold text-white bg-blue-600 hover:bg-blue-500">
						Comment
					</button>
				) : (
					<button
						type="submit"
						className=" rounded-full  pt-1 pb-1 pr-4 pl-4 font-semibold text-zinc-400 bg-zinc-500 hover:bg-zinc-600 hover:cursor-not-allowed">
						Comment
					</button>
				)}
			</div>
		</div>
	);
};

export default CommentInput;
