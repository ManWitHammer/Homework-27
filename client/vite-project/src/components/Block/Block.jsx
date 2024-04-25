import styles from './Block.module.css'
import pict1 from '../../assets/pict1.jpg'
import pict2 from '../../assets/pict2.jpg'
import pict3 from '../../assets/pict3.jpg'

function Block() {
	return <div className={styles['container']}>
		<div id={styles['blocks']} className={styles['invisbl1']}>
			<div className={styles['block1']}>
				<img src={pict1} alt="pict1" />
			</div>
		</div>
		<div id={styles['blocks']} className={styles['invisbl2']}>
			<div className={styles['block2']}>
				<img src={pict2} alt="pict2" />
			</div>
		</div>
		<div id={styles['blocks']} className={styles['invisbl3']}>
			<div className={styles['block3']}>
				<img src={pict3} alt="pict3" />
			</div>
		</div>
	</div>
}

export default Block
