import React, { useState, useRef } from 'react';

const CardMaker = () => {
  const [cardForm, setCardForm] = useState({
    to: '',
    from: '',
    content: '',
  });

  const { to, from, content } = cardForm;

  const [fileImage, setFileImage] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setCardForm({
      ...cardForm,
      [name]: value,
    });
  }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // 카드 생성 로직 구현 필요
  }

  // 이미지 업로드
  function handleUploadImage(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) {
      return;
    }
    setFileImage(URL.createObjectURL(e.target.files[0]));
  }

  // 랜덤 이미지 생성
  function handleRandomImage() {
    document.getElementById('previewImage')?.setAttribute('src', "https://source.unsplash.com/random/960x600");
  }

  return (
    <div>
      카드 제작 페이지
      <form>
        <img id="previewImage" src={fileImage}></img>
      </form>
      <form onSubmit={handleFormSubmit}>
      <input name="picture" accept="image/*" ref={inputRef} onChange={handleUploadImage} type="file"></input>
      <button onClick={handleRandomImage}>랜덤 이미지 생성</button>
      <br/>
        <input name="to" placeholder="To" type="text" value={to} onChange={handleInputChange} />
        <input name="from" placeholder="From" type="text" value={from} onChange={handleInputChange} />
        <input name="content" placeholder="Content" type="text" value={content} onChange={handleInputChange} />
        <button type="submit">생성!</button>
      </form>
    </div>
  );
};

export default CardMaker;
