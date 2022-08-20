import React, { useState } from 'react';

const CardMaker = () => {
  const [cardForm, setCardForm] = useState({
    to: '',
    from: '',
    content: '',
  });

  const { to, from, content } = cardForm;

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

  return (
    <div>
      카드 제작 페이지
      <form onSubmit={handleFormSubmit}>
        <input name="to" placeholder="To" type="text" value={to} onChange={handleInputChange} />
        <input name="from" placeholder="From" type="text" value={from} onChange={handleInputChange} />
        <input name="content" placeholder="Content" type="text" value={content} onChange={handleInputChange} />
        <button type="submit">생성!</button>
      </form>
    </div>
  );
};

export default CardMaker;
