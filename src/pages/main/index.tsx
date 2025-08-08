import { AutoCenter } from '@/components'
import { APP_NAME } from '@/constants'
import styles from './index.module.less'

export default function Page() {
	const [count, setCount] = useState(0)
	const handleCount = () => {
		setCount(count + 1)
	}
  return (
    <div className={styles.app}>
			<AutoCenter>
			{ count }，主页面，{APP_NAME}
			<button onClick={handleCount}>+1</button>
			</AutoCenter>
    </div>
  )
}
