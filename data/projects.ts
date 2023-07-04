export type Project = {
	name: string
	github: string
	description: string
	demo?: string
}

export const projects: Project[] = [
	{
		name: 'React Flow Smart Edge',
		github: 'https://github.com/vitorvono/react-flow-smart-edge',
		description:
			'Custom edge for React Flow that never intersects with other nodes.',
		demo: 'https://vitorvono.github.io/react-flow-smart-edge/',
	},
	{
		name: 'Next Template App',
		github: 'https://github.com/vitorvono/next-template-app',
		description: 'Next.js template with TypeScript, Chakra UI, and more.',
		demo: '',
	},
	{
		name: 'CRA Template App',
		github: 'https://github.com/vitorvono/cra-template-app',
		description:
			'Create React App template with TypeScript, Chakra UI, and more.',
		demo: '',
	},
	{
		name: 'vono.dev',
		github: 'https://github.com/vitorvono/vono.dev',
		description: 'Source code for my personal website.',
		demo: 'https://vono.dev/',
	},
]
