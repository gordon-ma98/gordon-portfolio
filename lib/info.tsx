import Image from "next/image";
import me from "../app/images/me.jpeg";
import peace from "../app/images/peace.gif";

const textWithBorderStyle = {
  border: "2px solid red",
  padding: "2px",
  borderRadius: "5px"
};

export const name = () => {
  return (
    <div className="flex items-center">
      <h1 className="font-bold text-3xl font-serif">
        "Hello, World!" I'm Gordon!
      </h1>
      <div className="ml-1">
        <Image src={peace} alt="Peace!" width={60} height={60} />
      </div>
    </div>
  );
};
export const avatar = me;
export const about = () => {
  return (
    <>
      I'm in my third year of Computer Science at the{" "}
      <b>University of Waterloo</b> and recently completed an internship at{" "}
      <b>Marketing Kitchen</b> where I developed automation projects from
      inception to completion.
    </>
  );
};
export const bio = () => {
  return (
    <div>
      <p className="mt-5">I've had my fair share of experiences, including:</p>
      <ul>
        <li className="ml-3">
          &#10148; Built backend features at <b>ShopThing</b>🛡️
        </li>
        <li className="ml-3">
          &#10148; Improved API engineering applications at <b>TD Bank</b> ⚙️
        </li>
        <li className="ml-3">
          &#10148; Automated testing at <b>iA Finanical Group</b> 🚀
        </li>
      </ul>
      <p className="mb-5">
        And, I'm currently <b>seeking 2024 Internships!</b>
      </p>
      <p className="mb-5">
        In my spare time, I love to challenge myself with mind-bending and
        creative coding projects. I'm always eager to pickup new languages and tools to build even impactful software. Learn more about my work{" "}
        <a href="/projects">
          <span style={textWithBorderStyle}>
            <b>here.</b>
          </span>
        </a>
      </p>
      <hr style={{marginBottom: "10px"}}/>
      <p>
        In addition, <b>'Work-life balance'</b> is at the heart of my identity,
        so during my free time, you'll find me:
      </p>
      <ul>
        <li className="ml-3">&#10148; Picking up New Instruments 🎸</li>
        <li className="ml-3">
          &#10148; Exploring Entrepreneurship and the Newest Technology 👨🏻‍💻
        </li>
        <li className="ml-3">&#10148; Playing Soccer ⚽</li>
        <li className="ml-3">&#10148; Solving Ted Ed Logic Puzzles 🧠</li>
      </ul>
      <p className="mb-5">
        You'll find more about my interests and hobbies{" "}
        <a href="/about">
          <span style={textWithBorderStyle}>
            <b>here.</b>
          </span>
        </a>
      </p>
      <p>
        I'm constantly delighted to meet new individuals and learn about
        thrilling possibilities!{" "}
        <b>
          <a href="mailto:g27ma@Uwaterloo.ca">
            <span style={textWithBorderStyle}>Let's Connect.</span>
          </a>
        </b>
      </p>
    </div>
  );
};
