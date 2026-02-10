import type { LoginSchema } from '~/features/auth/schema/login/login';
import { instance } from '../instance';
import type { UserSchema } from '~/features/auth/schema/user/user';

export const login = async ({
	username,
	password,
}: LoginSchema): Promise<{ admin: UserSchema }> =>
	await instance
		.post('auth/login', {
			json: { username, password },
		})
		.json();

export const register = async ({ username, password }: LoginSchema) =>
	await instance
		.post('auth/register', {
			json: { username, password },
		})
		.json();

export const session = async (): Promise<{ admin: UserSchema }> =>
	await instance.get('auth/session').json();
