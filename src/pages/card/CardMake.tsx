import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  CSSProperties,
} from "react";
import { toPng } from "html-to-image";

/** 스타일링 테스트 */
const CardWrapper: CSSProperties = {
  border: "1px black solid",
  width: "800px",
  height: "300px",
  backgroundColor: "#ff32",
};

const CardMake = () => {
  const [cardForm, setCardForm] = useState({
    to: "",
    from: "",
    content: "",
  });
  const [cardImage, setCardImage] = useState("");
  const cardRef = useRef<HTMLDivElement>(null); // 추출할 카드 이미지 selector

  const { to, from, content } = cardForm;

  useEffect(() => {
    console.log('hi');
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
    cardRef.current.style.backgroundColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
  }

  /** 생성한 카드 내보내기 */
  const handleExportClick = useCallback(() => {
    if (cardRef.current === null) return;

    toPng(cardRef.current, { cacheBust: true })
      .then((dataUrl) => {
        console.log("dataUrl", dataUrl);
        const link = document.createElement("a");
        link.download = "test.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log("error", err, cardRef);
      });
  }, [cardRef]);

  return (
    <div>
      카드 제작
      <div ref={cardRef} style={CardWrapper}>
        <ul>
          <li>To.{to}</li>
          <li>{content}</li>
          <li>From.{from}</li>
          {/* <li>
            <img src={cardImage} alt="background" />
          </li> */}
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
        <button type="submit" onClick={handleExportClick}>
          내보내기
        </button>
      </div>
    </div>
  );
};

export default CardMake;
