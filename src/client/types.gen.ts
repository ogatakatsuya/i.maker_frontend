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
	member_num: number;
};

export type CreateGroupResponse = {
	id: number;
};

export type CreateQuizSetRequest = {
	title: string;
	description: string;
};

export type CreateQuizSetResponse = {
	title: string;
	description: string;
	id: number;
	sub_id: string;
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
	description: string;
	questions: Array<Questions>;
	sub_id: string;
};

export type GetQuizSetsResponse = {
	quiz_sets: Array<CreateQuizSetResponse>;
};

export type GetScoreResponse = {
	score: number;
	name: string;
};

export type GroupSchema = {
	name: string;
	member_num: number;
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
	correct_num: number;
	incorrect_answers_num: number;
	showed_hint_num: number;
	is_time_over: boolean;
};

export type RegisterScoreResponse = {
	message: string;
};

export type ValidationError = {
	loc: Array<string | number>;
	msg: string;
	type: string;
};

export type GetQuizSetsResponse2 = GetQuizSetsResponse;

export type GetQuizSetsError = unknown;

export type CreateQuizSetData = {
	body: CreateQuizSetRequest;
};

export type CreateQuizSetResponse2 = CreateQuizSetResponse;

export type CreateQuizSetError = HTTPValidationError;

export type GetQuizSetData = {
	path: {
		quiz_set_id: number;
	};
};

export type GetQuizSetResponse2 = GetQuizSetResponse;

export type GetQuizSetError = HTTPValidationError;

export type DeleteQuizSetData = {
	path: {
		quiz_set_id: number;
	};
};

export type DeleteQuizSetResponse2 = DeleteQuizSetResponse;

export type DeleteQuizSetError = HTTPValidationError;

export type GetQuizSetBySubIdData = {
	path: {
		sub_id: string;
	};
};

export type GetQuizSetBySubIdResponse = GetQuizSetResponse;

export type GetQuizSetBySubIdError = HTTPValidationError;

export type AddQuestionData = {
	body: AddQuestionRequest;
	path: {
		quiz_set_id: number;
	};
};

export type AddQuestionResponse2 = AddQuestionResponse;

export type AddQuestionError = HTTPValidationError;

export type GetGroupsResponse2 = GetGroupsResponse;

export type GetGroupsError = unknown;

export type GetGroupsByQuizSetIdData = {
	path: {
		quiz_set_id: number;
	};
};

export type GetGroupsByQuizSetIdResponse2 = GetGroupsByQuizSetIdResponse;

export type GetGroupsByQuizSetIdError = HTTPValidationError;

export type RegisterGroupData = {
	body: CreateGroupRequest;
	path: {
		quiz_set_id: number;
	};
};

export type RegisterGroupResponse = CreateGroupResponse;

export type RegisterGroupError = HTTPValidationError;

export type RegisterScoreData = {
	body: RegisterScoreRequest;
	path: {
		group_id: number;
	};
};

export type RegisterScoreResponse2 = RegisterScoreResponse;

export type RegisterScoreError = HTTPValidationError;

export type GetScoreData = {
	path: {
		group_id: number;
	};
};

export type GetScoreResponse2 = GetScoreResponse;

export type GetScoreError = HTTPValidationError;

export type RegisterGroupWithSubIdData = {
	body: CreateGroupRequest;
	path: {
		quiz_set_sub_id: string;
	};
};

export type RegisterGroupWithSubIdResponse = CreateGroupResponse;

export type RegisterGroupWithSubIdError = HTTPValidationError;

export type TestGetResponse = unknown;

export type TestGetError = unknown;
