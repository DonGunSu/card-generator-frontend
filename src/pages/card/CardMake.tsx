import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  CSSProperties,
} from "react";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import * as s from "./CardMakeStyled";
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';

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
    <s.CardMakeWrapper>
      <s.CardMakeList>
        <div ref={cardRef} style={CardWrapper}>
          <ul>
            {cardType === 2 && <li>To.{to}</li>}
            <li>{content}</li>
            {cardType === 2 && <li>From.{from}</li>}
          </ul>
        </div>
        <s.ChoiceBox>
          <Divider/>
          <s.ChoiceBar>
            배경 선택
            <Button variant="outlined" onClick={handleRandomImage}>랜덤 이미지</Button>
            <Button variant="outlined">
              이미지 삽입
              <input accept="image/*" type="file" onChange={handleImageUpload} />
            </Button>
            <Button variant="outlined" onClick={handleRandomColor}>랜덤 색상</Button>
          </s.ChoiceBar>
          <Divider/>
          <s.ChoiceBar>
            카드 형식
            <Button variant="outlined" onClick={() => handleChangeCardType("simple")}>
              간단 형식
            </Button>
            <Button variant="outlined" onClick={() => handleChangeCardType("letter")}>
              편지 형식
            </Button>
          </s.ChoiceBar>
          <Divider/>
          <s.ChoiceBar>
            내용 입력
            <TextField 
              variant="outlined" 
              value = {to} 
              onChange={handleInputChange} 
              name="to"
              size = "small"
            />
            <TextField 
              variant="outlined" 
              value = {content} 
              onChange={handleInputChange} 
              name="content"
              size = "small"
            />
            <TextField 
              variant="outlined" 
              value = {from} 
              onChange={handleInputChange} 
              name="from"
              size = "small"
            />
          </s.ChoiceBar>
          <Divider/>
          <s.ExportBox>
            <s.ChoiceBar>
              <Button variant="outlined" onClick={handleResetCardForm}>초기화</Button>
              <Button variant="outlined" type="submit" onClick={handleExportClick}>
                내보내기
              </Button>
            </s.ChoiceBar>
          </s.ExportBox>
        </s.ChoiceBox>
      </s.CardMakeList>
    </s.CardMakeWrapper>
  );
};

export default CardMake;
