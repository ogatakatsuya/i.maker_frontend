// This file is auto-generated by @hey-api/openapi-ts

export type AddQuestionRequest = {
	content: string;
	hint: string;
	answers: Array<string>;
};

export type AddQuestionResponse = {
	message: string;
};

export type Answers = {
	id: number;
	content: string;
};

export type CreateGroupRequest = {
	name: string;
};

export type CreateQuizSetRequest = {
	title: string;
	description: string;
};

export type CreateQuizSetResponse = {
	title: string;
	description: string;
	id: number;
};

export type DeleteQuizSetResponse = {
	message: string;
};

export type GetGroupsByQuizSetIdResponse = {
	groups: Array<GroupSchema>;
};

export type GetGroupsResponse = {
	groups: Array<GroupSchema>;
};

export type GetQuizSetResponse = {
	id: number;
	title: string;
	questions: Array<Questions>;
};

export type GetQuizSetsResponse = {
	quiz_sets: Array<CreateQuizSetResponse>;
};

export type GroupSchema = {
	name: string;
	score: number | null;
	quiz_set_id: number;
	id: number;
	played_at: string;
};

export type HTTPValidationError = {
	detail?: Array<ValidationError>;
};

export type Questions = {
	id: number;
	content: string;
	hint: string;
	answers: Array<Answers>;
};

export type RegisterScoreRequest = {
	value: number;
};

export type RegisterScoreResponse = {
	message: string;
};

export type ValidationError = {
	loc: Array<string | number>;
	msg: string;
	type: string;
};

export type GetQuizSetsQuizSetsGetResponse = GetQuizSetsResponse;

export type GetQuizSetsQuizSetsGetError = unknown;

export type CreateQuizSetQuizSetsPostData = {
	body: CreateQuizSetRequest;
};

export type CreateQuizSetQuizSetsPostResponse = CreateQuizSetResponse;

export type CreateQuizSetQuizSetsPostError = HTTPValidationError;

export type GetQuizSetQuizSetsQuizSetIdGetData = {
	path: {
		quiz_set_id: number;
	};
};

export type GetQuizSetQuizSetsQuizSetIdGetResponse = GetQuizSetResponse;

export type GetQuizSetQuizSetsQuizSetIdGetError = HTTPValidationError;

export type DeleteQuizSetQuizSetsQuizSetIdDeleteData = {
	path: {
		quiz_set_id: number;
	};
};

export type DeleteQuizSetQuizSetsQuizSetIdDeleteResponse =
	DeleteQuizSetResponse;

export type DeleteQuizSetQuizSetsQuizSetIdDeleteError = HTTPValidationError;

export type AddQuestionQuestionQuizSetIdPostData = {
	body: AddQuestionRequest;
	path: {
		quiz_set_id: number;
	};
};

export type AddQuestionQuestionQuizSetIdPostResponse = AddQuestionResponse;

export type AddQuestionQuestionQuizSetIdPostError = HTTPValidationError;

export type GetGroupsGroupsGetResponse = GetGroupsResponse;

export type GetGroupsGroupsGetError = unknown;

export type GetGroupsByQuizSetIdGroupsQuizSetIdGetData = {
	path: {
		quiz_set_id: number;
	};
};

export type GetGroupsByQuizSetIdGroupsQuizSetIdGetResponse =
	GetGroupsByQuizSetIdResponse;

export type GetGroupsByQuizSetIdGroupsQuizSetIdGetError = HTTPValidationError;

export type RegisterGroupGroupsQuizSetIdPostData = {
	body: CreateGroupRequest;
	path: {
		quiz_set_id: number;
	};
};

export type RegisterGroupGroupsQuizSetIdPostResponse = unknown;

export type RegisterGroupGroupsQuizSetIdPostError = HTTPValidationError;

export type RegisterScoreGroupsGroupIdPutData = {
	body: RegisterScoreRequest;
	path: {
		group_id: number;
	};
};

export type RegisterScoreGroupsGroupIdPutResponse = RegisterScoreResponse;

export type RegisterScoreGroupsGroupIdPutError = HTTPValidationError;
