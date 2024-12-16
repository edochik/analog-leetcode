
import s from "./TaskDescription.module.scss";

const TaskDescription = () => {
	return <div className={s.TaskDescription}>
		<h3 className={s.text}>Задача:</h3>
		<p className={s.description}>Вам необходимо написать программу, которая выведет <b>Hello, world!</b></p>
		<h3 className={s.text}>Результат:</h3>
		<p className={s.task}><b>Hello, world!</b></p>
	</div>;
};

export { TaskDescription };