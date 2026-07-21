export const personalInfo = {
  name: "Adel Baselizadeh",
  location: "Oslo, Norway",
  email: "adelb@ifi.uio.no",
  github: "https://github.com/Adelbaseli",
  linkedin: "https://www.linkedin.com/in/adel-baselizadeh-779719b1/",
  profilePicture: "/profile_photo_updated.jpeg",
  heroDescription:
    "I enjoy building AI systems that learn from different types of data, whether it is visual, temporal, textual, audio, or multimodal. I am interested in developing AI models that understand complex information, reason over it, and act through agentic AI systems. My experience covers the full ML development pipeline, from data collection and preprocessing to model development, training, evaluation, and deployment. I have applied AI across diverse domains, from psychology and sports science to human motion analysis, healthcare, audio, and robotics. I'm passionate about exploring new AI methods and applying them to problems across different domains.",
};

export const workExperience = [
  {
    company: "RITMO Centre, University of Oslo",
    location: "Oslo, Norway",
    position: "AI Researcher & Applied ML Engineer",
    period: "2024 - Present",
    achievements: [
      "Applying machine learning and deep learning for data analysis across time-series, vision, and audio modalities.",
      "Working on multimodal sensing, sensor fusion, and multimodal deep learning (RNNs, CNNs, Transformers).",
      "Audio-based machine learning and cross-modal signal processing.",
      "Collaborating with experts across healthcare, sports science, psychology, and audio technology.",
    ],
  },
  {
    company: "University of Oslo (UiO)",
    location: "Oslo, Norway",
    position: "PhD Fellow, AI / Informatics",
    period: "2020 - 2024",
    achievements: [
      "Designed deep learning models for human activity classification, monitoring, and event detection.",
      "Developed multimodal sensing systems and sensor fusion techniques across vision sensors and LiDAR.",
      "Built ML/DL pipelines end-to-end: dataset collection, preprocessing, model development, and evaluation.",
      "Applied machine learning and deep learning methods to real-world sensor data.",
    ],
  },
  // {
  //   company: "Sharif Technology Systems",
  //   location: "Tehran, Iran",
  //   position: "R&D Engineer",
  //   period: "2016 - 2018",
  //   achievements: [
  //     "Developed machine learning, deep learning, and reinforcement learning algorithms for control systems.",
  //     "Hands-on experience with sensors and control hardware.",
  //   ],
  // },
  // {
  //   company: "Djavad Mowafaghian Centre",
  //   location: "Tehran, Iran",
  //   position: "Software Engineer",
  //   period: "2018 - 2020",
  //   achievements: [
  //     "Contributed to the design and development of rehabilitation systems involving actuators and sensors.",
  //     "Hands-on experience integrating sensor data with control software.",
  //   ],
  // },
];

export const education = [
  {
    institution: "University of Oslo (UiO)",
    location: "Oslo, Norway",
    degree: "Ph.D. in Informatics, AI",
    period: "2020 - 2024",
    achievements: [],
  },
  {
    institution: "Sharif University of Technology",
    location: "Tehran, Iran",
    degree: "M.Sc. in Mechanical Engineering",
    period: "2014 - 2016",
    achievements: [],
  },
  {
    institution: "Amirkabir University of Technology",
    location: "Tehran, Iran",
    degree: "B.Sc. in Mechanical Engineering",
    period: "2010 - 2014",
    achievements: [],
  },
];

export const skills = {
  programmingLanguages: ["Python", "C++", "SQL", "MATLAB", "R"],
  frontendDevelopment: [
    "Machine Learning",
    "Deep Learning",
    "Multimodal DL (RNNs, CNNs, Transformers)",
    "Machine Vision",
    "Time-Series Analysis",
    "LLMs / VLMs",
  ],
  backendDevelopment: [
    "PyTorch",
    "TensorFlow",
    "Scikit-learn",
    "XGBoost",
    "FastAPI",
  ],
  databaseAndStorage: ["NumPy", "Pandas", "Matplotlib", "Databricks"],
  cloudAndDevOps: [
    "Docker",
    "Singularity",
    "Apptainer",
    "Microsoft Azure",
    "AWS",
    "MLflow",
    "CI/CD",
  ],
  toolsAndServices: ["Git", "CLI"],
};

export const projects = [
  {
    title:
      "Privacy-Preserving 3D Lidar-Based Multi-Modal Activity Recognition in Human-Robot Interaction",
    image: "/projects/lidar-har-hri.png",
    link: "/papers/lidar-har-hri.pdf",
    linkLabel: "Read Paper",
    description: [
      "Developed privacy-preserving human activity recognition (HAR) models for human-robot interaction (HRI), centered on 3D Lidar since it captures enough information for activity recognition without exposing sensitive user data.",
      "Integrated 3D Lidar with a wrist-worn wearable sensor and a robot's force/torque sensors using multimodal deep learning (CNN, LSTM, Seq2Seq, and PointNet++).",
      "Compared data-level and feature-level sensor fusion strategies for recognizing 9 human-robot interaction activities from the PriMA-Care dataset, collected on a TIAGo care robot.",
      "Feature-level fusion of all three sensors achieved the best results, 80.73% accuracy, outperforming any single sensor or the wearable + force/torque combination alone.",
      "Published at ICCMA 2025 (IEEE 13th International Conference on Control, Mechatronics and Automation).",
    ],
  },
  {
    title: "Dolor Sit Amet App",
    github: "https://github.com/loremipsum/dolorapp",
    description: [
      "Morbi in sem quis dui placerat ornare.",
      "Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam.",
      "Praesent dapibus, neque id cursus faucibus.",
      "Fusce feugiat malesuada odio.",
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
    ],
  },
];

export const awards = [
  {
    name: "Lorem Ipsum Award",
    issuer: "Lorem Organization",
    date: "Jan 2020",
    type: "International",
    position: "First Place",
  },
];