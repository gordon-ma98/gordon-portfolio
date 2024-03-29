import Image from "next/image";
import me from "../app/images/me.jpeg";
import peace from "../app/images/peace.gif";

const styles = `
.company:hover b {
  color: red;
  cursor: pointer;
}
`;

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
      I'm in my fourth year of Computer Science at the{" "}
      <b>University of Waterloo</b> and recently completing an internship at{" "}
      <span className="company"><a href="https://www.tiktok.com/about?lang=en"><b>TikTok</b></a></span> where I am developing testing software for their Trust and Safety project from
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
         &#10148; Developed complete automation projects <span className="company"><a href="https://www.marketingkitchen.ca/"><b>Marketing Kitchen</b>💡</a></span>
        </li>
        <li className="ml-3">
          &#10148; Built backend features at <span className="company"><a href="https://www.shopthing.com/"><b>ShopThing</b>🛡️</a></span>
        </li>
        <li className="ml-3">
          &#10148; Improved API engineering applications at <span className="company"><a href="https://www.td.com/ca/en/personal-banking"><b>TD Bank</b> ⚙️</a></span>
        </li>
        <li className="ml-3">
          &#10148; Automated testing at <span className="company"><a href="https://ia.ca/individuals"><b>iA Finanical Group</b> 🚀</a></span>
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
      <p>
        In addition, you'll find me:
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
      <style>{styles}</style>
    </div>
  );
};
