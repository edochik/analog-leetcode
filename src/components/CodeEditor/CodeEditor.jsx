import s from "./CodeEditor.module.scss";
import CodeMirror from '@uiw/react-codemirror';
import { useEffect, useState } from "react";
import { python } from "@codemirror/lang-python";
import { go } from "@codemirror/lang-go";
import { languages, languageTemplates } from "../../utils/data.js";

const CodeEditor = (props) => {
	const { code, setCode, setLanguage, setResult } = props;
	const [langCodemirror, setLangCodemirror] = useState(python());

	const handleChangeLanguage = (e) => {
		const { value } = e.target;
		setLanguage(value);
		setCode(languageTemplates[value])
		changeLanguage(value)
		setResult(null)
	}
	useEffect(() => {
		setResult(null)
	}, [code, setResult]);

	function changeLanguage(string) {
		if (string === 'python') {
			setLangCodemirror(python())
		}
		if (string === 'go') {
			setLangCodemirror(go())
		}
	}

	return <div className={s.CodeEditor} >
		<select className={s.list} onChange={(e) => handleChangeLanguage(e)}>
			{languages.map(lang => (<option value={lang} key={lang}>{lang}</option>))}
		</select>
		<CodeMirror
			value={code}
			height="200px"
			extensions={[langCodemirror]}
			onChange={(newValue) => setCode(newValue)} />
	</div>;
};

export { CodeEditor };



