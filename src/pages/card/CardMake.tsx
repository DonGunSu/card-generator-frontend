import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  CSSProperties,
} from "react";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

/** 스타일링 테스트 */
const CardWrapper: CSSProperties = {
  border: "1px black solid",
  width: "800px",
  height: "300px",
  backgroundColor: "#ff32",
};

type cardType = {
  [key: string]: number;
};

const CARD_TYPE: cardType = {
  simple: 1,
  letter: 2,
};

const initialCardForm = {
  to: "받는 사람을 입력해 주세요.",
  from: "보내는 사람을 입력해 주세요.",
  content: "내용을 입력해 주세요.",
};
const CardMake = () => {
  const [cardForm, setCardForm] = useState(initialCardForm);
  const [cardImage, setCardImage] = useState("");
  const [cardType, setCardType] = useState(CARD_TYPE.simple);
  const cardRef = useRef<HTMLDivElement>(null); // 추출할 카드 이미지 selector

  const { to, from, content } = cardForm;

  useEffect(() => {
    console.log("hi");
    cardRef.current.style.backgroundImage = `url('${cardImage}')`;
  }, [cardImage]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardForm({
      ...cardForm,
      [name]: value,
    });
  };

  /** 직접 이미지 업로드 */
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;
    console.log(e.target.files);
    setCardImage(URL.createObjectURL(e.target.files[0]));
    cardRef.current.style.backgroundSize = "800px 300px";
  };

  /** 랜덤 이미지 업로드 */
  const handleRandomImage = async () => {
    console.log("handle");
    try {
      const response = await fetch(
        "https://source.unsplash.com/random/960x600"
      );
      console.log(response);
      setCardImage(response.url);
    } catch (error) {
      console.log(error);
    }
  };

  /** 랜덤 색상 변경 */
  const handleRandomColor = () => {
    console.log("randomColor");
    setCardImage("");
    cardRef.current.style.backgroundColor =
      "#" +
      ("000000" + Math.floor(Math.random() * 16777215).toString(16)).slice(-6);
  };

  /** 카드 형식 변경 */
  const handleChangeCardType = (type: string) => {
    setCardType(CARD_TYPE[type]);
  };

  /** 입력한 내용 초기화 */
  const handleResetCardForm = () => setCardForm(initialCardForm);

  /** 생성한 카드 내보내기 */
  const handleExportClick = useCallback(() => {
    if (cardRef.current === null) return;

    domtoimage
      .toPng(cardRef.current)
      .then(function (dataUrl: string) {
        console.log(typeof dataUrl);
        saveAs(dataUrl, "test.png");
      })
      .catch(function (error: Error) {
        console.error("oops, something went wrong!", error);
      });
  }, [cardRef]);

  return (
    <div>
      카드 제작
      <div ref={cardRef} style={CardWrapper}>
        <ul>
          {cardType === 2 && <li>To.{to}</li>}
          <li>{content}</li>
          {cardType === 2 && <li>From.{from}</li>}
        </ul>
      </div>
      <div>
        배경 선택
        <button onClick={handleRandomImage}>랜덤 이미지</button>
        <button>
          이미지 삽입
          <input accept="image/*" type="file" onChange={handleImageUpload} />
        </button>
        <button onClick={handleRandomColor}>랜덤 색상</button>
      </div>
      <div>
        카드 형식
        <button onClick={() => handleChangeCardType("simple")}>
          간단 형식
        </button>
        <button onClick={() => handleChangeCardType("letter")}>
          편지 형식
        </button>
      </div>
      <div>
        입력
        <input
          name="to"
          placeholder="To"
          type="text"
          value={to}
          onChange={handleInputChange}
        />
        <input
          name="content"
          placeholder="Content"
          type="text"
          value={content}
          onChange={handleInputChange}
        />
        <input
          name="from"
          placeholder="From"
          type="text"
          value={from}
          onChange={handleInputChange}
        />
        <button onClick={handleResetCardForm}>초기화</button>
        <button type="submit" onClick={handleExportClick}>
          내보내기
        </button>
      </div>
    </div>
  );
};

export default CardMake;
