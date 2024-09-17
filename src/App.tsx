import React, {ChangeEvent, useState} from 'react';
import './App.css';

function App() {

	const [text, setText] = useState('')
	const [codeText, setCodeText] = useState('')

	const codingText = () => {
		let newArrText;
		let lastArray = ''; 
		if(text) {
			newArrText = text.split('')
			let counter = 0;
			for( let i = 0; i < newArrText.length; i ++){
				if (newArrText[i] === newArrText[i + 1]) {
					counter++;
				} else {
					if(counter) {
						lastArray += counter + 1 + newArrText[i]
						counter = 0;
					}else {
						lastArray += newArrText[i]
					}
				}
			}
			setCodeText(lastArray)
		}
	}

	const onChangeText = (e:ChangeEvent<HTMLTextAreaElement> ) => {
		const newText = e.target.value;
		setText(newText)
	}

	const onClipboard = () => {
		navigator.clipboard.writeText(codeText)
			.then(() => {
				alert('Текст скопирован в буфер обмена')
			})
			.catch((err) => {
				alert('Произошла ошибка!')
			})
	}

	return (
		<div className='codeForm'>
			<div className='inner'>
				<h3>Кодирование строки</h3>
				{/* <input className='source' type="text" onChange={onChangeText}/> */}
				<textarea className='source' onChange={onChangeText}>123</textarea>
				<button type="button" className="btn btn-primary" onClick={codingText}>Кодировать</button>
				<div className='result'>Результат: {codeText}</div>
				<button type="button" className="btn btn-primary" onClick={onClipboard}>Скопировать в буфер обмена</button>
			</div>
		</div>
	);
}

export default App;
