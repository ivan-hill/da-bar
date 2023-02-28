import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	touch-action: none;
	overflow: hidden;
	width: 100vw;
	height: 100vh;
	z-index: 6;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.blue};
	color: ${(props) => props.theme.text};

	svg {
		width: 10vw;
		height: auto;
		overflow: visible;
		stroke-linejoin: round;
		stroke-linecap: round;

		g {
			path {
				stroke: ${(props) => props.theme.text};
			}
		}
	}

	@media (max-width: 48em) {
		svg {
			width: 20vw;
		}
	}
`;

const Text = styled(motion.span)`
	font-size: ${(props) => props.theme.fontxl};
	color: ${(props) => props.theme.text};
	padding: 0.5rem;

	@media (max-width: 48em) {
		font-size: ${(props) => props.theme.fontlg};
	}
`;

const textVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,

		transition: {
			duration: 1.1,
			yoyo: Infinity, // repeats infinite times
			ease: "easeInOut",
		},
	},
};

const pathVariants = {
	hidden: {
		opacity: 0,
		pathLength: 0,
	},
	visible: {
		opacity: 1,
		pathLength: 1,

		transition: {
			duration: 2,
			ease: "easeInOut",
		},
	},
};

const Loader = () => {
	return (
    <Container
      initial={{
        y: 0,
        opacity: 1,
      }}
      exit={{
        y: "100%",
        opacity: 0,
      }}
      transition={{
        duration: 2,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        height="48px"
        viewBox="0 0 512 512"
        width="48px"
        fill="none"
      >
        <g></g>
        <g>
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M238.008,130.739V73.166h-23.77C208.397,31.87,172.835,0,129.954,0C87.072,0,51.511,31.87,45.67,73.166H20.278v57.573
			h24.532v137.128h-0.161c0,1.224,0.062,2.429,0.161,3.62v110.479H20.278v57.573H45.76C51.903,480.494,87.316,512,129.954,512
			s78.051-31.507,84.194-72.46h23.86v-57.573h-22.912V130.739H238.008z M215.097,88.868h7.21v26.17h-7.21V88.868z M44.811,423.838
			H35.98v-26.17h8.831V423.838z M44.811,115.037H35.98v-26.17h8.831V115.037z M199.395,426.857c0,38.29-31.151,69.441-69.441,69.441
			c-38.29,0-69.441-31.151-69.441-69.441V300.311c6.768,5.126,15.215,8.119,24.371,8.119c22.096,0,40.072-17.953,40.072-40.227
			v-20.34c0-20.345,16.696-36.84,37.22-36.84c20.522,0,37.219,16.019,37.219,36.955V426.857z M199.395,210.485
			c-9.568-9.395-22.719-15.163-37.219-15.163c-29.181,0-52.922,23.539-52.922,52.542v20.34c0,13.615-10.933,24.525-24.37,24.525
			c-12.589,0-22.987-9.747-24.371-22.066V85.143c0-38.29,31.151-69.441,69.441-69.441c38.29,0,69.441,31.151,69.441,69.441V210.485z
			 M215.097,397.668h7.21v26.17h-7.21V397.668z"
          />
        </g>
      </svg>
      <Text variants={textVariants} initial="hidden" animate="visible">
        Da Bar
      </Text>
    </Container>
  );
};

export default Loader;