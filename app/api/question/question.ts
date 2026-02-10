import type { QuestionBaseSchema } from '~/features/question/schema/question.add';
import { instance } from '../instance';
import type { QuestionBaseSchemaWithId } from '~/features/question/context/question';

export const getQuestionMap = async (
	dateAt: string,
): Promise<{
	questionDateMap: Record<string, QuestionBaseSchemaWithId>;
}> =>
	await instance
		.get('question/month', {
			searchParams: {
				dateAt,
			},
		})
		.json();

export const Del = async (id: number) =>
	await instance.delete(`question/${id}`);

export const add = async (data: QuestionBaseSchema) =>
	await instance
		.post('question', {
			json: data,
		})
		.json();

export const edit = async (id: number, data: QuestionBaseSchema) =>
	await instance
		.patch(`question/${id}`, {
			json: data,
		})
		.json();

export const getList = async (
	dateAt: string,
): Promise<{
	questionList: QuestionBaseSchema[];
}> =>
	await instance
		.get(`question`, {
			searchParams: {
				dateAt,
			},
		})
		.json();
