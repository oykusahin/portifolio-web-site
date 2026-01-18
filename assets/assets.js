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
};

export const infoList = [
  { icon: assets.code_icon, iconDark: assets.code_icon, title: 'Languages', 
    description: 'HTML, CSS, JavaScript, ReactJS, Next.js'},
  { icon: assets.tools_icon, iconDark: assets.tools_icon, title: 'Tools & Frameworks',
    description: 'Git, Docker, TensorFlow, PyTorch'},
  { icon: assets.education_icon, iconDark: assets.education_icon, title: 'Education',
    description: 'BSc in Computer Science'},
];