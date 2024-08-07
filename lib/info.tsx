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

const tiktokLogo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 293768 333327" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" style="width: 20px; height: 20px;">
  <path d="M204958 0c5369 45832 32829 78170 77253 81022v43471l-287 27V87593c-44424-2850-69965-30183-75333-76015l-47060-1v192819c6791 86790-60835 89368-86703 56462 30342 18977 79608 6642 73766-68039V0h58365zM78515 319644c-26591-5471-50770-21358-64969-44588-34496-56437-3401-148418 96651-157884v54345l-164 27v-40773C17274 145544 7961 245185 33650 286633c9906 15984 26169 27227 44864 33011z" fill="#26f4ee"/>
  <path d="M218434 11587c3505 29920 15609 55386 35948 70259-27522-10602-43651-34934-47791-70262l11843 3zm63489 82463c3786 804 7734 1348 11844 1611v51530c-25770 2537-48321-5946-74600-21749l4034 88251c0 28460 106 41467-15166 67648-34260 58734-95927 63376-137628 35401 54529 22502 137077-4810 136916-103049v-96320c26279 15803 48830 24286 74600 21748V94050zm-171890 37247c5390-1122 11048-1985 16998-2548v54345c-21666 3569-35427 10222-41862 22528-20267 38754 5827 69491 35017 74111-33931 5638-73721-28750-49999-74111 6434-12304 18180-18959 39846-22528v-51797zm64479-119719h1808-1808z" fill="#fb2c53"/>
  <path d="M206590 11578c5369 45832 30910 73164 75333 76015v51528c-25770 2539-48321-5945-74600-21748v96320c206 125717-135035 135283-173673 72939-25688-41449-16376-141089 76383-155862v52323c-21666 3569-33412 10224-39846 22528-39762 76035 98926 121273 89342-1225V11577l47060 1z"/>
</svg>`;

export const name = () => {
  return (
    <div className="flex items-center">
      <h1 className="font-bold text-3xl font-serif" style={{ fontSize: '2rem' }}>
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
      <span className="company">
        <a href="https://www.tiktok.com/about?lang=en">
        <b style={{ whiteSpace: "nowrap" }}>
          TikTok <span dangerouslySetInnerHTML={{ __html: tiktokLogo }} style={{ display: "inline-block", verticalAlign: "middle" }} />
        </b>
        </a>
      </span>{" "}
      where I am developing backend software for Trust and Safety projects from
      inception.
    </>
  );
};
export const bio = () => {
  return (
    <div>
      <p className="mt-5">I've had my fair share of experiences, including:</p>
      <ul>
        <li className="ml-3">
          &#10148; Developed complete automation projects from scratch at{" "}
          <span className="company">
            <a href="https://www.marketingkitchen.ca/">
              <b>Marketing Kitchen</b>💡
            </a>
          </span>
        </li>
        <li className="ml-3">
          &#10148; Built backend features at{" "}
          <span className="company">
            <a href="https://www.shopthing.com/">
              <b>ShopThing</b>🛡️
            </a>
          </span>
        </li>
        <li className="ml-3">
          &#10148; Improved API engineering applications at{" "}
          <span className="company">
            <a href="https://www.td.com/ca/en/personal-banking">
              <b>TD Bank</b> ⚙️
            </a>
          </span>
        </li>
        <li className="ml-3">
          &#10148; Automated testing at{" "}
          <span className="company">
            <a href="https://ia.ca/individuals">
              <b>iA Finanical Group</b> 🚀
            </a>
          </span>
        </li>
      </ul>
      <p className="mb-5">
        And, I'm currently <b>seeking 2024 Internships!</b>
      </p>
      <p className="mb-5">
        In my spare time, I love to challenge myself with mind-bending and
        creative coding projects. I'm always eager to pickup new languages and
        tools to build even impactful software. Learn more about my work{" "}
        <a href="/projects">
          <span style={textWithBorderStyle}>
            <b>here.</b>
          </span>
        </a>
      </p>
      <p>In addition, you'll find me:</p>
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
