//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  let [title, setTitle] = useState(['남자 코트 추천', '강남 맛집 추천', '파이썬 독학']);
  let [like, setLike] = useState(0);
  let [modal, setModal] = useState(false);
  let [titleIdx, setTitleIdx] = useState(0);
  let [inputData, setInputData] = useState('');
  
  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
{/*       
      <button onClick={() => {
        let sortData = [...글제목].sort();
        글제목변경(sortData);
      }}>가나다라순정렬</button>
      <button onClick={() => {
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        글제목변경(copy);
      }}>글수정</button>
      <div className="list">
        <h4>{ 글제목[0] } <span onClick={() => {
          따봉변경(따봉 + 1); 
        }}>👍</span> { 따봉 } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={() => {
          setModal(!modal);
        }}>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div> */}


      {
        title.map(function(d, i){
          return (
            <>
              <div className="list" key={"list"+i}>
                <h4 onClick={() => {
                  setModal(!modal);
                  setTitleIdx(i);
                }}>{ title[i] }
                <span onClick={(e) => {
                  e.stopPropagation();
                  setLike(like+1)
                }}>👍</span>{ like }</h4>
                <p>2월 17일 발행</p>
                <button onClick={() => {
                  let titleCopy = [...title];
                  titleCopy.splice(i, 1);
                  setTitle(titleCopy);
                }}>삭제</button>
              </div>
            </>
          )
        })
      }
      
      <input onChange={(e) => {
        setInputData(e.target.value);
      }}/>

      <button onClick={() => {
        let titleCopy = [...title];
        titleCopy.push(inputData);
        setTitle(titleCopy);
      }}>글추가</button>
      {
        modal == true ? <Modal title={ title } titleIdx={ titleIdx }/> : null
      }
      <Modal2 name="김"></Modal2>
    </div>
  );
}

const Modal = (props) => {
  return (
    <div className="modal">
      <h4>{ props.title[props.titleIdx] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );
}

class Modal2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name : props.name,
      age : 20
    }
  }
  render() {
    return (
      <div>안녕 {this.state.name}
        <button onClick={() => {
          this.setState({name : 'kim'})
        }}></button>
      </div>
    );
  }
}

export default App;
