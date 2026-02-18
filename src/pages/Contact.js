import React from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1>Wangsit</h1>

        <div className="contactText" style={{ whiteSpace: "pre-line" }}>
          {`𓂀 ᚦᚱᛟᚾ ᛞᚨᚲᚨᚱ ᚲᚺᚨᛚ
ꙮ ꙰ Ꙩ 𑀓𑀺𑀭𑀸 ᛉᛉᛉ

⟁ ᚨᛚᚢᚾ ᚲᚱᛖᛋᚾᚨ 𓆙
꧁ꦲꦤ꧀ꦕꦸꦂꦩꦤ꧀ꦠꦿ꧂

𑁍 ᛞᚨᚱᚨ ᚾᚨᚲᛏᚱᚨ 𓇼
Ꙩ ꙮ ꙰

ᚷᚨᛚᚨᚾ 𓂀 ᚦᚨᚱᚨ
𑀯𑀺𑀤𑁆𑀬𑀸 ᛉ`}
        </div>
      </div>
    </div>
  );
}

export default Contact;
