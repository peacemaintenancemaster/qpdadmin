import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
	route('/login', 'routes/login.tsx'),
	index('routes/home.tsx'),
	route('/banner', 'routes/banner.tsx'),
] satisfies RouteConfig;
