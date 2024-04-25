import Block from './components/Block/Block'
import List from './components/ListAndBlock/ListAndBlock'
import styles from './App.module.css'

function App() {
	return (
		<div className={styles['container']}>
			<h1 className={styles['title']}>Hello</h1>
			<div className={styles['block']}>
				<List />
				<Block />
			</div>
		</div>
	)
}

export default App
