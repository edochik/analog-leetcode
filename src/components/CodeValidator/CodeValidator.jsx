import { Result } from "../Result/Result.jsx";
import s from "./CodeValidator.module.scss";

const CodeValidator = (props) => {
	const { fetchRequestTest, loader, result } = props
	return <div className={s.CodeValidator}>
		{loader && <div className={s.loader}></div>}
		<Result className={s.result} result={result} status={result?.status} />
		<button className={s.button} onClick={() => fetchRequestTest()} disabled={loader}>Run</button>
	</div>;
};

export { CodeValidator };

