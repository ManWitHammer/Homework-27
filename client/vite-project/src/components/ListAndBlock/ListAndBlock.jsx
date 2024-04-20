import styles from './List.module.css'

function List() {
	return (
		<div className={styles['container']}>
			<ul className={styles['list']}>
				<li>Элемент списка</li>
				<li>Элемент списка</li>
				<li>Элемент списка</li>
				<li>Элемент списка</li>
				<li>Элемент списка</li>
				<li>Элемент списка</li>
				<li>Элемент списка</li>
				<li>Элемент списка</li>
			</ul>
			<div className={styles['block']}></div>
		</div>
		
	)
}

export default List
