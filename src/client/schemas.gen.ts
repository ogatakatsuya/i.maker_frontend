// This file is auto-generated by @hey-api/openapi-ts

export const AddQuestionRequestSchema = {
	properties: {
		content: {
			type: "string",
			title: "Content",
		},
		hint: {
			type: "string",
			title: "Hint",
		},
		answers: {
			items: {
				type: "string",
			},
			type: "array",
			title: "Answers",
		},
	},
	type: "object",
	required: ["content", "hint", "answers"],
	title: "AddQuestionRequest",
} as const;

export const AddQuestionResponseSchema = {
	properties: {
		message: {
			type: "string",
			title: "Message",
		},
	},
	type: "object",
	required: ["message"],
	title: "AddQuestionResponse",
} as const;

export const AnswersSchema = {
	properties: {
		id: {
			type: "integer",
			title: "Id",
		},
		content: {
			type: "string",
			title: "Content",
		},
	},
	type: "object",
	required: ["id", "content"],
	title: "Answers",
} as const;

export const CreateGroupRequestSchema = {
	properties: {
		name: {
			type: "string",
			title: "Name",
		},
		member_num: {
			type: "integer",
			title: "Member Num",
		},
	},
	type: "object",
	required: ["name", "member_num"],
	title: "CreateGroupRequest",
} as const;

export const CreateGroupResponseSchema = {
	properties: {
		message: {
			type: "string",
			title: "Message",
		},
	},
	type: "object",
	required: ["message"],
	title: "CreateGroupResponse",
} as const;

export const CreateQuizSetRequestSchema = {
	properties: {
		title: {
			type: "string",
			title: "Title",
		},
		description: {
			type: "string",
			title: "Description",
		},
	},
	type: "object",
	required: ["title", "description"],
	title: "CreateQuizSetRequest",
} as const;

export const CreateQuizSetResponseSchema = {
	properties: {
		title: {
			type: "string",
			title: "Title",
		},
		description: {
			type: "string",
			title: "Description",
		},
		id: {
			type: "integer",
			title: "Id",
		},
	},
	type: "object",
	required: ["title", "description", "id"],
	title: "CreateQuizSetResponse",
} as const;

export const DeleteQuizSetResponseSchema = {
	properties: {
		message: {
			type: "string",
			title: "Message",
		},
	},
	type: "object",
	required: ["message"],
	title: "DeleteQuizSetResponse",
} as const;

export const GetGroupsByQuizSetIdResponseSchema = {
	properties: {
		groups: {
			items: {
				$ref: "#/components/schemas/GroupSchema",
			},
			type: "array",
			title: "Groups",
		},
	},
	type: "object",
	required: ["groups"],
	title: "GetGroupsByQuizSetIdResponse",
} as const;

export const GetGroupsResponseSchema = {
	properties: {
		groups: {
			items: {
				$ref: "#/components/schemas/GroupSchema",
			},
			type: "array",
			title: "Groups",
		},
	},
	type: "object",
	required: ["groups"],
	title: "GetGroupsResponse",
} as const;

export const GetQuizSetResponseSchema = {
	properties: {
		id: {
			type: "integer",
			title: "Id",
		},
		title: {
			type: "string",
			title: "Title",
		},
		description: {
			type: "string",
			title: "Description",
		},
		questions: {
			items: {
				$ref: "#/components/schemas/Questions",
			},
			type: "array",
			title: "Questions",
		},
	},
	type: "object",
	required: ["id", "title", "description", "questions"],
	title: "GetQuizSetResponse",
} as const;

export const GetQuizSetsResponseSchema = {
	properties: {
		quiz_sets: {
			items: {
				$ref: "#/components/schemas/CreateQuizSetResponse",
			},
			type: "array",
			title: "Quiz Sets",
		},
	},
	type: "object",
	required: ["quiz_sets"],
	title: "GetQuizSetsResponse",
} as const;

export const GroupSchemaSchema = {
	properties: {
		name: {
			type: "string",
			title: "Name",
		},
		member_num: {
			type: "integer",
			title: "Member Num",
		},
		score: {
			anyOf: [
				{
					type: "integer",
				},
				{
					type: "null",
				},
			],
			title: "Score",
		},
		quiz_set_id: {
			type: "integer",
			title: "Quiz Set Id",
		},
		id: {
			type: "integer",
			title: "Id",
		},
		played_at: {
			type: "string",
			title: "Played At",
		},
	},
	type: "object",
	required: ["name", "member_num", "score", "quiz_set_id", "id", "played_at"],
	title: "GroupSchema",
} as const;

export const HTTPValidationErrorSchema = {
	properties: {
		detail: {
			items: {
				$ref: "#/components/schemas/ValidationError",
			},
			type: "array",
			title: "Detail",
		},
	},
	type: "object",
	title: "HTTPValidationError",
} as const;

export const QuestionsSchema = {
	properties: {
		id: {
			type: "integer",
			title: "Id",
		},
		content: {
			type: "string",
			title: "Content",
		},
		hint: {
			type: "string",
			title: "Hint",
		},
		answers: {
			items: {
				$ref: "#/components/schemas/Answers",
			},
			type: "array",
			title: "Answers",
		},
	},
	type: "object",
	required: ["id", "content", "hint", "answers"],
	title: "Questions",
} as const;

export const RegisterScoreRequestSchema = {
	properties: {
		value: {
			type: "integer",
			title: "Value",
		},
	},
	type: "object",
	required: ["value"],
	title: "RegisterScoreRequest",
} as const;

export const RegisterScoreResponseSchema = {
	properties: {
		message: {
			type: "string",
			title: "Message",
		},
	},
	type: "object",
	required: ["message"],
	title: "RegisterScoreResponse",
} as const;

export const ValidationErrorSchema = {
	properties: {
		loc: {
			items: {
				anyOf: [
					{
						type: "string",
					},
					{
						type: "integer",
					},
				],
			},
			type: "array",
			title: "Location",
		},
		msg: {
			type: "string",
			title: "Message",
		},
		type: {
			type: "string",
			title: "Error Type",
		},
	},
	type: "object",
	required: ["loc", "msg", "type"],
	title: "ValidationError",
} as const;
