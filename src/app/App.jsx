import { useState } from "react";
import { CodeEditor } from "../components/CodeEditor/CodeEditor.jsx"
import { CodeValidator } from "../components/CodeValidator/CodeValidator.jsx"
import { TaskDescription } from "../components/TaskDescription/TaskDescription"
import s from './App.module.scss'
import { languages, languageTemplates } from "../utils/data.js";

function App() {
  const [code, setCode] = useState(languageTemplates.python);
  const [language, setLanguage] = useState(languages[0]);
  const [loader, setLoader] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const fetchTestCode = async () => {
    setLoader(true);
    setResult(null)
    setError(null)
    try {
      const request = await fetch('https://testing-mycode.glitch.me/api/execute', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ language, code })
      })
      if (!request.ok) {
        setError(request.status)
      }
      const result = await request.json();
      setResult(result)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoader(false)
    }
  }

  return (
    <div className={s.App}>
      {error && <div className={s.error}>{error}</div>}
      <TaskDescription />
      <CodeEditor code={code} setCode={setCode} setLanguage={setLanguage} setResult={setResult} />
      <CodeValidator fetchTestCode={fetchTestCode} loader={loader} result={result} />
    </div>
  )
}

export default App
