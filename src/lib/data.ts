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
    title: "PriMA-Care: Privacy-Preserving Multimodal Dataset for Care Robots",
    image: "/projects/prima-care-dataset.png",
    github: "https://github.com/Adelbaseli",
    description: [
      "Designed and collected a multimodal sensor dataset capturing how people interact with a care robot, covering 27 real-world activities from 17 participants.",
      "Instrumented a TIAGo robot with 8+ sensor types, from cameras and lidar to wearables and force/torque sensors, to study privacy trade-offs between modalities.",
      "Released the dataset publicly to support future research on privacy-preserving activity recognition in human-robot interaction.",
    ],
    details: [
      "Recorded 17 participants performing 27 activities spanning physical human-robot interaction, user gestures, and general presence detection around a TIAGo care robot.",
      "Instrumented the robot with a wide range of sensors, RGB, depth, thermal, 2D/3D lidar, ultra-wideband, wearable IMU, force/torque sensors, and the robot's own arm-joint encoders, to capture the same activities from many privacy/utility trade-off points at once.",
      "Data collection was approved by the Norwegian Centre for Research Data (NSD), with all participants giving informed consent to public release.",
      "Built to let researchers directly compare how well different sensor modalities, including privacy-preserving ones like lidar and IMU, perform on the same activities relative to conventional RGB cameras.",
      "Used as the evaluation benchmark for several follow-up projects on this page, including the 3D lidar activity recognition and transfer learning projects.",
      "Publicly released as a shared resource for the human-robot interaction and activity recognition research community.",
    ],
  },
  {
    title: "Transfer Learning for Privacy-Preserving Activity Recognition",
    image: "/projects/multimodal-transfer-learning.png",
    github: "https://github.com/Adelbaseli",
    description: [
      "Compared large general-purpose multimodal models against activity-recognition-specific models for recognizing what a person is doing around a robot.",
      "Tested across RGB, IMU, and depth sensors, and combinations of them, to see how well each generalizes beyond its original training data.",
      "Found that fusing privacy-preserving sensors (depth + IMU) nearly matched RGB-based accuracy, losing only about 5%, while revealing far less about a person's identity.",
    ],
    details: [
      "Trained a lightweight classification head on top of frozen, pretrained backbones for each modality, evaluated with leave-one-subject-out cross-validation on the PriMA-Care dataset.",
      "Compared two families of backbones: models built specifically for activity recognition versus large general-purpose multimodal models (ImageBind, LanguageBind) never trained on activity data.",
      "The general-purpose models consistently outperformed the activity-recognition-specific ones, reaching up to 98.29% accuracy (RGB + IMU) versus 94.97% for the best specialized combination (RGB + depth).",
      "Tested how easily each model could identify individual people, rather than activities, as a proxy for privacy leakage: RGB-based models were the most identifying, IMU and depth far less so.",
      "Fusing privacy-preserving sensors (depth + IMU) reached 93.14% accuracy, only a small drop from RGB-based approaches, a good trade-off for meaningfully better privacy.",
      "Also tested zero-shot classification, recognizing activities with no fine-tuning at all, reaching up to 82.85% accuracy, a promising direction for adding new activities without collecting new labeled data.",
    ],
  },
  {
    title: "Wi-Fi-Based Sleep Posture Monitoring",
    image: "/projects/wifi-sleep-posture.png",
    github: "https://github.com/Adelbaseli",
    description: [
      "Built a sleep posture monitoring system that uses ordinary Wi-Fi signals instead of cameras, so it works in the dark and needs no wearables.",
      "Captured Wi-Fi Channel State Information (CSI) from low-cost ESP32 devices placed around a bed, under three blanket thicknesses and from four receiver positions.",
      "A simple neural network classified supine vs. side-sleeping with up to 98% accuracy, even through a thick blanket.",
    ],
    details: [
      "Used low-cost ESP32 Wi-Fi microcontrollers to capture Channel State Information (CSI), how Wi-Fi signals bend and reflect around a body, as a completely passive, camera-free sensing modality.",
      "Collected data from 10 participants sleeping in three postures (supine, left-side, right-side) under three blanket conditions (none, thin, thick), with sensors placed at four body-level positions around the bed.",
      "Preprocessed the raw CSI signal, removing null subcarriers, filtering outliers, and applying a low-pass filter, before feeding it into a simple multilayer perceptron classifier.",
      "Evaluated with leave-one-subject-out cross-validation to make sure the model generalizes to people it wasn't trained on, not just memorized poses.",
      "The hip-level receiver gave the most reliable results, reaching 94-98% accuracy distinguishing supine from side-sleeping across all blanket conditions.",
      "Demonstrates that affordable, off-the-shelf Wi-Fi hardware can offer a private, non-intrusive alternative to cameras or wearables for sleep and health monitoring.",
    ],
  },
  {
    title: "Predicting User Movement for Safer Human-Robot Interaction",
    image: "/projects/pose-prediction-hri.png",
    github: "https://github.com/Adelbaseli",
    description: [
      "Built a privacy-preserving system that tracks a person's upper-body pose using only a thermal camera and depth sensor, no RGB video.",
      "Trained a lightweight Seq2Seq deep learning model to predict where a person's body will be a moment in the future, compensating for sensing lag.",
      "Predicting the user's movement made a robot up to 17% faster to react and up to 25% more accurate at following a moving hand.",
    ],
    details: [
      "Combined a thermal camera and a depth sensor, calibrated together via homography and pinhole projection, to reconstruct a person's 3D upper-body joint positions without ever capturing an RGB image.",
      "Used Openpose on thermal images, rather than the usual RGB input, to locate body joints in 2D before lifting them to 3D with the depth sensor.",
      "Designed a modified Seq2Seq (encoder-decoder) model, adding residual connections, an attention mechanism, bidirectional RNNs, and Time2Vec time embeddings, to predict a person's future joint positions from their recent movement.",
      "Optimized the model to run locally on a robot's onboard processor rather than in the cloud, cutting its computational cost by 34% for the same prediction accuracy.",
      "Tested on a TIAGo robot in two real scenarios: following a moving hand, and reacting to a hand entering or leaving its safety zone.",
      "Predicting the user's future pose improved hand-following accuracy by up to 25% and cut the robot's collision-avoidance reaction time by up to 17%, without needing any privacy-invasive cameras.",
    ],
  },
  {
    title: "Can Machine Learning Distinguish Elite from Non-Elite Rowers?",
    image: "/projects/rowing-skill-classification.png",
    github: "https://github.com/Adelbaseli",
    description: [
      "Built machine learning models (MLPs, CNNs, GRUs) that classify rowers as elite or non-elite from ergometer motion-capture data.",
      "Extracted joint angles and stroke-phase features from full-body motion capture to describe rowing technique.",
      "The best models reached 94-100% accuracy, showing that subtle differences in upper- and lower-body coordination separate skilled from novice rowers.",
    ],
    details: [
      "Collected motion-capture data from rowers of different skill levels performing on a rowing ergometer, tracking joint positions throughout the stroke cycle.",
      "Computed rowing-specific joint angles across the stroke phases as input features describing technique in a compact, interpretable way.",
      "Compared multiple model families, MLPs, CNNs, GRUs, and a combined CNN-GRU architecture, to see which best captures the movement patterns that separate elite from non-elite rowers.",
      "The MLP model reached 100% accuracy using the full feature set, and 94% even with a reduced feature set, showing the task is well suited to machine learning despite a small dataset.",
      "Found that coordination between upper- and lower-body limbs was particularly informative for telling skill levels apart.",
      "Suggests these models could support coaches and analysts with objective, data-driven talent identification and technique feedback.",
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