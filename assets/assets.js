import logo from '@/public/next.svg';
import arrowIcon from '@/public/next.svg';
import moonIcon from '@/public/moon.svg';
import sunIcon from '@/public/sun.svg';
import menuIcon from '@/public/menu.svg';
import closeIcon from '@/public/close.svg';
import helloIcon from '@/public/hello.svg';
import downloadIcon from '@/public/download.svg';
import educationIcon from '@/public/education.svg';
import codeIcon from '@/public/code.svg';
import toolsIcon from '@/public/tools.svg';
import oyku from '@/public/oyku.png';
import robotIcon from '@/public/robot.svg';
import googleScholarIcon from '@/public/google_scholar.svg';
import githubIcon from '@/public/github.svg';
import linkedinIcon from '@/public/linkedin.svg';
import emailIcon from '@/public/email.svg';
import emailDarkIcon from '@/public/email_dark.svg';
import copyrightIcon from '@/public/copyright.svg';
import bskyIcon from '@/public/bsky.svg';
import MLIcon from '@/public/ml.svg';
import AIIcon from '@/public/ai.svg';
import cloudIcon from '@/public/cloud.svg';
import UIIcon from '@/public/ui.svg';

export const assets = {
  logo,
  arrow_icon: arrowIcon,
  moon_icon: moonIcon,
  sun_icon: sunIcon,
  menu_icon: menuIcon,
  close_icon: closeIcon,
  hello_icon: helloIcon,
  download_icon: downloadIcon,
  education_icon: educationIcon,
  code_icon: codeIcon,
  tools_icon: toolsIcon,
  oyku_image: oyku,
  robot_image: robotIcon,
  google_scholar_icon: googleScholarIcon,
  github_icon: githubIcon,
  linkedin_icon: linkedinIcon,
  email_icon: emailIcon,
  email_dark_icon: emailDarkIcon,
  copyright_icon: copyrightIcon,
  bsky_icon: bskyIcon,
  ml_icon: MLIcon,
  ai_icon: AIIcon,
  cloud_icon: cloudIcon,
  ui_icon: UIIcon,
};

export const infoList = [
  {
    icon: assets.code_icon,
    title: "Programming and Version Control",
    description: "Python, Java, SQL, Git",
  },
  {
    icon: assets.ml_icon,
    title: "Machine Learning & Statistical Modeling",
    description: "PyTorch, TensorFlow, scikit-learn\nNumPy, pandas, OpenCV\nClassical ML, deep learning, time-series modeling",
  },
  {
    icon: assets.ai_icon,
    title: "Generative AI & LLM Systems",
    description: "RAG: LangChain, embedding-based retrieval pipelines\nVector DBs: Qdrant, FAISS\nFine-tuning: LoRA\nPrompt engineering & evaluation",
  },
  {
    icon: assets.tools_icon,
    title: "MLOps & ML Systems",
    description: "Docker, MLflow, Prefect\nKubeflow pipelines\nModel serving: Triton Inference Server",
  },
  {
    icon: assets.cloud_icon,
    title: "Cloud & Infrastructure",
    description: "AWS (S3, EC2, SageMaker, Bedrock)\nScalable deployment & inference pipelines",
  },
  {
    icon: assets.ui_icon,
    title: "Backend / Frontend / Interfaces",
    description: "FastAPI, SQLLite, PostgreSQL, Alembic, React, Next.js, Gradio",
  },
];

export const toolsData = [assets.code_icon, assets.code_icon, assets.code_icon, assets.code_icon,
  assets.code_icon, assets.code_icon, assets.code_icon, assets.code_icon, assets.code_icon];
