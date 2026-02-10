import { id } from 'date-fns/locale';
import { z } from 'zod';
import type { QuestionType } from '~/types/answer/answer';

export type QuestionBaseSchema = z.infer<typeof questionBaseSchema>;

export type QuestionSchemaWithType = QuestionBaseSchema & {
	type?: QuestionType;
};

export const questionBaseSchema = z.object({
	id: z.number().optional(),
	article: z.string().nullable(),
	title: z.string().min(0), // 또는 .default('')
	subText: z.string().min(0), // 또는 .default('')
	dateAt: z.string(),
	needPhone: z.boolean().optional().default(false),
	needNickname: z.boolean().optional().default(false),
	timeAt: z.string().optional(),
	isTemp: z.boolean().optional(),
	logoImageId: z.string().optional(),
});

export const initBaseQuestion = {
	title: '',
	subText: '',
	dateAt: new Date().toDateString(),
	needNickname: false,
	logoImageId: '',
	article: '',
	needPhone: false,
	timeAt: '',
};
