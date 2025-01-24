import njCoaching from './assets/images/njCoaching.png';
import rocketair from './assets/images/rocketair.png';
import notetask from './assets/images/notetask.png';
import myportfolio1 from './assets/images/myportfolio1.png';

import {FaFigma} from "react-icons/fa";
import { FaReact, FaNodeJs} from "react-icons/fa";
import { SiMongodb, SiExpress, } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";

export const menu = [
  {href:'#about', name:"About"},
  {href:'#services', name:"Services"},
  {href:'#skills', name:"Skills"},
  {href:'#projects', name:"Projects"},
  {href:'#contact', name:"Contact"},
]

export const projects = [
  {
    id: 3,
    title: 'Coaching Website',
    image: njCoaching,
    category: "UI/UX",
    data: {
      description: `Personalized sessions and interactive workshops to help you achieve your goals. 
      Built and design in Figma.`,
      demoLink: "https://drive.google.com/file/d/1eJtzT3E1kffWEuTI1LmKOwLHnASKWl2q/view?usp=sharing",
    },
    stack: [{
      name: "Figma",
      icon: FaFigma,
      iconColor: '#248fef',
    }]
  },
  {
    id:2,
    title: 'Marketing Consultancy',
    image: rocketair,
    category:"UI/UX",
    data:{
      description: `A marketing consultancy focus on helping entrepreneurs to elevate their brand with expert marketing strategies.`,
      demoLink: "https://drive.google.com/file/d/1S83td-CCWRFDbDoBGu34T1BhUzEImb5X/view?usp=sharing",
    },
    stack: [{
      name: "Figma",
      icon: FaFigma,
      iconColor:'#248fef',
    }]
  },
  {
    id:1,
    title: 'Note Taking/Todo-list',
    image: notetask,
    category:"Web",
    data:{
      description: `Note taking and Todo-list app with complete authenication and email messaging.`,
      demoLink: "https://note-task-8ylk.onrender.com",
    },
    stack:[
      {
        name:"ReactJs",
        icon: FaReact,
        iconColor:"skyblue",
      },
      {
        name:"NodeJs",
        icon: FaNodeJs,
        iconColor:"green",
      },
      {
        name:"ExpressJs",
        icon: SiExpress,
      },
      {
        name:"MongoDB",
        icon: SiMongodb,
        iconColor:"limegreen",
      },
      {
        name: 'RiTailwindCssFill',
        icon: RiTailwindCssFill,
        iconColor: '#248fef'
      }
    ]

  },
  {
    id:4,
    title: 'Personal Portfolio',
    image: myportfolio1,
    category:"Web",
    data:{
      description: `Note taking and Todo-list app with complete authenication and email messaging.`,
      demoLink: "https://google.com/",
    },
    stack:[
      {
        name:"ReactJs",
        icon: FaReact,
        iconColor:"skyblue",
      },
      {
        name:"Javascript",
        icon: IoLogoJavascript,
        iconColor:"yellow",
      },
      {
        name:"Frame Motion",
        icon: TbBrandFramerMotion,
        iconColor:"purple",
      },
      {
        name: 'RiTailwindCssFill',
        icon: RiTailwindCssFill,
        iconColor: '#248fef'
      }
    ]

  }
]
