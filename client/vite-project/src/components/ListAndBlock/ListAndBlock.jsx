import styles from './List.module.css'

function List() {
	return (
		<div className={styles['container']}>
			<ul className={styles['list']}>
				<li>Элемент списка #1</li>
				<li>Сам посчитай</li>
				<li>Что хочешь?</li>
				<li>...</li>
			</ul>
		</div>
		
	)
}

export default List
