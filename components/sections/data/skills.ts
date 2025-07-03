interface Skills {
	[skill: string]: {
		name: string;
		img: string;
	}[];
}

const skills: Skills = {
	"Web Technologies": [
		{
			name: "ReactJS",
			img: "https://cdn.svgporn.com/logos/react.svg",
		},
		{
			name: "NextJS",
			img: "https://cdn.svgporn.com/logos/nextjs-icon.svg",
		},
		{
			name: "TailwindCSS",
			img: "https://cdn.svgporn.com/logos/tailwindcss-icon.svg",
		},
		{
			name: "HTML",
			img: "/icons/html.svg",
		},
		{
			name: "CSS",
			img: "/icons/css.svg",
		},
		{
			name: "Javascript",
			img: "https://cdn.svgporn.com/logos/javascript.svg",
		},
		{
			name: "Typescript",
			img: "https://cdn.svgporn.com/logos/typescript-icon.svg",
		},
		{
			name: "NodeJS",
			img: "https://cdn.svgporn.com/logos/nodejs-icon.svg",
		},
		{
			name: "Material UI",
			img: "https://cdn.svgporn.com/logos/material-ui.svg",
		},
		{
			name: "shadcn/ui",
			img: "/icons/shadcn.svg",
		},
		{
			name: "Chakra UI",
			img: "/icons/chakra.svg",
		},
		{
			name: "Redux",
			img: "https://cdn.svgporn.com/logos/redux.svg",
		},
		{
			name: "NPM",
			img: "https://cdn.svgporn.com/logos/npm-icon.svg",
		},
		{
			name: "Yarn",
			img: "https://cdn.svgporn.com/logos/yarn.svg",
		},
		{
			name: "ViteJS",
			img: "https://cdn.svgporn.com/logos/vitejs.svg",
		},
		{
			name: "Django",
			img: "https://cdn.svgporn.com/logos/django-icon.svg",
		},
		{
			name: "Sockets",
			img: "https://cdn.svgporn.com/logos/socket.io.svg",
		},
	],
	"Infra & Cloud": [
		{
			name: "PostgreSQL",
			img: "https://cdn.svgporn.com/logos/postgresql.svg",
		},
		{
			name: "MongoDB",
			img: "https://cdn.svgporn.com/logos/mongodb-icon.svg",
		},
		{
			name: "Docker",
			img: "https://cdn.svgporn.com/logos/docker-icon.svg",
		},
		{
			name: "Kubernetes",
			img: "https://cdn.svgporn.com/logos/kubernetes.svg",
		},
		{
			name: "AWS",
			img: "https://cdn.svgporn.com/logos/aws.svg",
		},
		{
			name: "Cloudflare",
			img: "https://cdn.svgporn.com/logos/cloudflare-icon.svg",
		},
		{
			name: "Snowflake",
			img: "https://cdn.svgporn.com/logos/snowflake-icon.svg",
		},
		{
			name: "Redis",
			img: "https://cdn.svgporn.com/logos/redis.svg",
		},
	],
	Languages: [
		{
			name: "C++",
			img: "https://cdn.svgporn.com/logos/c-plusplus.svg",
		},
		{
			name: "Python",
			img: "https://cdn.svgporn.com/logos/python.svg",
		},
		{
			name: "Java",
			img: "https://cdn.svgporn.com/logos/java.svg",
		},
	],
	"Other Tools & Technologies": [
		{
			name: "Git",
			img: "https://cdn.svgporn.com/logos/git-icon.svg",
		},
		{
			name: "Elasticsearch",
			img: "https://cdn.svgporn.com/logos/elasticsearch.svg",
		},
		{
			name: "Grafana",
			img: "https://cdn.svgporn.com/logos/grafana.svg",
		},
		{
			name: "Jira",
			img: "https://cdn.svgporn.com/logos/jira.svg",
		},
		{
			name: "Confluence",
			img: "https://cdn.svgporn.com/logos/confluence.svg",
		},
	],
};

export default skills;
