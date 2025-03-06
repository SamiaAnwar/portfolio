export const logo = {
    src: "/sunflower.png"
};

export const darkModeIcon = {
    src: "/moon.svg"
};

export const menuIcon = {
    src: "/menu.svg"
};

export const close = {
    src: "/close.svg"
};

export const profile = {
    src: "/headshot3.jpeg"
};

export const resume = {
    file: "/SamiaAnwarResume.pdf",
    img: "/download.svg"
};

export const logos = {
    github: "/github_logo.svg",
    linkedin: "/linkedin_logo.svg"
};

export const about = {
    grad: "/GradShot.jpeg"
};

export const techStack = {
    aws: '/aws.svg',
    docker: '/docker.svg',
    figma: '/figma.svg',
    flask: '/flask.svg',
    gcr: '/google-cloud-run.svg',
    js: '/javascript.svg',
    nextjs: '/nextjs.svg',
    psql: '/postgresql.svg',
    python: '/python.svg',
    react: '/react.svg',
    supabase: '/supabase.svg',
    twcss: '/tailwindcss.svg',
    ts: '/typescript.svg',
    vue: '/vue.svg'
}; 

export const projects = [
    {
        name: 'My Health Pal',
        desc: 'An end-to-end web application to help families track their healthcare appointments with live user authentication.',
        src: '/myhealthpal.png',
        link: 'https://docs.google.com/presentation/d/1zJ5XNRF-AXiS6I4aMblWQ49aDNDh00HG/edit?usp=sharing&ouid=111583658904153071317&rtpof=true&sd=true',
        tags: ['GraphQL', 'DynamoDB', 'Systems Design', 'React.js', 'Node.js']
    },
    {
        name: 'Trading Simulator',
        desc: 'A random forest regressor, trained to make 30-day predictions from daily stock market closing and simulate trades. It is deployed as a live site to visualise current performance of the decisions model.',
        src: '/tradeSim.png',
        link: 'https://github.com/SamiaAnwar/trading-simulator',
        tags: ['Machine Learning', 'RESTful API', 'Flask', 'React.js', 'TailwindCSS', 'Google Cloud Run', 'Docker']
    },
    {
        name: 'matisse',
        desc: 'A Javascript library for front-end developers to quickly switch between colourspaces such as RGB and CMYK. This was tested using JUnit and published as an npm library.',
        src: '/NPM.png',
        link: 'https://www.npmjs.com/package/matisse',
        tags: ['npm', 'JavaScript', 'JUnit'],
    }
]

export const experiences = [
    {
        comp: "Healthcare Systems R&A",
        role: "Software Engineering Research Assistant",
        date: 'May 2022 - Aug 2022',
        desc: "I worked to procure data for and generate a computer vision model to aid in chronic lower back pain diagnosis using Python ML libraries. I also conducted a literary search to create project specifications and present my findings to an academic supervisor.",
        src: "/hcsra.jpg",
        tags: ['TensorFlow', 'OpenCV', 'pandas', 'Data Cleaning', 'Literature Review'],
        bg: 'teal'
    },
    {
        comp: "Llettonna Foundation",
        role: "Project Manager",
        date: 'Feb 2020 - Jul 2021',
        desc: "I co-led the development of a deep neural network to classify infanct facial patterns which resulted in a published paper. I also trained a classification model to predict the outcome of in-person vs. online psychiatric therapy.",
        src: "/llettonna_logo.jpg",
        tags: ['Machine Learning', 'Project Management', 'Data Cleaning', 'Publication'],
        bg: 'purple',
        link: 'https://www.sciencedirect.com/science/article/abs/pii/S016363832300019X?via%3Dihub'
    },
    {
        comp: "Fyelabs",
        role: "Software Developer Intern",
        date: "Apr 2020 - Aug 2020",
        desc: "Fyelabs is an engineering solutions consulting firm based in Hamilton. Here, I developped a cross platform mobile app with over 500 users. I also worked on the front-end development of an internal deals pipeline to maximise company efficiency.",
        src: "/fyelabs.jpg",
        tags: ['Vue.js', 'Flutter', 'DevOps', 'Consulting'],
        bg: 'yellow'
    }
]