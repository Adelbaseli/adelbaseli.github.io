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
    title: "Privacy-Preserving Activity Recognition for Human-Robot Interaction",
    image: "/projects/lidar-har-hri.png",
    github: "https://github.com/Adelbaseli",
    description: [
      "A multimodal deep-learning system that lets a care robot recognize what a person is doing around it, from handing over an object to commanding it with gestures.",
      "Combines 3D Lidar with a wrist-worn wearable and the robot's force/torque sensors, so no cameras or personally identifiable data are needed.",
      "Reaches 80%+ recognition accuracy across 9 activities by fusing all three sensors, using CNN, LSTM, Seq2Seq, and PointNet++ models.",
    ],
    details: [
      "Designed separate deep-learning models per sensor: a ConvLSTM network for the wearable and force/torque time-series data, and a PointNet++ network for the 3D Lidar point clouds.",
      "Explored two ways to merge the sensors: combining raw data early (data-level fusion) versus combining each model's learned features (feature-level fusion) through a Seq2Seq mechanism for the Lidar stream.",
      "Trained and evaluated the models on 9 real human-robot interaction activities, e.g. giving an object, holding the robot's hand while walking, stopping it, commanding it to rotate, captured on a TIAGo robot.",
      "Feature-level fusion of all three sensors was the clear winner, reaching 80.73% accuracy, well above any single sensor or a two-sensor combination.",
      "Every sensor was chosen specifically for being privacy-preserving, so the system understands user activity without capturing faces, video, or other identifiable data, which matters for home and healthcare settings.",
      "Trained large point-cloud models efficiently despite heavy compute demands, by extracting only the relevant, moving regions of each Lidar scan.",
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